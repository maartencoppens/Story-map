import { useGLTF } from "@react-three/drei";
import type { MapID } from "../../types/types";

const MODEL_URLS: Record<MapID, string> = {
  Hogwarts: "/3D-Model/hogwarts.glb",
  Quidditch: "/3D-Model/quidditch.glb",
};
const position: Record<MapID, [number, number, number]> = {
  Hogwarts: [-3, -0.5, -1],
  Quidditch: [-5, 0, -6],
};

export default function Model({ mapID }: { mapID: MapID }) {
  const { scene } = useGLTF(MODEL_URLS[mapID]);

  return (
    <group>
      <primitive object={scene} scale={0.02} position={position[mapID]} />
    </group>
  );
}

useGLTF.preload(MODEL_URLS.Quidditch);
useGLTF.preload(MODEL_URLS.Hogwarts);
