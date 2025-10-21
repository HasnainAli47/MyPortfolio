import { motion } from "framer-motion";

const roles = [
  {
    side: "left",
    title: "Senior AI Engineer",
    company: "2ndPlace",
    dates: "Jan 2025 – Present",
    points: [
      "Designing and deploying LLM-based and agentic AI systems using LangGraph, LangChain, and RAG pipelines for production use cases.",
      "Fine-tuned large language models with LoRA/QLoRA on multi‑GPU environments, improving task performance by 30% while optimizing compute cost.",
      "Built multi‑agent pipelines for reasoning, document parsing, and chronology generation with ChromaDB for retrieval.",
      "Developed scalable APIs (FastAPI, Docker) and integrated with AWS Bedrock/SageMaker; mentoring engineers on productization and evaluation.",
    ],
  },
  {
    side: "right",
    title: "Research Assistant (Part‑Time)",
    company: "LUMS – Lahore University of Management Sciences",
    dates: "Feb 2024 – Present",
    points: [
      "Applied research in multimodal document intelligence and VLMs.",
      "Built OCR‑driven medical data extraction pipelines (LayoutLM, Donut) achieving high precision on unstructured documents.",
      "Experimenting with LLM‑Vision hybrids for understanding, localization, and entity extraction; supporting publications and mentoring teams.",
    ],
  },
  {
    side: "left",
    title: "AI Engineer",
    company: "Emphasoft",
    dates: "May 2022 – Feb 2024",
    points: [
      "Delivered AI solutions across healthcare, fintech, and logistics from ideation to deployment.",
      "Designed NLP and CV pipelines (OCR, entity extraction, classification) with 92%+ accuracy.",
      "Built RAG systems using LangChain and Pinecone; automated training‑to‑deployment with CI/CD on AWS and Docker.",
    ],
  },
  {
    side: "right",
    title: "Associate AI Engineer & Python Developer",
    company: "NexumAI",
    dates: "Jun 2021 – May 2022",
    points: [
      "Developed AI analytics tools and deep learning prototypes (CNNs/RNNs).",
      "Built RESTful APIs with Django/Flask for real‑time inference; optimized pipelines to reduce latency by 25%.",
    ],
  },
  {
    side: "left",
    title: "Computer Vision Developer (Freelance)",
    company: "Remote",
    dates: "Jun 2020 – Jun 2021",
    points: [
      "Built custom OCR pipeline for medical forms; automated structured extraction and report generation.",
      "Integrated OpenCV + Tesseract; improved processing efficiency by 80% for healthcare clients.",
    ],
  },
];

const cardVariants = {
  hiddenLeft: { opacity: 0, x: -40 },
  hiddenRight: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export default function Experience() {
  return (
    <section id="experience" className="bg-[#111111] text-[#EAEAEA] scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 py-16 sm:py-24">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white to-[#00A7A7] bg-clip-text text-transparent">
          My Professional Journey
        </h2>

        <div className="relative mt-12">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-[#00A7A7]/40 hidden md:block" />

          <div className="space-y-12">
            {roles.map((role, idx) => {
              const isLeft = role.side === "left";
              return (
                <div key={`${role.company}-${idx}`} className="relative">
                  <span className="hidden md:block absolute left-1/2 -translate-x-1/2 mt-2 h-3 w-3 rounded-full bg-[#00A7A7] shadow-[0_0_12px_rgba(0,167,167,0.6)]" />

                  <motion.div
                    variants={cardVariants}
                    initial={isLeft ? "hiddenLeft" : "hiddenRight"}
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-stretch`}
                  >
                    {isLeft ? (
                      <>
                        <div>
                          <ExperienceCard role={role} />
                        </div>
                        <div className="hidden md:block" />
                      </>
                    ) : (
                      <>
                        <div className="hidden md:block" />
                        <div>
                          <ExperienceCard role={role} />
                        </div>
                      </>
                    )}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ role }) {
  return (
    <div className="rounded-xl p-[1px] bg-gradient-to-br from-[#00A7A7]/30 to-transparent hover:shadow-[0_0_18px_rgba(0,167,167,0.35)] transition-shadow">
      <div className="rounded-[11px] h-full border border-white/10 bg-black/30 p-5">
        <h3 className="text-xl sm:text-2xl font-bold text-white/95">{role.title}</h3>
        <p className="mt-1 text-sm sm:text-base text-slate-300">
          {role.company} • {role.dates}
        </p>
        <ul className="mt-4 list-disc list-inside space-y-2 text-slate-300">
          {role.points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
