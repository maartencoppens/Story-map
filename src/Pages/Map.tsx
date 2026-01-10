import { useEffect } from "react";
import Header from "../Components/Header";
import { MapScene } from "./MapScene";
import { useMapStore } from "../Store/useMapStore";
import MusicToggle from "../Components/MusicToggle";

const Map = () => {
  const musicTrack = useMapStore((s) => s.musicTrack);
  useEffect(() => {
    const setMap = useMapStore.getState().setMap;
    const resetPoi = useMapStore.getState().resetPoi;
    setMap("Hogwarts");
    resetPoi();
  }, []);
  return (
    <>
      <div className="relative h-screen bg-slate-900">
        <Header />
        <div className="absolute right-6 bottom-6 z-70">
          <MusicToggle src={musicTrack} />
        </div>
        <MapScene />
      </div>
    </>
  );
};

export default Map;
