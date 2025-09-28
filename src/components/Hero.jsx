import { useCallback } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";

function HeroBackground() {
  const init = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="hero-bg"
      init={init}
      className="absolute inset-0 -z-10"
      options={{
        fpsLimit: 60,
        background: { color: { value: "transparent" } },
        fullScreen: { enable: false },
        detectRetina: true,
        particles: {
          number: { value: 28, density: { enable: true, area: 900 } },
          color: { value: "#00A7A7" },
          links: {
            enable: true,
            color: "#00A7A7",
            opacity: 0.25,
            width: 1,
            distance: 140,
          },
          move: { enable: true, speed: 0.35, outModes: { default: "out" } },
          opacity: { value: 0.35 },
          size: { value: { min: 1, max: 2 } },
        },
        interactivity: {
          events: { resize: true },
        },
      }}
    />
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center text-center px-6">
      <HeroBackground />

      <div className="max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-widest text-slate-300"
        >
          Hello, I'm Hasnain Ali.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-white to-[#00A7A7] bg-clip-text text-transparent"
        >
          AI/ML Engineer Building Intelligent Systems
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 text-base sm:text-lg md:text-xl text-slate-300"
        >
          A results-driven AI/ML Engineer with over 4 years of experience specializing in building and deploying sophisticated AI agents, Large Language Models (LLMs), and Retrieval-Augmented Generation (RAG) systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 flex items-center justify-center gap-5"
        >
          <a
            href="https://linkedin.com/in/hasnainali3"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-300 hover:text-accent transition transform hover:scale-110"
          >
            <FaLinkedin className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/HasnainAli47"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-300 hover:text-accent transition transform hover:scale-110"
          >
            <FaGithub className="h-6 w-6" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-md bg-white text-black font-medium px-6 py-3 hover:bg-accent/90 transition shadow hover:shadow-[0_0_15px_rgba(0,167,167,0.5)]"
          >
            View My Projects
          </a>
          <a
            href="/Hasnain Ali AI_ML Engineer Resume.docx.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-accent text-white font-medium px-6 py-3 hover:bg-accent/10 transition hover:shadow-[0_0_15px_rgba(0,167,167,0.5)]"
          >
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}


