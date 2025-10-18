import fs from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import fsSync from 'fs';
import { put, list } from '@vercel/blob';

export default async function handler(req, res) {
  const jsonPath = path.resolve('./public/posts.json');
  const blobToken = process.env.BLOB_READ_WRITE_TOKEN;
  const ADMIN_USER = (process.env.VITE_ADMIN_USER || process.env.ADMIN_USER || process.env.NEXT_PUBLIC_ADMIN_USER || '').trim();
  const ADMIN_PASS = (process.env.VITE_ADMIN_PASS || process.env.ADMIN_PASS || process.env.NEXT_PUBLIC_ADMIN_PASS || '').trim();
  const DISABLE_AUTH = String(process.env.DISABLE_BLOG_AUTH ?? 'true').toLowerCase() === 'true';

  async function loadPostsFromBlob() {
    if (!blobToken) return null;
    try {
      // Prefer stable posts.json if present; otherwise pick newest posts-*.json
      const { blobs } = await list({ token: blobToken, prefix: '' });
      let candidate = blobs.find((b) => b.pathname === 'posts.json');
      if (!candidate) {
        const candidates = blobs.filter((b) => /(^|\/)posts(-|\.)/i.test(b.pathname) && b.pathname.endsWith('.json'));
        candidates.sort((a, b) => {
          const ta = new Date(a.uploadedAt || a.lastModified || 0).getTime();
          const tb = new Date(b.uploadedAt || b.lastModified || 0).getTime();
          return tb - ta;
        });
        candidate = candidates[0];
      }
      if (!candidate) return null;
      const r = await fetch(candidate.url + `?ts=${Date.now()}`, { cache: 'no-store' });
      if (!r.ok) return null;
      return await r.json();
    } catch {
      return null;
    }
  }

  async function savePostsToBlob(posts) {
    if (!blobToken) return false;
    try {
      const body = JSON.stringify(posts, null, 2);
      await put('posts.json', body, {
        access: 'public',
        token: blobToken,
        contentType: 'application/json',
        addRandomSuffix: false,
      });
      return true;
    } catch {
      return false;
    }
  }

  if (req.method === 'GET') {
    try {
      res.setHeader('Cache-Control', 'no-store');
      const blobPosts = await loadPostsFromBlob();
      if (blobPosts) {
        res.status(200).json(blobPosts);
        return;
      }
      const fileContents = await fs.readFile(jsonPath, 'utf8');
      const posts = JSON.parse(fileContents);
      res.status(200).json(posts);
    } catch (error) {
      res.status(200).json([]);
    }
    return;
  }

  if (req.method === 'POST') {
    const { username, password, title, content, excerpt, imageUrl, imageBase64, imageName, authCheck } = req.body || {};
    
    const inputUser = String(username || '').trim();
    const inputPass = String(password || '');
    if (authCheck === true && DISABLE_AUTH) {
      return res.status(200).json({ ok: true, authDisabled: true });
    }
    if (!DISABLE_AUTH) {
      if (!ADMIN_USER || !ADMIN_PASS) {
        return res.status(500).json({ message: 'Server credentials not configured. Set VITE_ADMIN_USER/VITE_ADMIN_PASS (or ADMIN_USER/ADMIN_PASS) in environment.' });
      }
      if (inputUser !== ADMIN_USER || inputPass !== ADMIN_PASS) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
    }

    // If this is only an auth check, return early (no file writes)
    if (authCheck === true) {
      return res.status(200).json({ ok: true });
    }

    let posts = [];
    try {
      const blobPosts = await loadPostsFromBlob();
      if (blobPosts) {
        posts = blobPosts;
      } else {
        const fileContents = await fs.readFile(jsonPath, 'utf8');
        posts = JSON.parse(fileContents);
      }
    } catch (error) {
      // start fresh
    }

    // Optional image handling: if base64 provided, write to public/blog
    let headerImage = imageUrl || '';
    try {
      if (!headerImage && imageBase64 && imageName) {
        const clean = imageName.replace(/[^a-zA-Z0-9._-]/g, '_');
        const base64Data = imageBase64.split(',').pop();
        const buffer = Buffer.from(base64Data, 'base64');
        const ext = (clean.split('.').pop() || '').toLowerCase();
        const contentType = ext === 'png' ? 'image/png' : ext === 'jpg' || ext === 'jpeg' ? 'image/jpeg' : 'application/octet-stream';

        if (blobToken) {
          const { url } = await put(`blog/${Date.now()}-${clean}`, buffer, {
            access: 'public',
            contentType,
            token: blobToken,
          });
          headerImage = url;
        } else {
          // dev fallback: write to local public folder
          const dir = path.resolve('./public/blog');
          if (!fsSync.existsSync(dir)) fsSync.mkdirSync(dir, { recursive: true });
          const target = path.join(dir, clean);
          fsSync.writeFileSync(target, buffer);
          headerImage = `/blog/${clean}`;
        }
      }
    } catch {}

    const newPost = {
      id: uuidv4(),
      slug: String(title || '')
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, ''),
      title,
      content,
      excerpt,
      image: headerImage,
      createdAt: new Date().toISOString(),
    };

    posts.unshift(newPost);

    // Save posts persistently (write to Blob first, then update local file best-effort)
    let saved = false;
    if (blobToken) {
      saved = await savePostsToBlob(posts);
    }
    try {
      await fs.writeFile(jsonPath, JSON.stringify(posts, null, 2));
    } catch {}
    if (!saved && blobToken) {
      return res.status(500).json({ message: 'Failed to save posts to Blob storage. Check BLOB_READ_WRITE_TOKEN permissions.' });
    }

    res.status(201).json({ message: 'Blog post created!', post: newPost });
    return;
  }

  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}


