import { motion } from "framer-motion";

const skills = [
    {
      name: "React & JavaScript",
      description: "Developed dynamic, responsive, and scalable UIs with React, using ES6+ and optimized code performance.",
      icon: "⚛️",
    },
    {
      name: "Django & REST APIs",
      description: "Built scalable backend systems, secure authentication, and RESTful APIs using Django & Django REST Framework.",
      icon: "🐍",
    },
    {
      name: "Python & AI/ML",
      description: "Implemented AI models, natural language processing (NLP), and machine learning using TensorFlow, PyTorch, and OpenAI APIs.",
      icon: "🤖",
    },
    {
      name: "Node.js & Express",
      description: "Developed robust backend microservices, handled real-time data processing, and optimized API performance.",
      icon: "🌿",
    },
    {
      name: "LLMs & NLP",
      description: "Worked with Large Language Models (LLMs) and NLP for AI-powered chatbots and resume parsing applications.",
      icon: "🧠",
    },
    {
      name: "PostgreSQL & MongoDB",
      description: "Designed and optimized relational (PostgreSQL) and NoSQL (MongoDB) databases for high-performance applications.",
      icon: "🗄️",
    },
    {
      name: "Cloud & DevOps",
      description: "Deployed applications using AWS, GCP, and Vercel, and automated CI/CD pipelines for streamlined development.",
      icon: "☁️",
    },
    {
      name: "GitHub & Version Control",
      description: "Managed projects with Git, GitHub, and project management tools like Trello & YouTrack.",
      icon: "🔧",
    },
  ];  

const Skills = () => {
  return (
    <section id="skills" className="w-full min-h-screen flex items-center justify-center bg-black text-white px-10 mb-10">
      <div className="max-w-5xl text-center relative w-full">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-8 text-cyan-400"
        >
          My Skills
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-3xl">{skill.icon}</span>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              <p className="text-gray-400">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
