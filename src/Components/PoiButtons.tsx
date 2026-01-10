import { Html } from "@react-three/drei";
import { POIS } from "../Config/POIS";
import { useMapStore } from "../Store/useMapStore";
import PoiButton from "./PoiButton";

export function PoiButtons() {
  const mapID = useMapStore((s) => s.mapID);
  const focusPoi = useMapStore((s) => s.focusPoi);
  const setMap = useMapStore((s) => s.setMap);
  const setMusicTrack = useMapStore((s) => s.setMusicTrack);

  return (
    <>
      {POIS[mapID].map((poi) => {
        const buttonPosition = poi.buttonPosition ?? [-2, 0.5, 2];

        return (
          <Html key={poi.id} position={buttonPosition} center>
            <PoiButton
              title={poi.label}
              onClick={() => {
                if (poi.mapTo) {
                  setMusicTrack(
                    poi.soundtrack ?? `/Music/${poi.soundtrack}.mp3`
                  );
                  setMap(poi.mapTo);
                  return;
                }
                if (!poi.cameraPosition || !poi.cameraTarget) return;
                setMusicTrack(poi.soundtrack ?? "/Music/Main.mp3");
                focusPoi(poi.id, {
                  pos: poi.cameraPosition,
                  target: poi.cameraTarget,
                });
              }}
            >
              {poi.icon?.startsWith("/") ? (
                <img
                  src={poi.icon}
                  alt={poi.label}
                  className="h-6 w-6 object-contain"
                />
              ) : (
                poi.icon ?? "i"
              )}
            </PoiButton>
          </Html>
        );
      })}
    </>
  );
}
