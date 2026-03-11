import { useGLTF } from "@react-three/drei";
import type { MapID } from "../../types/types";
import type { FC } from "react";

const MODEL_URLS: Record<MapID, string> = {
  Hogwarts: "/3D-Model/Hogwarts.glb",
  Quidditch: "/3D-Model/Quidditch.glb",
};
const position: Record<MapID, [number, number, number]> = {
  Hogwarts: [-3, -0.5, -1],
  Quidditch: [-5, 0, -6],
};

const Model: FC<{ mapID: MapID }> = ({ mapID }) => {
  const { scene } = useGLTF(MODEL_URLS[mapID]);

  return (
    <group>
      <primitive object={scene} scale={0.02} position={position[mapID]} />
    </group>
  );
};

export default Model;

useGLTF.preload(MODEL_URLS.Quidditch);
useGLTF.preload(MODEL_URLS.Hogwarts);
