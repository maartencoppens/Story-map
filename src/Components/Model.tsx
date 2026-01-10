import { useGLTF } from "@react-three/drei";

type ModelName = "Hogwarts.glb" | "Quidditch.glb";

type ModelProps = {
  modelName: ModelName;
};

const MODEL_URLS: Record<ModelName, string> = {
  "Hogwarts.glb": "/3D-Model/Hogwarts.glb",
  "Quidditch.glb": "/3D-Model/Quidditch.glb",
};

export default function Model({ modelName }: ModelProps) {
  const { scene } = useGLTF(MODEL_URLS[modelName]);
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

useGLTF.preload(MODEL_URLS["Quidditch.glb"]);
