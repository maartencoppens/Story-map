import { Html } from "@react-three/drei";
import { POIS } from "../../Config/POIS";
import { useMapStore } from "../../Store/useMapStore";
import Button from "../Button";
import type { MapID, Position } from "../../types/types";

export function PoiButtons() {
  const mapID: MapID = useMapStore((s) => s.mapID);

  const focusPoi = useMapStore((s) => s.focusPoi);
  const setMap = useMapStore((s) => s.setMap);
  const setMusicTrack = useMapStore((s) => s.setMusicTrack);

  return (
    <>
      {POIS[mapID].map((poi) => {
        const buttonPosition: Position = poi.buttonPosition ?? [-2, 0.5, 2];

        return (
          <Html key={poi.id} position={buttonPosition} center>
            <Button
              title={poi.label}
              variant="poi"
              onClick={() => {
                if (poi.mapTo) {
                  setMap(poi.mapTo);
                  setMusicTrack(
                    poi.soundtrack ?? `/Music/${poi.soundtrack}.mp3`
                  );
                  return;
                }
                setMusicTrack(poi.soundtrack ?? "/Music/Main.mp3");
                focusPoi(poi.id, {
                  pos: poi.cameraPosition,
                  target: poi.cameraTarget,
                });
              }}
            >
              <img
                src={poi.icon}
                alt={poi.label}
                className="h-6 w-6 object-contain"
              />
            </Button>
          </Html>
        );
      })}
    </>
  );
}
