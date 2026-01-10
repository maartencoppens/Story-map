import { Cloud, Clouds } from "@react-three/drei";
import * as THREE from "three";

export default function CloudsComponent() {
  return (
    <Clouds material={THREE.MeshBasicMaterial} frustumCulled={false}>
      <Cloud
        position={[-7.5, -7.4, -4.5]}
        segments={40}
        bounds={[1, 1, 1]}
        volume={10}
        color="gray"
      />
      <Cloud
        position={[-9.5, -7.2, -1.5]}
        segments={30}
        bounds={[2.5, 1.2, 1]}
        volume={12}
        color="#c7ced8"
      />
      <Cloud
        position={[-6.5, -7.1, 1.5]}
        segments={36}
        bounds={[3.2, 1.4, 1.2]}
        volume={14}
        color="#b9c2cf"
      />
      <Cloud
        position={[-3.5, -7.3, 3.5]}
        segments={34}
        bounds={[2.8, 1.1, 1]}
        volume={13}
        color="#cfd6df"
      />
      <Cloud
        position={[-1, -7.6, 1]}
        segments={28}
        bounds={[2.6, 1.2, 1.1]}
        volume={11}
        color="#c1c9d5"
      />
      <Cloud
        position={[1.5, -7.5, -1.5]}
        segments={32}
        bounds={[3.4, 1.6, 1.2]}
        volume={13}
        color="#c4ccd7"
      />
      <Cloud
        position={[2.5, -7.2, -4.5]}
        segments={30}
        bounds={[3.2, 1.4, 1.2]}
        volume={12}
        color="#bfc7d2"
      />
      <Cloud
        position={[0.5, -7.1, -7]}
        segments={34}
        bounds={[2.8, 1.3, 1.1]}
        volume={11}
        color="#cbd3dd"
      />
      <Cloud
        position={[-3, -7.2, -8]}
        segments={36}
        bounds={[3.6, 1.5, 1.2]}
        volume={14}
        color="#c9d1db"
      />
      <Cloud
        position={[-6.5, -7.3, -7.5]}
        segments={30}
        bounds={[3, 1.4, 1.2]}
        volume={12}
        color="#c0c8d4"
      />
      <Cloud
        position={[-10, -7.5, -4]}
        segments={28}
        bounds={[2.8, 1.3, 1.1]}
        volume={11}
        color="#c7cfda"
      />
      <Cloud
        position={[-8, -7.6, 3]}
        segments={32}
        bounds={[3.2, 1.5, 1.2]}
        volume={13}
        color="#bfc8d3"
      />
      <Cloud
        position={[-4.5, -7.4, -1]}
        segments={34}
        bounds={[3.6, 1.6, 1.2]}
        volume={15}
        color="#cfd6e0"
      />
    </Clouds>
  );
}
