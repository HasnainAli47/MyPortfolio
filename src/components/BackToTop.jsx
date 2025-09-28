import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 rounded-full bg-white text-black h-10 w-10 flex items-center justify-center shadow hover:bg-accent/90 hover:shadow-[0_0_15px_rgba(0,167,167,0.5)]"
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}


