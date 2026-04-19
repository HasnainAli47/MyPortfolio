import { motion } from "framer-motion";

const roles = [
  {
    side: "left",
    title: "Senior AI Engineer",
    company: "Devsinc",
    dates: "Apr 2025 – Present",
    points: [
      "Lead engineer on Smart Advocate, a production‑grade document intelligence platform for a US‑based legal client, operating on secure multi‑GPU virtual environments.",
      "Architected and optimized enterprise RAG systems, improving information retrieval accuracy by ~40% across core NLP workflows.",
      "Designed agentic, cyclical workflows using LangGraph to automate temporal reasoning and construct dynamic knowledge graphs in Neo4j.",
      "Fine‑tuned domain‑specific LLMs using LoRA, achieving high‑precision legal entity and clause extraction in production systems.",
    ],
  },
  {
    side: "right",
    title: "Associate Software Engineer",
    company: "Devsinc",
    dates: "Nov 2024 – Apr 2025",
    points: [
      "Contributed to LLM training and data labeling pipelines for the Turing with Google's team, supporting alignment and task‑specific optimization workflows.",
      "Developed a chronic disease conversational assistant using graph‑based reasoning (Neo4j) and biomedical NLP libraries (SciSpacy, HunFlair).",
      "Collaborated with cross‑functional teams to improve model accuracy, response quality, and system reliability for patient‑facing AI features.",
    ],
  },
  {
    side: "left",
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
    side: "right",
    title: "Associate Software Engineer",
    company: "Amrood Labs",
    dates: "Mar 2024 – Nov 2024",
    points: [
      "Developed Django REST APIs for a production mobile application supporting vehicle surveillance and operational automation.",
      "Implemented technician check‑in / check‑out tracking and support workflows to improve operational visibility.",
      "Optimized backend performance and API reliability to ensure seamless integration with React Native clients.",
      "Contributed to system improvements that increased efficiency and accuracy in automated vehicle monitoring workflows.",
    ],
  },
  {
    side: "left",
    title: "Django Developer (Part‑Time)",
    company: "Arbisoft",
    dates: "Jan 2022 – Aug 2023",
    points: [
      "Built a centralized books discovery and review platform using Django (backend) and React (frontend).",
      "Implemented features for reviews, content management, and top‑rated book filtering with data‑driven visualizations.",
      "Worked within a professional engineering environment, following clean architecture and API best practices.",
    ],
  },
  {
    side: "right",
    title: "Software Engineer",
    company: "Turing",
    dates: "Apr 2021 – Feb 2022",
    points: [
      "Team lead for the Anthropic annotations project, coordinating a distributed group of engineers on alignment data workflows.",
      "Owned delivery quality and throughput across annotation pipelines, working with remote stakeholders across time zones.",
    ],
  },
  {
    side: "left",
    title: "Founder",
    company: "2ndPlace",
    dates: "Mar 2020 – Mar 2021",
    points: [
      "Founded and led development of a global travel discovery platform, owning product vision, system architecture, and execution.",
      "Built and scaled backend and frontend systems, managing engineering decisions end‑to‑end.",
      "Led a distributed team, overseeing delivery, iteration, and platform growth.",
      "Gained hands‑on experience in product strategy, leadership, and technical decision‑making.",
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
