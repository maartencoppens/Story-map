import { useGLTF } from "@react-three/drei";

type ModelName = "Hogwarts.glb" | "Quidditch.glb";

type ModelProps = {
  modelName: ModelName;
};

export default function Model({ modelName }: ModelProps) {
  const { scene } = useGLTF(`/3D-Model/${modelName}`);
  const position: Record<ModelName, [number, number, number]> = {
    "Hogwarts.glb": [-3, -0.5, -1],
    "Quidditch.glb": [-5, 0, -6],
  };

  return (
    <group>
      <primitive object={scene} scale={0.02} position={position[modelName]} />
    </group>
  );
}

useGLTF.preload("/3D-Model/Hogwarts.glb");
useGLTF.preload("/3D-Model/Quidditch.glb");
