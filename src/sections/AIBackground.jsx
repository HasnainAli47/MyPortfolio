import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, OrbitControls } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

// Particle Animation Component
const Particles = () => {
  const ref = useRef();

  // Generate random particles in a floating pattern
  const [sphere] = useState(() => {
    const positions = [];
    for (let i = 0; i < 500; i++) {
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 10;
      positions.push(x, y, z);
    }
    return new Float32Array(positions);
  });

  // Rotate particles slowly
  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.getElapsedTime() * 0.05;
  });

  return (
    <group ref={ref}>
      <Points positions={sphere}>
        <PointMaterial color="#00d4ff" size={0.05} sizeAttenuation />
      </Points>
    </group>
  );
};

// AI Background Component
const AIBackground = () => {
  return (
    <Canvas className="absolute top-0 left-0 w-full h-full z-0">
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <Particles />
    </Canvas>
  );
};

export default AIBackground;
