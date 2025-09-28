import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b] text-[#EAEAEA] py-8 mt-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-400">© 2025 Hasnain Ali. All Rights Reserved.</p>
        <div className="flex items-center gap-4">
          <a href="https://linkedin.com/in/hasnainali3" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-accent">
            <FaLinkedin className="h-5 w-5" />
          </a>
          <a href="https://github.com/HasnainAli47" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-accent">
            <FaGithub className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}