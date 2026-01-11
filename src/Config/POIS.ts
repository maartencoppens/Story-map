import GreatHallUI from "../Components/3D/POI/Hogwarts/GreatHallUI";
import GriffindorRoomUI from "../Components/3D/POI/Hogwarts/GriffindorRoomUI";
import OwleryTowerUI from "../Components/3D/POI/Hogwarts/OwleryTowerUI";
import TriwizardCupUI from "../Components/3D/POI/Hogwarts/TriwizardCupUI/TriwizardCupUI";
import QuidditchUI from "../Components/3D/POI/Quidditch/QuidditchUI";
import type { MapID, POI } from "../types/types";

export const POIS: Record<MapID, POI[]> = {
  Quidditch: [
    {
      id: "intro",
      label: "Quidditch",
      icon: "/icons/broom-icon.png",
      cameraPosition: [-1.87, 0.2, 0.8],
      cameraTarget: [-1.87, 0.4, 1.7],
      buttonPosition: [-2, 0.5, 2],
      uiComponent: QuidditchUI,
      soundtrack: "/Music/Quidditch.mp3",
    },
    {
      id: "to-hogwarts",
      label: "Hogwarts",
      icon: "/icons/hogwarts-icon.png",
      mapTo: "Hogwarts",
      buttonPosition: [-7, 0, 3],
      soundtrack: "/Music/Main.mp3",
    },
  ],

  Hogwarts: [
    {
      id: "to-quidditch",
      label: "Quidditch",
      icon: "/icons/snitch-icon.png",
      mapTo: "Quidditch",
      buttonPosition: [-7, 0, -5],
      soundtrack: "/Music/Quidditch.mp3",
    },
    {
      id: "great-hall",
      label: "Great Hall",
      icon: "/icons/great-hall-icon.png",
      cameraPosition: [-5, 1, 2],
      cameraTarget: [-2.5, 0, 0],
      buttonPosition: [-3.5, 0, -1],
      uiComponent: GreatHallUI,
    },
    {
      id: "owlery-tower",
      label: "Owlery Tower",
      icon: "/icons/dumbledore-icon.png",
      cameraPosition: [0, 2.2, 2],
      cameraTarget: [2.5, 2.2, 0.2],
      buttonPosition: [2, 3, 1],
      uiComponent: OwleryTowerUI,
    },
    {
      id: "gryffindor-common-room",
      label: "Gryffindor",
      icon: "/icons/gryffindor-icon.png",
      cameraPosition: [-4, 1.5, 0],
      cameraTarget: [-3, 1.5, -0.25],
      buttonPosition: [-2, 2, 0],
      uiComponent: GriffindorRoomUI,
    },
    {
      id: "triwizard-tournament",
      label: "Triwizard Tournament",
      icon: "/icons/trophy-icon.png",
      cameraPosition: [-0.3, -0.55, -0.3],
      cameraTarget: [-0.1, -0.68, -0.6],
      buttonPosition: [-0.3, 0.8, -0.3],
      uiComponent: TriwizardCupUI,
      soundtrack: "/Music/March.mp3",
    },
  ],
};
