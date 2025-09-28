import { motion } from "framer-motion";

const projects = [
  {
    key: "smart-advocate",
    title: "Smart Advocate",
    image: "/images/projects/smart-advocate.jpg",
    description:
      "AI legal assistant leveraging LLMs for document drafting, retrieval, and guided workflows.",
    tech: ["LangGraph", "RAG", "LLM", "LoRA", "PyTorch"],
    links: { code: "#" },
  },
  {
    key: "convopilot",
    title: "ConvoPilot",
    image: "/images/projects/convopilot.jpg",
    description:
      "Multi-agent conversational system coordinating LLM tools for enterprise workflows.",
    tech: ["Agentic AI", "LangGraph", "OpenAI SDK", "Neo4j"],
    links: { code: "#" },
  },
  {
    key: "vaultoniq",
    title: "Vaultoniq",
    image: "/images/projects/vaultoniq.jpg",
    description:
      "A US-based automobile automation platform for workshop employees to track attendance, work history, and optimize operations.",
    tech: ["Django", "PostgreSQL", "React Native", "OpenAI API", "Ruby on Rails"],
    links: { live: "https://app.vaultoniq.com/" },
  },
  {
    key: "instant-legal",
    title: "Instant Legal",
    image: "/images/projects/instant-legal.jpg",
    description:
      "An AI-powered platform for generating legal documents like rental agreements, tailored to UK laws using OpenAI.",
    tech: ["Django", "React", "OpenAI API", "PostgreSQL"],
    links: {
      inAction:
        "https://www.linkedin.com/posts/hasnainali3_excited-to-share-my-latest-project-we-activity-7250869201333043201-aBFe?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEvAYRABhfd5iR-aRhyClEwx8g9_dEfjIg0",
    },
  },
  {
    key: "satcorn",
    title: "SatCorn – ML-Powered Crop Irrigation",
    image: "/images/projects/satcorn.jpg",
    description:
      "AI-based crop irrigation system using satellite imagery and machine learning to detect soil irrigation levels.",
    tech: ["Django", "React", "MongoDB", "Machine Learning", "Google Maps API"],
    links: {
      github: "https://github.com/HasnainAli47/SatCorn_FYP",
      live: "https://www.linkedin.com/in/hasnainali3/details/projects/",
    },
  },
  {
    key: "resume-parser",
    title: "Resume Parser – AI-Powered Resume Analysis",
    image: "/images/projects/resume-parser.jpg",
    description:
      "An AI-driven system that parses resumes using OCR and Llama-3 to extract candidate details for structured storage and filtering.",
    tech: ["Django", "React", "SQL", "OCR", "Llama-3-70B"],
    links: {
      github: "https://github.com/HasnainAli47/ResumeParser",
      inAction:
        "https://www.linkedin.com/posts/hasnainali3_hr-resume-parser-activity-7304457213845102593-3Vru?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEvAYRABhfd5iR-aRhyClEwx8g9_dEfjIg0",
    },
  },
  {
    key: "2ndplace",
    title: "2ndPlace – Hostel Finder",
    image: "/images/projects/2ndplace.jpg",
    description:
      "A hostel discovery platform integrating Google Maps API for location-based searches and Stripe for online payments.",
    tech: ["React", "Django", "PostgreSQL", "MongoDB", "Google Maps API"],
    links: { live: "https://2ndplace-stagging.vercel.app/" },
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

function LinkButtons({ links }) {
  const buttons = [];
  if (links?.github && links.github !== "#")
    buttons.push({ label: "View Code", href: links.github, variant: "outline" });
  if (links?.live && links.live !== "#")
    buttons.push({ label: "Live Demo", href: links.live, variant: "outline" });
  if (links?.inAction && links.inAction !== "#")
    buttons.push({ label: "In Action", href: links.inAction, variant: "solid" });

  return (
    <div className="mt-5 flex flex-wrap gap-3">
      {buttons.map((b) => (
        <a
          key={b.label}
          href={b.href}
          target="_blank"
          rel="noopener noreferrer"
          className={
            b.variant === "solid"
              ? "inline-flex items-center justify-center rounded-md bg-white text-black text-sm px-4 py-2 hover:bg-accent/90 hover:shadow-[0_0_15px_rgba(0,167,167,0.5)]"
              : "inline-flex items-center justify-center rounded-md border border-accent text-white text-sm px-4 py-2 hover:bg-accent/10"
          }
        >
          {b.label}
        </a>
      ))}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-[#111111] text-[#EAEAEA] scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 py-16 sm:py-24">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white to-[#00A7A7] bg-clip-text text-transparent">
          Projects & Case Studies
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {projects.map((p) => (
            <motion.div
              key={p.key}
              variants={item}
              className="rounded-xl p-[1px] bg-gradient-to-br from-[#00A7A7]/30 to-transparent transition-transform hover:scale-[1.02] hover:shadow-[0_0_18px_rgba(0,167,167,0.35)]"
            >
              <div className="rounded-[11px] h-full border border-white/10 bg-black/30 overflow-hidden flex flex-col">
                <div className="aspect-video bg-[#0b0b0b]">
                  <img src={p.image} alt={`${p.title} screenshot`} className="w-full h-full object-cover" />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-white/95">{p.title}</h3>
                  <p className="mt-2 text-slate-300">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-full text-xs bg-[#0b0b0b] border border-white/10 text-[#EAEAEA]">
                        {t}
                      </span>
                    ))}
                  </div>
                  <LinkButtons links={p.links} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

 
