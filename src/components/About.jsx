import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-[#111111] text-[#EAEAEA] scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden border border-transparent bg-gradient-to-br from-[#00A7A7]/30 to-transparent p-[2px] shadow-[0_0_15px_rgba(0,167,167,0.5)]">
              <img
                src="/images/profile-placeholder.jpg"
                alt="Hasnain Ali headshot"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white to-[#00A7A7] bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300">
              A results-driven AI/ML Engineer with over 3 years of experience specializing in building and deploying sophisticated AI agents, Large Language Models (LLMs), and Retrieval-Augmented Generation (RAG) systems. Expertise in fine-tuning LLMs (LoRA, QLoRA) in multi-GPU environments for high-profile clients. Proven ability to architect complex, agentic workflows with LangGraph and deliver scalable, production-ready AI solutions that solve critical business problems.
            </p>
            <p className="mt-4 text-base sm:text-lg text-slate-300">
              I am passionate about leveraging cutting-edge AI to build intelligent, scalable, and user-centric products that deliver real-world impact.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


