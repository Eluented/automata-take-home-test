import React from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  Sphere,
  useTexture,
  Text,
  Stars,
  Text3D,
  Center,
} from "@react-three/drei";
import { FontLoader, TextureLoader, BackSide } from "three";
import TextScene from "../components/TextScene";


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
    <div className="w-screen h-screen cursor-grab">
      <Canvas >
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} />
        <RealisticSphere />
        <OrbitControls rotateSpeed={0.5} />
        <TextScene margin={2} />

      </Canvas>
    </div>
  );
}
