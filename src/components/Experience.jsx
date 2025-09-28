import { motion } from "framer-motion";

const roles = [
  {
    side: "left",
    title: "Software Engineer",
    company: "DEVSINC",
    dates: "Oct 2024 – Present",
    points: [
      "Built a healthcare chatbot integrating wearable-device signals to deliver proactive patient notifications.",
      "Contributed to Apple LLM initiatives; designed RAG pipelines and evaluated model quality for production.",
      "Optimized agentic workflows with LangGraph and LangChain to improve task reliability and latency.",
    ],
  },
  {
    side: "right",
    title: "Associate Software Engineer",
    company: "AMROOD LABS",
    dates: "Mar 2024 – Oct 2024",
    points: [
      "Developed robust Django REST APIs with viewsets and authentication for scalable backend services.",
      "Integrated OpenAI-powered automation (Rails service) for message completion and email generation.",
      "Improved system observability and CI/CD reliability across environments.",
    ],
  },
  {
    side: "left",
    title: "Founder & Lead Engineer",
    company: "2ndPlace",
    dates: "Jan 2023 – Feb 2024",
    points: [
      "Built a hostel discovery platform with Google Maps-based search and Stripe payments.",
      "Led end-to-end product delivery, from architecture to deployment and growth analytics.",
      "Established CI/CD, containerization, and cost-efficient cloud infrastructure.",
    ],
  },
  {
    side: "right",
    title: "Full Stack Software Engineer",
    company: "ArbiSoft",
    dates: "Jun 2024 – Aug 2024",
    points: [
      "Worked as a Full Stack Software Engineer, contributing to Django-based backend development and React-based frontend development.",
      "Collaborated closely with the TEDx team at ArbiSoft, gaining insights into their workflow and product development processes.",
    ],
  },
  {
    side: "left",
    title: "Computer Vision Engineer (Freelance)",
    company: "Self-Employed",
    dates: "Mar 2023 – Jan 2024",
    points: [
      "Worked on a UK-based project extracting data from patient-submitted PDF forms using advanced computer vision techniques.",
      "Implemented OCR, PyScat, and Google Vision API for text extraction, and AWS Rekognition for enhanced image analysis.",
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
