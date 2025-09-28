import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from 'react-icons/fa';

const links = [
  { href: 'https://linkedin.com/in/hasnainali3', label: 'LinkedIn', Icon: FaLinkedin },
  { href: 'https://github.com/HasnainAli47', label: 'GitHub', Icon: FaGithub },
  { href: 'mailto:codingwithhasnain@gmail.com', label: 'Email', Icon: FaEnvelope },
  { href: '/Hasnain Ali AI_ML Engineer Resume.docx.pdf', label: 'Download CV', Icon: FaDownload },
];

export default function SocialSidebar() {
  return (
    <motion.aside
      initial={{ x: 80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-1/2 -translate-y-1/2 right-0 z-40"
    >
      <div className="bg-[#0b0b0b] border border-white/10 rounded-l-xl p-2 flex flex-col gap-3">
        {links.map(({ href, label, Icon }) => (
          <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className="group relative flex items-center">
            <span className="absolute right-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 text-[#EAEAEA] text-xs rounded px-2 py-1 whitespace-nowrap">
              {label}
            </span>
            <div className="h-9 w-9 rounded-lg bg-black/30 border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-accent group-hover:shadow-[0_0_12px_rgba(0,167,167,0.4)] transition">
              <Icon className="h-4 w-4" />
            </div>
          </a>
        ))}
      </div>
    </motion.aside>
  );
}


