import { Canvas } from "@react-three/fiber";
import Header from "../Components/Header";
import Model from "../Components/Model";
import {
  Cloud,
  Clouds,
  Environment,
  Html,
  OrbitControls,
} from "@react-three/drei";
import * as THREE from "three";
import { Suspense, useState } from "react";
import CanvasLoader from "../Components/CanvasLoader";

type ModelName = "Hogwarts.glb" | "Quidditch.glb";
type mapConfig = {
  fogColor?: number;
  fogNear?: number;
  fogFar?: number;
};

const Map = () => {
  const [modelPath, setModelPath] = useState<ModelName>("Hogwarts.glb");
  const nextModelPath: ModelName =
    modelPath === "Hogwarts.glb" ? "Quidditch.glb" : "Hogwarts.glb";

  const mapConfig: Record<ModelName, mapConfig | undefined> = {
    "Hogwarts.glb": {
      fogColor: 0xbfc7d5,
      fogNear: 4,
      fogFar: 25,
    },
    "Quidditch.glb": undefined,
  };

  return (
    <>
      <div className="h-screen bg-slate-900">
        <Header />
        <Canvas
          style={{ width: "100%", height: "100%" }}
          className="canvas h-screen"
          camera={{ position: [-4, 2, 11], fov: 60, near: 0.1, far: 100 }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <Environment files="/hdri/background.exr" background />
            <OrbitControls minDistance={6} maxDistance={11} enablePan={false} />
            <ambientLight intensity={0.5} />
            <directionalLight intensity={0.8} position={[10, 10, 5]} />
            <Model modelName={modelPath} />
            <Clouds material={THREE.MeshBasicMaterial}>
              <Cloud
                position={[-5, -5, -15]}
                segments={40}
                bounds={[2, 2, 2]}
                volume={10}
                color="gray"
              />
            </Clouds>
            {mapConfig[modelPath]?.fogColor ? (
              <fog
                attach="fog"
                args={[
                  mapConfig[modelPath]?.fogColor,
                  mapConfig[modelPath]?.fogNear,
                  mapConfig[modelPath]?.fogFar,
                ]}
              />
            ) : null}
            <Html position={[-5, -5, -15]} center>
              <button
                type="button"
                className="rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-slate-900 shadow-lg shadow-black/30 transition hover:scale-105"
                onClick={() => setModelPath(nextModelPath)}
              >
                Load model
              </button>
            </Html>
          </Suspense>
        </Canvas>
      </div>
    </>
  );
};

export default Map;
