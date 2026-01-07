import { useGLTF } from "@react-three/drei";

type ModelProps = {
  modelName: string;
};

export default function Model({ modelName }: ModelProps) {
  const { scene } = useGLTF(`/3D-Model/${modelName}`);

  return (
    <group>
      <primitive object={scene} scale={0.02} position={[-2, -0.5, 0]} />
    </group>
  );
}

useGLTF.preload("/3D-Model/Hogwarts.glb");
useGLTF.preload("/3D-Model/Quidditch.glb");
