import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense, type FC } from "react";
import Model from "../Components/3D/Model";
import CanvasLoader from "../Components/3D/CanvasLoader";
import Button from "../Components/Button";
import { CameraRig } from "../Controls/CameraRig";
import { PoiButtons } from "../Components/3D/PoiButtons";
import { DEFAULT_CAMERA_POSITION, useMapStore } from "../Store/useMapStore";
import PoiRenderUi from "../Components/3D/PoiRenderUi";
import Mist from "../Components/3D/Mist";
import MusicToggle from "../Components/3D/MusicToggle";
import type { CameraGoal, MapID } from "../types/types";
import ErrorBoundary from "../Components/ErrorBoundary";

export const MapScene: FC = () => {
  const mapID: MapID = useMapStore((s) => s.mapID);
  const zoomedIn: boolean = useMapStore((s) => s.zoomedIn);
  const activePOIId: string | null = useMapStore((s) => s.activePOIId);
  const cameraGoal: CameraGoal | null = useMapStore((s) => s.cameraGoal);
  const resetPoi: () => void = useMapStore((s) => s.resetPoi);
  const musicTrack: string = useMapStore((s) => s.musicTrack);

  return (
    <>
      {zoomedIn && activePOIId && (
        <div className="absolute left-6 top-6 z-70">
          <Button label="Terug" onClick={resetPoi} />
        </div>
      )}
      <ErrorBoundary>
        <div className="h-screen w-full">
          <Canvas
            camera={{
              position: DEFAULT_CAMERA_POSITION,
              fov: 60,
              near: 0.1,
              far: 100,
            }}
          >
            <Suspense fallback={<CanvasLoader />}>
              <>
                <Environment files={`/hdri/main.exr`} background />
                <OrbitControls
                  enabled={!zoomedIn && !cameraGoal}
                  makeDefault
                  minDistance={6}
                  maxDistance={13}
                  maxPolarAngle={1.8}
                  enablePan={false}
                />
                <ambientLight intensity={0.9} />
                <directionalLight intensity={0.9} position={[10, 10, 5]} />
                <CameraRig />
                <Model mapID={mapID} />
                <Mist mapID={mapID} />
                <PoiRenderUi />
                {!zoomedIn && <PoiButtons />}
              </>
            </Suspense>
            <MusicToggle src={musicTrack} />
          </Canvas>
        </div>
      </ErrorBoundary>
    </>
  );
};
