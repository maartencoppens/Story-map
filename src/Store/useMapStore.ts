import type { MapID, Vec3 } from "../types/types";
import { create } from "zustand";

type CameraGoal = { pos: Vec3; target: Vec3 };

export const DEFAULT_CAMERA_POSITION: Vec3 = [-4, 2, 11];
export const DEFAULT_CAMERA_TARGET: Vec3 = [0, 0, 0];

type MapStore = {
  mapID: MapID;
  activePOIId: string | null;
  cameraGoal: CameraGoal | null;
  zoomedIn: boolean;
  isZooming: boolean;
  musicTrack: string;
  setMap: (mapID: MapID) => void;
  focusPoi: (poiId: string, goal: CameraGoal) => void;
  setZoomed: (v: boolean) => void;
  setZooming: (v: boolean) => void;
  clearCameraGoal: () => void;
  resetPoi: () => void;
  setMusicTrack: (track: string) => void;
};

export const useMapStore = create<MapStore>((set) => ({
  mapID: "Hogwarts",
  activePOIId: null,
  cameraGoal: null,
  zoomedIn: false,
  isZooming: false,
  musicTrack: "/Music/Main.mp3",

  setMap: (mapID) =>
    set({
      mapID,
      activePOIId: null,
      cameraGoal: null,
      zoomedIn: false,
      isZooming: false,
    }),

  focusPoi: (poiId, goal) =>
    set({
      activePOIId: poiId,
      cameraGoal: goal,
      zoomedIn: false,
      isZooming: true,
    }),

  setZoomed: (v) => set({ zoomedIn: v }),
  setZooming: (v) => set({ isZooming: v }),

  clearCameraGoal: () => set({ cameraGoal: null }),

  resetPoi: () =>
    set({
      activePOIId: null,
      cameraGoal: {
        pos: DEFAULT_CAMERA_POSITION,
        target: DEFAULT_CAMERA_TARGET,
      },
      zoomedIn: false,
      isZooming: true,
      musicTrack: "/Music/Main.mp3",
    }),
  setMusicTrack: (track) => set({ musicTrack: track }),
}));
