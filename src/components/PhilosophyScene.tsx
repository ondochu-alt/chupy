"use client";

import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

function GlassShape() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * 0.18;
    meshRef.current.rotation.y += delta * 0.28;
  });

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1, 0.32, 128, 32, 2, 3]} />
      <MeshTransmissionMaterial
        backside
        samples={4}
        thickness={0.3}
        chromaticAberration={0.08}
        anisotropy={0.2}
        distortion={0.04}
        distortionScale={0.1}
        temporalDistortion={0}
        iridescence={0.8}
        iridescenceIOR={1.1}
        iridescenceThicknessRange={[0, 800]}
        color="#fce8f0"
        attenuationColor="#f0a1bf"
        attenuationDistance={1.5}
        roughness={0}
        metalness={0}
        transmission={1}
        ior={1.45}
        envMapIntensity={1.5}
      />
    </mesh>
  );
}

export default function PhilosophyScene() {
  return (
    <Canvas
      frameloop="always"
      camera={{ position: [0, 0, 4.5], fov: 40 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      dpr={[1, 2]}
      style={{ width: "100%", height: "100%", background: "transparent" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={1.2} color="#fff0f5" />
        <directionalLight position={[5, 5, 5]} intensity={2} color="#ffffff" />
        <directionalLight position={[-4, -2, 4]} intensity={1} color="#f0a1bf" />
        <pointLight position={[2, 3, 2]} intensity={1.5} color="#fce8f0" />
        <Environment preset="dawn" />
        <GlassShape />
      </Suspense>
    </Canvas>
  );
}
