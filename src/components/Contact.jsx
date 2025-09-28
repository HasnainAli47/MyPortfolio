import { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [error, setError] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error('Failed to send');
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      setStatus('error');
      setError('Failed to send message. Please try again later.');
    }
  };

  return (
    <section id="contact" className="bg-[#111111] text-[#EAEAEA] scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 py-16 sm:py-24">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white to-[#00A7A7] bg-clip-text text-transparent">Get In Touch</h2>
        <p className="mt-3 text-slate-300 max-w-3xl">I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision. Feel free to reach out.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div className="space-y-4">
              <a href="mailto:codingwithhasnain@gmail.com" className="flex items-center gap-3 text-slate-300 hover:text-accent">
                <FaEnvelope className="h-5 w-5" /> codingwithhasnain@gmail.com
              </a>
              <a href="https://linkedin.com/in/hasnainali3" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-accent">
                <FaLinkedin className="h-5 w-5" /> linkedin.com/in/hasnainali3
              </a>
              <a href="https://github.com/HasnainAli47" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-accent">
                <FaGithub className="h-5 w-5" /> github.com/HasnainAli47
              </a>
            </div>
          </div>

          <div>
            <form onSubmit={onSubmit} className="rounded-xl p-[1px] bg-gradient-to-br from-[#00A7A7]/30 to-transparent">
              <div className="rounded-[11px] border border-white/10 bg-black/30 p-5 space-y-4">
                <div>
                  <label className="block text-sm mb-1">Your Name</label>
                  <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Doe" className="w-full rounded-md bg-[#0b0b0b] border border-white/10 p-3" required />
                </div>
                <div>
                  <label className="block text-sm mb-1">Your Email</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jane@example.com" className="w-full rounded-md bg-[#0b0b0b] border border-white/10 p-3" required />
                </div>
                <div>
                  <label className="block text-sm mb-1">Message</label>
                  <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="How can I help?" rows={6} className="w-full rounded-md bg-[#0b0b0b] border border-white/10 p-3" required />
                </div>
                {status === 'sending' && <p className="text-slate-300 text-sm">Sending...</p>}
                {status === 'success' && <p className="text-green-400 text-sm">Message Sent!</p>}
                {status === 'error' && <p className="text-red-400 text-sm">{error}</p>}
                <button disabled={status === 'sending'} className="rounded-md bg-white text-black px-5 py-2 hover:bg-accent/90 disabled:opacity-70">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
