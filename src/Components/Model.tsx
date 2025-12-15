import { useGLTF } from "@react-three/drei";

export default function Model() {
  const { scene } = useGLTF("/3D-Model/Hogwarts-test-1.glb");

  return (
    <group>
      <primitive object={scene} scale={0.02} position={[-2, -0.5, 0]} />
    </group>
  );
}

useGLTF.preload("/3D-Model/Hogwarts-test-1.glb");
