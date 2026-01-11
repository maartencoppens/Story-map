import LandingPage from "../Pages/LandingPage";
import Map from "../Pages/Map";
import type { Router } from "../types/types";

const routes: Router = [
  {
    path: "/",
    element: <LandingPage />,
    label: "Landing Page",
  },
  {
    path: "/map",
    element: <Map />,
    label: "Map",
  },
];

export default routes;
