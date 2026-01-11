import type { MapStore, Position } from "../types/types";
import { create } from "zustand";

export const DEFAULT_CAMERA_POSITION: Position = [-4, 2, 11];
export const DEFAULT_CAMERA_TARGET: Position = [0, 0, 0];

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
    }),
  setMusicTrack: (track) => set({ musicTrack: track }),
}));
