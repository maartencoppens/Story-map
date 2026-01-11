import type { JSX } from "react";
import { POIS } from "../../Config/POIS";
import { useMapStore } from "../../Store/useMapStore";
import type { MapID } from "../../types/types";
import DefaultUiComponent from "./POI/DefaultUiComponent";

const PoiRenderUi = (): JSX.Element | null => {
  const mapId: MapID = useMapStore((s) => s.mapID);
  const activePoiId: string | null = useMapStore((s) => s.activePOIId);
  const zoomedIn: boolean = useMapStore((s) => s.zoomedIn);
  const isZooming: boolean = useMapStore((s) => s.isZooming);

  if (!activePoiId || isZooming || !zoomedIn) return null;
  const poi = POIS[mapId].find((p) => p.id === activePoiId);

  if (!poi || poi.mapTo) return null;
  const UiComponent = poi.uiComponent;

  return UiComponent ? <UiComponent /> : <DefaultUiComponent />;
};

export default PoiRenderUi;
