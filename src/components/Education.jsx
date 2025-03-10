import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    degree: "Bachelor of Science in Computer Science (BSCS)",
    institution: "COMSATS University Islamabad (CUI)",
    duration: "Feb 2020 – Feb 2024",
    cgpa: "3.33",
    description: "Specialized in Machine Learning, Artificial Intelligence, and NLP. Worked on research-driven projects in Data Science, Computer Vision, and Algorithm Development.",
  },
  {
    degree: "FSc in Engineering",
    institution: "Edwardes College Peshawar",
    duration: "2017 – 2019",
    percentage: "78%",
    description: "Focused on Mathematics, Physics, and Chemistery, developing strong analytical and problem-solving skills.",
  },
];

const Education = () => {
  return (
    <section id="education" className="w-full min-h-screen flex flex-col items-center bg-black text-white px-6 md:px-10 py-16 md:py-24">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-12 text-cyan-400 text-center"
      >
        My Education
      </motion.h2>

      {/* Timeline Container */}
      <div className="relative w-full max-w-4xl">
        {/* Vertical Line for Timeline (Desktop View) */}
        <div className="absolute left-1/2 transform -translate-x-1 w-1 h-full bg-gray-700 hidden md:block"></div>

        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`relative flex flex-col md:flex-row items-center md:items-start md:justify-between mb-10 md:mb-16 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
          >
            {/* Icon */}
            <div className="w-16 h-16 flex items-center justify-center bg-cyan-500 text-white rounded-full shadow-lg z-10">
              <FaGraduationCap size={24} />
            </div>

            {/* Content */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full md:w-5/12 relative">
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-gray-400">{edu.institution}</p>
              <span className="text-cyan-400 block mt-2">{edu.duration}</span>
              {edu.cgpa && <p className="text-gray-300">CGPA: <span className="text-yellow-400">{edu.cgpa}</span></p>}
              {edu.percentage && <p className="text-gray-300">Percentage: <span className="text-yellow-400">{edu.percentage}</span></p>}
              <p className="text-gray-300 mt-2">{edu.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
