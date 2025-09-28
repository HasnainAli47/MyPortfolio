import fs from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import fsSync from 'fs';

export default async function handler(req, res) {
  const jsonPath = path.resolve('./public/posts.json');

  if (req.method === 'GET') {
    try {
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
    console.log("The inncoming username and password ", username, password, " while the actual username and password are ", process.env.VITE_ADMIN_USER, process.env.VITE_ADMIN_PASS);
    
    if (
      username !== process.env.VITE_ADMIN_USER ||
      password !== process.env.VITE_ADMIN_PASS
    ) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // If this is only an auth check, return early (no file writes)
    if (authCheck === true) {
      return res.status(200).json({ ok: true });
    }

    let posts = [];
    try {
      const fileContents = await fs.readFile(jsonPath, 'utf8');
      posts = JSON.parse(fileContents);
    } catch (error) {
      // File missing — start fresh
    }

    // Optional image handling: if base64 provided, write to public/blog
    let headerImage = imageUrl || '';
    try {
      if (!headerImage && imageBase64 && imageName) {
        const dir = path.resolve('./public/blog');
        if (!fsSync.existsSync(dir)) fsSync.mkdirSync(dir, { recursive: true });
        const clean = imageName.replace(/[^a-zA-Z0-9._-]/g, '_');
        const target = path.join(dir, clean);
        const data = imageBase64.split(',').pop();
        fsSync.writeFileSync(target, Buffer.from(data, 'base64'));
        headerImage = `/blog/${clean}`;
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
    await fs.writeFile(jsonPath, JSON.stringify(posts, null, 2));

    res.status(201).json({ message: 'Blog post created!', post: newPost });
    return;
  }

  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}


