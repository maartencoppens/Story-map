import type { FC, JSX, ReactNode } from "react";

export type Router = Array<{
  path: string;
  element: JSX.Element;
  label: string;
}>;

export type CardProps = {
  text?: string;
  className?: string;
  children?: ReactNode;
};

export type ButtonProps = {
  label?: React.ReactNode;
  children?: ReactNode;
  route?: string;
  onClick?: () => void;
  variant?: "primary" | "poi";
  className?: string;
  title?: string;
  ariaLabel?: string;
  ariaPressed?: boolean;
};
export type Position = [number, number, number];

export type CameraGoal = { pos: Position; target: Position };

export type MapStore = {
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

export type Positions = {
  card1?: Position;
  card2?: Position;
  image1?: Position;
  image2?: Position;
  button?: Position;
};

export type MapID = "Hogwarts" | "Quidditch";

type BasePOI = {
  id: string;
  icon: string;
  label: string;
  buttonPosition?: Position;
  soundtrack?: string;
};

type MapPOI = BasePOI & {
  mapTo: MapID;
  cameraTarget?: never;
  cameraPosition?: never;
  uiComponent?: never;
};

type ScenePOI = BasePOI & {
  mapTo?: never;
  cameraTarget: Position;
  cameraPosition: Position;
  uiComponent?: FC;
};

export type POI = MapPOI | ScenePOI;

export type PaperDrop = {
  id: string;
  position: Position;
  rotation: Position;
};

export type MusicToggleProps = {
  src?: string;
};
