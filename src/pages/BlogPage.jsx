import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showNew, setShowNew] = useState(false);
  const [auth, setAuth] = useState({ username: '', password: '', authed: false });
  const [form, setForm] = useState({ title: '', excerpt: '', content: '', image: '' });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const run = async () => {
      try {
        let res = await fetch('/api/blog');
        if (!res.ok) throw new Error('api failed');
        let data = await res.json();
        if (!Array.isArray(data)) throw new Error('bad api');
        const local = JSON.parse(localStorage.getItem('dev_posts') || '[]');
        setPosts([...local, ...data]);
      } catch {
        try {
          const res2 = await fetch('/posts.json');
          const data2 = await res2.json();
          const local = JSON.parse(localStorage.getItem('dev_posts') || '[]');
          setPosts([...local, ...(Array.isArray(data2) ? data2 : [])]);
        } catch {
          const local = JSON.parse(localStorage.getItem('dev_posts') || '[]');
          setPosts(local);
        }
      } finally {
        setLoading(false);
      }
    };
    run();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch('/api/blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: auth.username,
          password: auth.password,
          title: form.title,
          content: form.content,
          excerpt: form.excerpt,
          imageUrl: form.image,
          imageBase64: form.imageBase64,
          imageName: form.imageName,
        }),
      });
      if (!res.ok) throw new Error('failed');
      const { post } = await res.json();
      setPosts((prev) => [post, ...prev]);
      setShowNew(false);
      setForm({ title: '', excerpt: '', content: '', image: '' });
    } catch (err) {
      setError('Failed to publish. Check credentials.');
    } finally {
      setSubmitting(false);
    }
  };

  const editor = useEditor({ extensions: [StarterKit], content: form.content, onUpdate: ({ editor }) => setForm((f) => ({ ...f, content: editor.getHTML() })) });

  return (
    <section className="bg-[#111111] text-[#EAEAEA] min-h-screen pt-24 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-white to-[#00A7A7] bg-clip-text text-transparent">Blog</h1>
          <button onClick={() => setShowNew(true)} className="rounded-md bg-white text-black px-4 py-2 hover:bg-accent/90 hover:shadow-[0_0_12px_rgba(0,167,167,0.5)]">New Blog</button>
        </div>
        {loading ? (
          <p className="mt-8 text-slate-300">Loading...</p>
        ) : (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {posts.map((p) => (
              <a key={p.id} href={`/blog/${p.slug}`} className="rounded-xl p-[1px] bg-gradient-to-br from-[#00A7A7]/30 to-transparent hover:shadow-[0_0_18px_rgba(0,167,167,0.35)]">
                <div className="rounded-[11px] h-full border border-white/10 bg-black/30 p-5">
                  <h2 className="text-xl font-semibold text-white/95">{p.title}</h2>
                  <p className="mt-2 text-slate-300">{p.excerpt}</p>
                  <span className="text-xs text-slate-400">{new Date(p.createdAt).toLocaleString()}</span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>

      {showNew && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/70" onClick={() => setShowNew(false)} />
          <div className="absolute left-1/2 top-24 -translate-x-1/2 w-[92%] max-w-3xl rounded-xl p-[1px] bg-gradient-to-br from-[#00A7A7]/40 to-transparent shadow-[0_0_18px_rgba(0,167,167,0.35)]">
            <div className="rounded-[11px] border border-white/10 bg-[#0b0b0b] p-6">
              {!auth.authed ? (
                <form onSubmit={async (e) => {
                  e.preventDefault();
                  if (!auth.username || !auth.password) return;
                  try {
                    const res = await fetch('/api/blog', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ username: auth.username, password: auth.password, authCheck: true })
                    });
                    if (res.ok) { setAuth({ ...auth, authed: true }); setMessage('Authenticated'); setError(null); }
                    else { setError('Invalid credentials'); setMessage(null); }
                  } catch { setError('Auth failed'); setMessage(null); }
                }} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-1">Username</label>
                    <input value={auth.username} onChange={(e) => setAuth({ ...auth, username: e.target.value })} className="w-full rounded-md bg-black/30 border border-white/10 p-3" />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Password</label>
                    <input type="password" value={auth.password} onChange={(e) => setAuth({ ...auth, password: e.target.value })} className="w-full rounded-md bg-black/30 border border-white/10 p-3" />
                  </div>
                  <div className="sm:col-span-2">
                    {message && <p className="text-green-400 text-sm mb-2">{message}</p>}
                    {error && <p className="text-red-400 text-sm mb-2">{error}</p>}
                    <button className="rounded-md bg-white text-black px-4 py-2 hover:bg-accent/90">Continue</button>
                  </div>
                </form>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm mb-1">Title</label>
                    <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="w-full rounded-md bg-black/30 border border-white/10 p-3" required />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Header Image URL (optional)</label>
                    <input value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} placeholder="/images/blog/my-header.jpg" className="w-full rounded-md bg-black/30 border border-white/10 p-3" />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Or Upload Header Image</label>
                    <input type="file" accept="image/*" onChange={async (e) => {
                      const file = e.target.files?.[0];
                      if (!file) return;
                      const reader = new FileReader();
                      reader.onload = () => setForm((f) => ({ ...f, imageBase64: reader.result, imageName: file.name }));
                      reader.readAsDataURL(file);
                    }} className="w-full text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Excerpt</label>
                    <textarea value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} rows={2} className="w-full rounded-md bg-black/30 border border-white/10 p-3" required />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Content (Rich Text)</label>
                    <div className="rounded-md border border-white/10 bg-black/20 p-2">
                      <div className="flex flex-wrap gap-2 mb-2 text-sm">
                        <button type="button" className="border border-white/10 px-2 py-1 rounded" onClick={() => editor?.chain().focus().toggleBold().run()}>Bold</button>
                        <button type="button" className="border border-white/10 px-2 py-1 rounded" onClick={() => editor?.chain().focus().toggleItalic().run()}>Italic</button>
                        <button type="button" className="border border-white/10 px-2 py-1 rounded" onClick={() => editor?.chain().focus().toggleBulletList().run()}>Bulleted List</button>
                        <button type="button" className="border border-white/10 px-2 py-1 rounded" onClick={() => editor?.chain().focus().toggleOrderedList().run()}>Ordered List</button>
                        <button type="button" className="border border-white/10 px-2 py-1 rounded" onClick={() => editor?.chain().focus().setParagraph().run()}>Paragraph</button>
                        <button type="button" className="border border-white/10 px-2 py-1 rounded" onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}>H2</button>
                      </div>
                      <EditorContent editor={editor} className="prose prose-invert max-w-none min-h-[200px]" />
                    </div>
                  </div>
                  {error && <p className="text-red-400 text-sm">{error}</p>}
                  <div className="flex items-center gap-3">
                    <button disabled={submitting} className="rounded-md bg-white text-black px-4 py-2 hover:bg-accent/90 disabled:opacity-70">{submitting ? 'Publishing...' : 'Publish'}</button>
                    <button type="button" onClick={() => setShowNew(false)} className="rounded-md border border-white/20 px-4 py-2">Cancel</button>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-sm text-slate-400 mb-2">Preview</h3>
                    <div className="rounded-lg border border-white/10 bg-black/20 p-4 prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: form.content }} />
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}


