import { useState } from 'react';
import axios from 'axios';

export default function Admin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Please enter username and password');
      setMessage(null);
      return;
    }
    setLoggedIn(true);
    setError(null);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setError(null);
    try {
      const res = await axios.post('/api/blog', {
        username,
        password,
        title,
        content,
        excerpt,
      });
      if (res.status === 201) {
        setMessage('Blog post created!');
        setTitle('');
        setExcerpt('');
        setContent('');
      }
    } catch (err) {
      setError(err?.response?.data?.message || 'Failed to create post');
    }
  };

  return (
    <section className="bg-[#111111] text-[#EAEAEA] min-h-screen pt-24 px-6">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-white to-[#00A7A7] bg-clip-text text-transparent">Admin</h1>

        {!loggedIn ? (
          <form onSubmit={onLogin} className="mt-8 space-y-4">
            <div>
              <label className="block text-sm mb-1">Username</label>
              <input value={username} onChange={(e) => setUsername(e.target.value)} className="w-full rounded-md bg-black/30 border border-white/10 p-3" />
            </div>
            <div>
              <label className="block text-sm mb-1">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full rounded-md bg-black/30 border border-white/10 p-3" />
            </div>
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <button className="mt-2 rounded-md bg-white text-black px-5 py-2 hover:bg-accent/90">Login</button>
          </form>
        ) : (
          <form onSubmit={onSubmit} className="mt-8 space-y-4">
            <div>
              <label className="block text-sm mb-1">Title</label>
              <input value={title} onChange={(e) => setTitle(e.target.value)} className="w-full rounded-md bg-black/30 border border-white/10 p-3" />
            </div>
            <div>
              <label className="block text-sm mb-1">Excerpt</label>
              <textarea value={excerpt} onChange={(e) => setExcerpt(e.target.value)} rows={3} className="w-full rounded-md bg-black/30 border border-white/10 p-3" />
            </div>
            <div>
              <label className="block text-sm mb-1">Content</label>
              <textarea value={content} onChange={(e) => setContent(e.target.value)} rows={8} className="w-full rounded-md bg-black/30 border border-white/10 p-3" />
            </div>
            {message && <p className="text-green-400 text-sm">{message}</p>}
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <button className="rounded-md bg-white text-black px-5 py-2 hover:bg-accent/90">Add Post</button>
          </form>
        )}
      </div>
    </section>
  );
}


