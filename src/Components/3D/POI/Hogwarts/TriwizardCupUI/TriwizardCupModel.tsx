import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import type { Position } from "../../../../../types/types";

type TriwizardCupProps = {
  position?: Position;
  glow?: boolean;
};

export function TriwizardCup({ position, glow = false }: TriwizardCupProps) {
  const { scene } = useGLTF("/3D-Model/triwizardCup.glb");
  const cupRef = useRef<THREE.Group>(null);
  const [active, setActive] = useState(false);

  useFrame(() => {
    if (!cupRef.current) return;

    const isActive = active || glow;
    cupRef.current.traverse((obj) => {
      const material = obj instanceof THREE.Mesh ? obj.material : null;
      if (material?.emissive) {
        material.emissive.set("#3aa6ff");
        material.emissiveIntensity = isActive ? 20 : 0;
      }
    });
  });

  return (
    <group
      ref={cupRef}
      onClick={() => setActive(true)}
      scale={0.005}
      position={position ?? [0, 0, 0]}
    >
      <primitive object={scene} />
    </group>
  );
}
useGLTF.preload("/3D-Model/triwizardCup.glb");
