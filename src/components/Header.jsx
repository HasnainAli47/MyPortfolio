import { useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  // Active link highlight using IntersectionObserver
  if (typeof window !== 'undefined') {
    const ids = ['#home', '#about', '#skills', '#experience', '#projects', '#contact'];
    const sections = ids
      .map((id) => document.querySelector(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive('#' + entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    sections.forEach((el) => observer.observe(el));
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0b0b0b] border-b border-white/10 shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/#home" className="font-semibold tracking-tight text-white text-lg sm:text-xl">
          Hasnain Ali
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            item.href.startsWith('/') ? (
              <Link
                key={item.href}
                to={item.href}
                className={`text-gray-300 hover:text-accent transition-colors ${active === item.href ? 'text-accent' : ''}`}
              >
                {item.label}
              </Link>
            ) : (
              <Link
                key={item.href}
                to={`/${item.href}`}
                className={`text-gray-300 hover:text-accent transition-colors ${active === item.href ? 'text-accent underline underline-offset-8' : ''}`}
              >
                {item.label}
              </Link>
            )
          ))}
        </nav>

        <button
          aria-label="Toggle Menu"
          className="md:hidden text-white p-2 hover:text-accent transition-colors"
          onClick={() => setOpen((v) => !v)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-xs bg-zinc-900/95 border-l border-white/10 shadow-2xl p-6 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <Link to="/#home" className="font-semibold tracking-tight text-white">Hasnain Ali</Link>
              <button
                aria-label="Close Menu"
                className="text-white hover:text-accent transition-colors"
                onClick={() => setOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isRoute = item.href.startsWith('/');
                const to = isRoute ? item.href : `/${item.href}`;
                const isActive = active === item.href;
                return (
                  <Link
                    key={item.href}
                    to={to}
                    className={`block w-full rounded-lg px-4 py-3 text-white/90 hover:bg-white/10 hover:text-white transition-colors ${isActive ? 'bg-white/10 text-white' : ''}`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-auto pt-6 text-xs text-white/50">
              Press Esc or tap outside to close
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;


