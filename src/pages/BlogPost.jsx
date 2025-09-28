import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const run = async () => {
      try {
        const res = await fetch('/api/blog');
        const data = await res.json();
        const found = Array.isArray(data) ? data.find((p) => p.slug === slug) : null;
        setPost(found || null);
      } catch {
        setPost(null);
      } finally {
        setLoading(false);
      }
    };
    run();
  }, [slug]);

  return (
    <section className="bg-[#111111] text-[#EAEAEA] min-h-screen pt-24 px-6">
      <div className="mx-auto max-w-3xl">
        {loading ? (
          <p className="text-slate-300">Loading...</p>
        ) : !post ? (
          <p className="text-slate-300">Post not found.</p>
        ) : (
          <article>
            <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-white to-[#00A7A7] bg-clip-text text-transparent">{post.title}</h1>
            <p className="mt-2 text-sm text-slate-400">{new Date(post.createdAt).toLocaleString()}</p>
            <p className="mt-6 whitespace-pre-wrap text-slate-200">{post.content}</p>
          </article>
        )}
      </div>
    </section>
  );
}


