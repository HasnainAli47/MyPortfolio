import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b] text-[#EAEAEA] mt-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div>
          <h3 className="text-xl font-semibold text-white">Hasnain Ali</h3>
          <p className="mt-3 text-slate-300">Let's build the future of intelligence, together.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold">Quick Links</h4>
          <nav className="mt-3 flex flex-col gap-2 text-slate-300">
            <a href="#about" className="hover:text-accent">About</a>
            <a href="#skills" className="hover:text-accent">Skills</a>
            <a href="#experience" className="hover:text-accent">Experience</a>
            <a href="#projects" className="hover:text-accent">Projects</a>
            <Link to="/blog" className="hover:text-accent">Blog</Link>
            <a href="#contact" className="hover:text-accent">Contact</a>
          </nav>
        </div>
        <div>
          <h4 className="text-white font-semibold">Socials</h4>
          <div className="mt-3 flex items-center gap-4">
            <a href="https://linkedin.com/in/hasnainali3" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-accent">
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a href="https://github.com/HasnainAli47" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-accent">
              <FaGithub className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 py-4 text-center text-sm text-slate-400">
          © 2025 Hasnain Ali. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}