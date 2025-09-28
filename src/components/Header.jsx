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
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/70 border-b border-white/10">
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
        <div className="md:hidden fixed inset-0 bg-[#111111]">
          <button
            aria-label="Close Menu"
            className="absolute top-4 right-4 text-white hover:text-accent"
            onClick={() => setOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item) => (
              item.href.startsWith('/') ? (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-white text-2xl hover:text-accent active:text-accent transition-colors ${active === item.href ? 'text-accent' : ''}`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <Link
                  key={item.href}
                  to={`/${item.href}`}
                  className={`text-white text-2xl hover:text-accent active:text-accent transition-colors ${active === item.href ? 'text-accent underline underline-offset-8' : ''}`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;


