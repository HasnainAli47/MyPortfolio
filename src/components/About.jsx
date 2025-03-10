import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const About = () => {
  return (
    <section 
      id="about" 
      className="w-full min-h-screen flex items-center justify-center bg-black text-white px-6 md:px-7 py-13 md:py-20 relative overflow-hidden"
    >
      {/* 3D Sphere - Now Above the Text */}
      <div className="absolute inset-0 flex items-center justify-center z-10 opacity-40 pointer-events-none">
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 1]} />
          <Sphere args={[1.2, 100, 200]} scale={2}>
            <MeshDistortMaterial color="#0ea5e9" attach="material" distort={0.4} speed={2} />
          </Sphere>
        </Canvas>
      </div>

      {/* About Me Content (Now Behind the Animation) */}
      <div className="max-w-5xl text-center relative z-20">
        {/* About Me Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold mb-3 text-cyan-400"
        >
          About Me
        </motion.h2>

        {/* About Me Description */}
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="text-lg sm:text-xl md:text-2xl leading-relaxed max-w-prose mx-auto bg-black/70 p-4 rounded-lg"
        >
          I am a Full Stack Software Engineer with a passion for building AI-driven, scalable applications.  
          With expertise in Python, Django, React, and OpenAI, I specialize in developing cutting-edge AI/ML solutions 
          and integrating Natural Language Processing (NLP) into real-world applications.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
