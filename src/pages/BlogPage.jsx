import { useEffect, useState } from 'react';

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const run = async () => {
      try {
        let res = await fetch('/api/blog');
        if (!res.ok) throw new Error('api failed');
        let data = await res.json();
        if (!Array.isArray(data)) throw new Error('bad api');
        setPosts(data);
      } catch {
        try {
          const res2 = await fetch('/posts.json');
          const data2 = await res2.json();
          setPosts(Array.isArray(data2) ? data2 : []);
        } catch {
          setPosts([]);
        }
      } finally {
        setLoading(false);
      }
    };
    run();
  }, []);

  return (
    <section className="bg-[#111111] text-[#EAEAEA] min-h-screen pt-24 px-6">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-white to-[#00A7A7] bg-clip-text text-transparent">Blog</h1>
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
    </section>
  );
}


