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
                src="/hasnainali.webp"
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
              Results-driven AI Engineer with 5+ years delivering LLMs, agentic AI systems, and multimodal solutions end to end — from research and fine‑tuning (LoRA/QLoRA) to scalable production deployment.
            </p>
            <p className="mt-4 text-base sm:text-lg text-slate-300">
              I design RAG architectures, multi‑agent pipelines, and document intelligence systems using LangGraph, LangChain, PyTorch, and Hugging Face — deployed on AWS (Bedrock, SageMaker) with strong MLOps practices.
            </p>
            <p className="mt-4 text-base sm:text-lg text-slate-300">
              I love translating complex models into real applications that create measurable impact.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


