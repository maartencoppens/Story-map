import { Cloud, Clouds } from "@react-three/drei";
import * as THREE from "three";
import type { MapID } from "../../types/types";
import type { FC } from "react";

const Mist: FC<{ mapID: MapID }> = ({ mapID }) => {
  const cloudYposition = {
    Hogwarts: -12,
    Quidditch: -10.5,
  };

  return (
    <Clouds material={THREE.MeshBasicMaterial} frustumCulled={false}>
      <Cloud
        position={[-2, cloudYposition[mapID], 0]}
        bounds={[18, 1.2, 18]}
        volume={28}
        segments={48}
        color="#d9e0ea"
        opacity={2}
      />
    </Clouds>
  );
};

export default Mist;
