import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 text-center">
      <p className="text-lg">© 2025 Hasnain Ali | All Rights Reserved</p>
      <div className="flex justify-center space-x-6 mt-4">
        <a href="https://github.com/hasnainali47" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl hover:text-gray-400 transition" />
        </a>
        <a href="https://linkedin.com/in/hasnainali3" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl hover:text-gray-400 transition" />
        </a>
        <a href="mailto:codingwithhasnain@gmail.com">
          <FaEnvelope className="text-2xl hover:text-gray-400 transition" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;