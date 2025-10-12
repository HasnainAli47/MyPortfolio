import { motion } from "framer-motion";

const roles = [
  {
    side: "left",
    title: "Senior AI/ML Engineer",
    company: "DEVSINC",
    dates: "Oct 2024 – Present",
    points: [
      "Lead engineer on the \"Smart Advocate\" project, developing a state-of-the-art document intelligence system and fine-tuning LLMs (LoRA) on multi-GPU virtual machines for specialized legal information extraction.",
      "Architected and optimized enterprise-grade Retrieval-Augmented Generation (RAG) systems, significantly improving information retrieval accuracy by 40% for core NLP applications.",
      "Engineered complex, cyclical agentic workflows using LangGraph to automate chronological data analysis and construct dynamic knowledge graphs in Neo4j.",
      "Developed full-stack features for healthcare-focused NLP chatbots, integrating wearable device signals and deploying robust RAG pipelines for production-ready solutions.",
    ],
  },
  {
    side: "right",
    title: "Associate Software Engineer | AI Integration Specialist",
    company: "AMROOD LABS",
    dates: "Mar 2024 – Oct 2024",
    points: [
      "Developed and optimized primary Django backend for a mobile application, integrating PostgreSQL and AWS S3 for efficient, scalable data storage and retrieval.",
      "Integrated OpenAI models to automate contract analysis and response generation, resulting in a 60% reduction in manual processing time for legal documents.",
      "Designed and implemented robust RESTful APIs with authentication, enhancing system observability and CI/CD reliability for scalable backend services.",
    ],
  },
  {
    side: "left",
    title: "Founder & Chief AI/ML Architect",
    company: "2ndPlace",
    dates: "Mar 2019 – Feb 2024",
    points: [
      "Founded and led a cross-functional team of 14 to design, build, and launch a full-stack hostel discovery platform, supporting thousands of global users.",
      "Architected the complete system using a React frontend and a Django/PostgreSQL backend, achieving 99.9% uptime via automated AWS CI/CD pipelines.",
      "Engineered the core geolocation search feature using the Google Maps API and custom REST APIs, optimizing performance to cut average query latency by 80% through optimized indexing and caching.",
      "Pioneered product roadmap, from concept to successful public launch, driving growth analytics and establishing cost-efficient cloud infrastructure and containerization (Docker).",
      "Innovated AI-powered features for enhanced user experience and operational insights, leveraging early applications of machine learning for personalized recommendations and search optimization.",
    ],
  },
  {
    side: "right",
    title: "Full Stack Software Engineer (Internship)",
    company: "ArbiSoft",
    dates: "Jun 2024 – Aug 2024",
    points: [
      "Developed a Django-React web application with PostgreSQL, focusing on full-stack development best practices and efficient database operations.",
      "Gained hands-on experience in frontend development (React), backend API design, and database optimization including bulk data insertion techniques.",
      "Collaborated on internal projects, contributing to product development workflows and enhancing engineering practices.",
    ],
  },
  {
    side: "left",
    title: "Computer Vision Engineer (Freelance)",
    company: "Self-Employed",
    dates: "Mar 2023 – Jan 2024",
    points: [
      "Executed a UK-based project for extracting data from patient-submitted PDF forms, leveraging advanced Computer Vision techniques and OCR.",
      "Implemented solutions using Google Vision API for precise text extraction and AWS Rekognition for enhanced image analysis, improving data processing efficiency.",
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
