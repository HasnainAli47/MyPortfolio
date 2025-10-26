import { motion } from "framer-motion";
import { FaRobot, FaCodeBranch, FaDatabase, FaCogs, FaFileImage, FaEye, FaLanguage, FaPython, FaMicrochip, FaAws } from "react-icons/fa";
import { 
  SiPytorch, SiTensorflow, SiScikitlearn, SiHuggingface, SiOpenai, 
  SiDjango, SiFlask, SiPostgresql, SiMongodb, SiNeo4J, SiDocker, 
  SiGooglecloud
} from "react-icons/si";

const categories = [
  {
    title: "AI Agents & LLMs",
    skills: [
      "Agentic AI",
      "LangGraph",
      "RAG",
      "LLM Fine-Tuning (LoRA, QLoRA)",
      "LangChain",
      "Transformers",
      "Hugging Face",
      "OpenAI SDK",
      "Gemini API",
    ],
  },
  {
    title: "ML & Data Science",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "NLP (spaCy, NLTK)",
      "OCR",
      "Computer Vision",
    ],
  },
  {
    title: "Data Stores & Vector DBs",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Vector DBs (ChromaDB, Pinecone)",
      "Graph DBs (Neo4j)",
    ],
  },
  {
    title: "Cloud & MLOps",
    skills: [
      "AWS (SageMaker, Bedrock, S3, EC2 GPU)",
      "GCP",
      "CI/CD",
      "Docker",
      "Multi-GPU Environments",
    ],
  },
  {
    title: "Backend & Data",
    skills: [
      "Python (FastAPI, Django, Flask)",
      "RESTful APIs",
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

function SkillPill({ label }) {
  const key = label.toLowerCase();
  let Icon = FaCogs;
  if (key.includes("pytorch")) Icon = SiPytorch;
  else if (key.includes("tensorflow")) Icon = SiTensorflow;
  else if (key.includes("scikit")) Icon = SiScikitlearn;
  else if (key.includes("hugging")) Icon = SiHuggingface;
  else if (key.includes("openai")) Icon = SiOpenai;
  else if (key.includes("nlp")) Icon = FaLanguage;
  else if (key.includes("ocr")) Icon = FaFileImage;
  else if (key.includes("vision")) Icon = FaEye;
  else if (key.includes("postgres")) Icon = SiPostgresql;
  else if (key.includes("mongo")) Icon = SiMongodb;
  else if (key.includes("neo4")) Icon = SiNeo4J;
  else if (key.includes("docker")) Icon = SiDocker;
  else if (key.includes("aws")) Icon = FaAws;
  else if (key.includes("gcp") || key.includes("gemini")) Icon = SiGooglecloud;
  else if (key.includes("ci/cd") || key.includes("actions")) Icon = FaCogs;
  else if (key.includes("python")) Icon = FaPython;
  else if (key.includes("django")) Icon = SiDjango;
  else if (key.includes("flask")) Icon = SiFlask;
  else if (key.includes("vector") || key.includes("pinecone") || key.includes("chroma")) Icon = FaDatabase;
  else if (key.includes("graph") || key.includes("neo4j")) Icon = SiNeo4J;
  else if (key.includes("agent") || key.includes("langgraph") || key.includes("langchain")) Icon = FaRobot;
  else if (key.includes("fine-tuning") || key.includes("lora")) Icon = FaCodeBranch;
  else if (key.includes("multi-gpu") || key.includes("gpu")) Icon = FaMicrochip;

  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-[#0b0b0b] border border-white/10 text-[#EAEAEA] transition transform hover:scale-105 hover:text-accent hover:shadow-[0_0_15px_rgba(0,167,167,0.5)]">
      <Icon className="h-4 w-4" />
      {label}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="bg-[#111111] text-[#EAEAEA] scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 py-16 sm:py-24">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white to-[#00A7A7] bg-clip-text text-transparent">
          Skills & Technologies
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 flex flex-wrap gap-6"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={item}
              className="rounded-xl p-[1px] bg-gradient-to-br from-[#00A7A7]/30 to-transparent hover:shadow-[0_0_18px_rgba(0,167,167,0.35)] transition-shadow"
              style={{ flex: "1 1 280px" }}
            >
              <div className="rounded-[11px] h-full border border-white/10 bg-black/30 p-5">
                <h3 className="text-lg font-semibold text-white/90">{cat.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <SkillPill key={skill} label={skill} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
