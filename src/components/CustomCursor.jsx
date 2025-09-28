import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Disable custom cursor on touch / coarse pointer devices and small screens
    if (typeof window !== 'undefined') {
      const isCoarse = window.matchMedia('(pointer: coarse)').matches;
      const isSmall = window.matchMedia('(max-width: 768px)').matches;
      if (isCoarse || isSmall) {
        if (dotRef.current) dotRef.current.style.display = 'none';
        if (ringRef.current) ringRef.current.style.display = 'none';
        return;
      }
    }
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Initialize off-screen to avoid top-left flash
    let mouseX = -100, mouseY = -100;
    let ringX = 0, ringY = 0;
    let hovered = false;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      // Accent on interactive elements
      const target = e.target.closest('a, button, [role="button"], input, textarea, select');
      const nowHovered = Boolean(target);
      if (nowHovered !== hovered) {
        hovered = nowHovered;
        if (hovered) {
          dot.style.backgroundColor = 'var(--accent)';
          ring.style.borderColor = 'var(--accent)';
          ring.style.boxShadow = '0 0 15px rgba(0,167,167,0.5)';
        } else {
          dot.style.backgroundColor = 'rgba(255,255,255,0.8)';
          ring.style.borderColor = 'rgba(255,255,255,0.4)';
          ring.style.boxShadow = 'none';
        }
      }
    };

    const tick = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove);
    const id = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(id);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-screen" style={{ backgroundColor: 'rgba(255,255,255,0.8)' }} />
      <div ref={ringRef} className="pointer-events-none fixed left-0 top-0 z-[100] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-screen" style={{ border: '1px solid rgba(255,255,255,0.4)' }} />
    </>
  );
}


