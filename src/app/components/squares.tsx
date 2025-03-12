"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

function Model() {
  const { scene } = useGLTF("/models/squares.glb"); 

  return <primitive object={scene} scale={1.5} position={[-1, 2, 1]} />;
}

export default function Squares() {
  return (
    <Canvas 
      className="w-32 h-32" 
      camera={{ position: [0, 0, 8], fov: 30 }}
    >
      <ambientLight intensity={1} />
      <directionalLight position={[3, 5, 2]} intensity={1.5} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls enableZoom={true} minDistance={2} maxDistance={10} autoRotate autoRotateSpeed={2} />
    </Canvas>
  );
}