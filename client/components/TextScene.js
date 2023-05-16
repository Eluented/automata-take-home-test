import React from "react";
import { useThree } from "@react-three/fiber";
import { Text3D, Center } from "@react-three/drei";
import Link from "next/link";
import { useRouter } from "next/router";

export default function TextScene({ margin = 0.5 }) {
  const router = useRouter();
  const { width, height } = useThree((state) => state.viewport);

  const linkClicked = (event) => {
    if (event.button === 0 && !event.ctrlKey && !event.metaKey) {
      event.preventDefault();
      window.location.href = "/incubator";
    }
  };
  return (
    <>
      <Center
        bottom
        right
        position={[-width / 2.1 + margin, height / 2.2 - margin, 0]}
      >
        <Text3D letterSpacing={0} size={0.5} font="/font.json">
          Click 
          <meshStandardMaterial color="#16a34a" />
        </Text3D>
      </Center>
      <Center top left position={[width / 1.7 - margin, -height / 2 + margin, 0]}>
        <Text3D letterSpacing={0} size={0.5} font="/font.json">
          to Select Incubator
          <meshStandardMaterial color="#16a34a" />
        </Text3D>
      </Center>
      <Center rotation={[-0.35, -0.15, 0]}>
        <Text3D
          className="cursor-pointer"
          onClick={() => router.push("/incubator")}
          curveSegments={32}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.1}
          height={0.5}
          lineHeight={0.5}
          letterSpacing={0.05}
          size={1.5}
          font="/font.json"
        >
          {`Automata`}

          <meshStandardMaterial color="#24478A" />
        </Text3D>
      </Center>
    </>
  );
}
