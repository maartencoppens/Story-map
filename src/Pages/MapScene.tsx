import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Model from "../Components/Model";
import CanvasLoader from "../Components/CanvasLoader";
import Button from "../Components/Button";
import { CameraRig } from "../Controls/CameraRig";
import { PoiButtons } from "../Components/PoiButtons";
import { DEFAULT_CAMERA_POSITION, useMapStore } from "../Store/useMapStore";
import PoiRenderUi from "../Components/PoiRenderUi";
import ModelErrorBoundary from "../Components/ModelErrorBoundary";

type ModelName = "Hogwarts.glb" | "Quidditch.glb";
type MapConfig = {
  fogColor?: number;
  fogNear?: number;
  fogFar?: number;
};

const mapConfig: Record<ModelName, MapConfig | undefined> = {
  "Hogwarts.glb": {
    fogColor: 0xbfc7d5,
    fogNear: 4,
    fogFar: 25,
  },
  "Quidditch.glb": undefined,
};

export const MapScene = () => {
  const mapID = useMapStore((s) => s.mapID);
  const zoomedIn = useMapStore((s) => s.zoomedIn);
  const activePOIId = useMapStore((s) => s.activePOIId);
  const cameraGoal = useMapStore((s) => s.cameraGoal);
  const resetPoi = useMapStore((s) => s.resetPoi);

  const modelPath: ModelName =
    mapID === "Hogwarts" ? "Hogwarts.glb" : "Quidditch.glb";

  const handleReset = () => {
    resetPoi();
  };

  return (
    <>
      {zoomedIn && activePOIId && (
        <div className="absolute left-6 top-6 z-70 hover:magic-pointer">
          <Button label="Terug" onClick={handleReset} />
        </div>
      )}
      <ModelErrorBoundary modelPath={`/3D-Model/${modelPath}`}>
        <Canvas
          style={{ width: "100%", height: "100%" }}
          className="canvas h-screen"
          camera={{
            position: DEFAULT_CAMERA_POSITION,
            fov: 60,
            near: 0.1,
            far: 100,
          }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <>
              <Environment
                files={`/hdri/${
                  modelPath === "Hogwarts.glb" ? "hogwarts" : "quidditch"
                }.exr`}
                background
              />
              <OrbitControls enabled={!zoomedIn && !cameraGoal} makeDefault />
              <ambientLight intensity={0.5} />
              <directionalLight intensity={0.8} position={[10, 10, 5]} />
              <CameraRig />
              <Model modelName={modelPath} />
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
              <PoiRenderUi />
              {!zoomedIn && <PoiButtons />}
            </>
          </Suspense>
        </Canvas>
      </ModelErrorBoundary>
    </>
  );
};
