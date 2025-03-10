import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import AIBackground from "./AIBackground";

const Hero = () => {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center text-center bg-black text-white">
        <AIBackground />
      {/* 3D Background */}
      {/* <Canvas className="absolute top-0 left-0 w-full h-full z-0">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <Sphere args={[1.2, 100, 100]} position={[0, 0, 0]}>
            <meshStandardMaterial attach="material" color="linear-gradient(blue, cyan)" wireframe />
        </Sphere>
      </Canvas> */}

      {/* Hero Content */}
      <div className="relative z-10">
        <motion.h1
          className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hasnain Ali
        </motion.h1>
        <motion.p
          className="text-xl mt-2 text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Full-Stack Developer | AI Enthusiast
        </motion.p>

        {/* Buttons */}
        <div className="mt-6 flex gap-6 justify-center">
            <motion.a
                href="mailto:codingwithhasnain@gmail.com"
                className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-lg hover:bg-blue-700 transition transform hover:scale-105"
                whileHover={{ scale: 1.1 }}
                >
                Hire Me
            </motion.a>
            <motion.a
                href="/Hasnain_Ali_Resume.pdf"
                download="Hasnain_Ali_Resume.pdf"
                className="px-8 py-3 bg-gray-800 text-white rounded-full font-semibold shadow-lg hover:bg-gray-700 transition transform hover:scale-105"
                whileHover={{ scale: 1.1 }}
                >
                Download Resume
            </motion.a>
        </div>
      </div>

    </div>
  );
};

export default Hero;
