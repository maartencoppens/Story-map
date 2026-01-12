import { useEffect, type FC } from "react";
import Header from "../Components/Header";
import { MapScene } from "../Sections/MapScene";
import { useMapStore } from "../Store/useMapStore";

const Map: FC = () => {
  useEffect(() => {
    const setMap = useMapStore.getState().setMap;
    const resetPoi = useMapStore.getState().resetPoi;
    setMap("Hogwarts");
    resetPoi();
  }, []);
  return (
    <div className="relative h-screen bg-slate-900">
      <Header />
      <MapScene />
    </div>
  );
};

export default Map;
