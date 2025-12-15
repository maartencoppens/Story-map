import { Canvas } from "@react-three/fiber";
import Header from "../Components/Header";
import Model from "../Components/Model";
import { OrbitControls } from "@react-three/drei";

const Map = () => {
  return (
    <>
      <div className="min-h-screen bg-slate-900">
        <Header />
        <Canvas className="h-full">
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <directionalLight intensity={0.8} position={[10, 10, 5]} />
          <Model />
        </Canvas>
      </div>
    </>
  );
};

export default Map;
