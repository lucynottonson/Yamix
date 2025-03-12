"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import * as THREE from "three"; 
import Squares from "../../components/squares";

function RotatingCube() {
  const meshRef = useRef<THREE.Object3D | null>(null);
  const { scene } = useGLTF("/models/squares.glb") as unknown as { scene: THREE.Object3D };

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.01;
    }
  });

  return <primitive ref={meshRef} object={scene} scale={0.5} />;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Canvas className="absolute top-0 left-0 w-32 h-32" camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[3, 5, 2]} intensity={1.5} />
        <Suspense fallback={null}>
          <RotatingCube />
        </Suspense>
      </Canvas>

      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-5xl font-bold text-yellow-400">Yamix</h1>
        <p className="text-xl text-gray-300 mt-4">cube:</p>
        <div className="w-96 h-96 mt-10">
          <Squares />
        </div>
      </div>
    </div>
  );
}