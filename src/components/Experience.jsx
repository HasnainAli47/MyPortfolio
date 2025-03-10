import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    position: "Associate Software Engineer",
    company: "Devsinc",
    duration: "Oct 2024 – Present",
    location: "Lahore, Pakistan",
    description: [
      "Contributing to the AI/ML team, focusing on health care chatbot for chronic diseases which will recieve the signals from the wearable device and assist the patient accordingly with notifications.",
      "Along with that working on the turing tasks for Apple LLM project.",
    ],
  },
  {
    position: "Associate Software Engineer",
    company: "Amrood Labs",
    duration: "Mar 2024 – Oct 2024",
    location: "Lahore, Pakistan",
    description: [
      "Developed robust Django backend APIs using viewsets, ensuring scalable and efficient system performance.",
      "Contributed to the Vaultoniq project as a Ruby on Rails Developer, integrating OpenAI-powered automation for message completion and email generation.",
    ],
  },
  {
    position: "Full Stack Intern",
    company: "ArbiSoft",
    duration: "Jun 2024 – Aug 2024",
    location: "Lahore, Pakistan",
    description: [
      "Worked as a Full Stack Intern, contributing to Django-based backend development and React-based frontend development.",
      "Collaborated closely with the TEDx team at ArbiSoft, gaining insights into their workflow and product development processes.",
    ],
  },
  {
    position: "Computer Vision Engineer (Freelance)",
    company: "Self-Employed",
    duration: "Mar 2023 – Jan 2024",
    location: "Remote",
    description: [
      "Worked on a UK-based project extracting data from patient-submitted PDF forms using advanced computer vision techniques.",
      "Implemented OCR, PyScat, and Google Vision API for text extraction, and AWS Rekognition for enhanced image analysis.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="w-full min-h-screen flex items-center justify-center bg-black text-white px-10">
      <div className="max-w-5xl text-center relative w-full">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-8 text-cyan-400"
        >
          My Experience
        </motion.h2>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 text-left"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <FaBriefcase className="text-xl text-cyan-400" />
                <div>
                  <h3 className="text-xl font-semibold">{experience.position}</h3>
                  <p className="text-gray-400">{experience.company} | {experience.duration}</p>
                  <p className="text-sm text-gray-500">{experience.location}</p>
                </div>
              </div>
              <ul className="text-gray-300 list-disc list-inside space-y-2">
                {experience.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
