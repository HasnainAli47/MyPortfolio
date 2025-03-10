import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useRef } from "react";

const projects = [
    {
        name: "2ndPlace – Hostel Finder (Solo Initiative)",
        description: "A hostel discovery platform integrating Google Maps API for location-based searches and Stripe for online payments.",
        tech: ["React", "Django", "PostgreSQL", "MongoDB", "Google Maps API"],
        live: "https://2ndplace-stagging.vercel.app/",
        github: "#",
        In_Action: "#",
      },
  {
    name: "Vaultoniq",
    description: "A US-based automobile automation platform designed for workshop employees to track attendance, work history, and optimize operations.",
    tech: ["Django", "PostgreSQL", "React Native", "OpenAI API", "Ruby on Rails"],
    live: "https://app.vaultoniq.com/",
    github: "#",
    In_Action: "#"
  },
  {
    name: "Instant Legal",
    description: "An AI-powered platform for generating legal documents such as rental agreements and eviction notices, tailored to UK laws using OpenAI.",
    tech: ["Django", "React", "OpenAI API", "PostgreSQL"],
    live: "#",
    In_Action: "https://www.linkedin.com/posts/hasnainali3_excited-to-share-my-latest-project-we-activity-7250869201333043201-aBFe?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEvAYRABhfd5iR-aRhyClEwx8g9_dEfjIg0",
    github: "#",
  },
  {
    name: "SatCorn – ML-Powered Crop Irrigation",
    description: "AI-based crop irrigation system using satellite imagery and machine learning models to detect soil irrigation levels.",
    tech: ["Django", "React", "MongoDB", "Machine Learning", "Google Maps API"],
    In_Action: "#",
    live: "https://www.linkedin.com/in/hasnainali3/details/projects/",
    github: "https://github.com/HasnainAli47/SatCorn_FYP",
  },
  {
    name: "Resume Parser – AI-Powered Resume Analysis",
    description: "An AI-driven system that parses resumes using OCR and Llama-3 to extract candidate details for structured storage and filtering.",
    tech: ["Django", "React", "SQL", "OCR", "Llama-3-70B"],
    In_Action: "https://www.linkedin.com/posts/hasnainali3_hr-resume-parser-activity-7304457213845102593-3Vru?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEvAYRABhfd5iR-aRhyClEwx8g9_dEfjIg0",
    github: "https://github.com/HasnainAli47/ResumeParser",
    live: "#",
  },
  
];

const Projects = () => {
  const scrollRef = useRef(null);

  return (
    <section id="projects" className="w-full min-h-screen flex flex-col items-center bg-black text-white px-10 py-10">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-8 text-cyan-400 text-center"
      >
        My Projects
      </motion.h2>

      {/* Horizontal Scrollable Projects Container */}
      <motion.div
        ref={scrollRef}
        className="w-full overflow-x-auto flex gap-6 scrollbar-hide"
        whileTap={{ cursor: "grabbing" }}
        drag="x"
        dragConstraints={{ right: 0, left: -scrollRef.current?.scrollWidth + scrollRef.current?.clientWidth }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-6 mr-10 min-w-[300px] sm:min-w-[350px] md:min-w-[400px] rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="bg-gray-700 px-2 py-1 text-xs rounded-md">{tech}</span>
              ))}
            </div>
            <div className="flex justify-between">
              {project.github !== "#" && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-400 hover:text-blue-600 transition">
                  <FaGithub /> Code
                </a>
              )}
              {project.live !== "#" && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-400 hover:text-green-600 transition">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
              {project.In_Action !== "#" && (
                <a href={project.In_Action} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-yellow-400 hover:text-yellow-600 transition">
                  <FaExternalLinkAlt /> In Action
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
