import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, useTexture } from "@react-three/drei";
import { TextureLoader, BackSide } from "three";

const RealisticSphere = () => {
  const texture = useTexture("/realistic_background.jpg");

  return (
    <Sphere args={[500, 60, 40]}>
      <meshBasicMaterial attach="material" map={texture} side={BackSide} />
    </Sphere>
  );
};

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <RealisticSphere />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
