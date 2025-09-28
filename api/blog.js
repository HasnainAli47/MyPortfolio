import fs from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

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
    const { username, password, title, content, excerpt } = req.body || {};
    if (
      username !== process.env.VITE_ADMIN_USER ||
      password !== process.env.VITE_ADMIN_PASS
    ) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    let posts = [];
    try {
      const fileContents = await fs.readFile(jsonPath, 'utf8');
      posts = JSON.parse(fileContents);
    } catch (error) {
      // File missing — start fresh
    }

    const newPost = {
      id: uuidv4(),
      slug: String(title || '')
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, ''),
      title,
      content,
      excerpt,
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


