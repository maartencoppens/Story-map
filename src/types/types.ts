import type { FC } from "react";

export type Position = [number, number, number];

export type Positions = {
  card1?: [number, number, number];
  card2?: [number, number, number];
  image1?: [number, number, number];
  image2?: [number, number, number];
  button?: [number, number, number];
};

export type MapID = "Hogwarts" | "Quidditch";

export type Vec3 = [number, number, number];

export type POI = {
  id: string;
  icon?: string;
  label: string;
  cameraTarget?: Vec3;
  cameraPosition?: Vec3;
  mapTo?: MapID;
  buttonPosition?: Vec3;
  uiComponent?: FC;
  soundtrack?: string;
};

export type PaperDrop = {
  id: string;
  position: Position;
  rotation: Position;
};
