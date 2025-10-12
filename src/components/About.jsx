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
              A highly accomplished and results-driven Senior AI/ML & Full-Stack Engineer with 5+ years of comprehensive experience in designing, developing, and deploying cutting-edge Generative AI, Large Language Models (LLMs), and Retrieval-Augmented Generation (RAG) systems. I bring a proven track record of architecting scalable, production-ready AI solutions and intricate AI agents that drive significant business value.
            </p>
            <p className="mt-4 text-base sm:text-lg text-slate-300">
              My expertise includes LLM fine-tuning (LoRA, QLoRA) in multi-GPU environments, engineering complex agentic workflows with LangGraph, and optimizing enterprise-grade RAG systems for superior performance. I seamlessly integrate advanced AI with robust full-stack development using Python (Django, Flask) and React, alongside managing scalable cloud infrastructure on AWS (SageMaker, Bedrock, S3).
            </p>
            <p className="mt-4 text-base sm:text-lg text-slate-300">
              I am passionate about transforming complex challenges into intelligent, scalable, and user-centric products that deliver real-world impact, ideally for dynamic remote teams and forward-thinking organizations, including those in the UAE.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


