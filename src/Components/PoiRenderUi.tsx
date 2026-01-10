import { POIS } from "../Config/POIS";
import { useMapStore } from "../Store/useMapStore";
import DefaultUiComponent from "./POI/DefaultUiComponent";

const PoiRenderUi: React.FC = () => {
  const mapId = useMapStore((s) => s.mapID);
  const activePoiId = useMapStore((s) => s.activePOIId);
  const zoomedIn = useMapStore((s) => s.zoomedIn);
  const isZooming = useMapStore((s) => s.isZooming);
  if (!activePoiId || isZooming || !zoomedIn) return null;
  const poi = POIS[mapId].find((p) => p.id === activePoiId);
  if (!poi) return null;
  const UiComponent = poi.uiComponent;

  return <>{UiComponent ? <UiComponent /> : <DefaultUiComponent />}</>;
};

export default PoiRenderUi;
