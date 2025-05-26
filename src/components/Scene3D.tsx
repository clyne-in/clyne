
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSphere = ({ position, mousePosition }: { position: [number, number, number], mousePosition: { x: number, y: number } }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.3;
      
      // React to mouse movement
      meshRef.current.position.x = position[0] + mousePosition.x * 0.5;
      meshRef.current.position.y = position[1] + mousePosition.y * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color="#6366f1"
        transparent
        opacity={0.7}
        roughness={0.1}
        metalness={0.8}
      />
    </mesh>
  );
};

const AnimatedBox = ({ position, mousePosition }: { position: [number, number, number], mousePosition: { x: number, y: number } }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3;
      meshRef.current.rotation.y += delta * 0.5;
      
      // React to mouse movement (opposite direction)
      meshRef.current.position.x = position[0] - mousePosition.x * 0.3;
      meshRef.current.position.y = position[1] - mousePosition.y * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial
        color="#8b5cf6"
        transparent
        opacity={0.6}
        roughness={0.2}
        metalness={0.9}
      />
    </mesh>
  );
};

const Scene3D = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    setMousePosition({
      x: (clientX / innerWidth) * 2 - 1,
      y: -(clientY / innerHeight) * 2 + 1,
    });
  };

  return (
    <div 
      className="w-full h-full"
      onMouseMove={handleMouseMove}
    >
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#8b5cf6" intensity={0.5} />
        
        <AnimatedSphere position={[-2, 1, 0]} mousePosition={mousePosition} />
        <AnimatedBox position={[2, -1, 0]} mousePosition={mousePosition} />
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default Scene3D;
