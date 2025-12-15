import LandingPage from "../Pages/LandingPage";
import Map from "../Pages/Map";

const routes = [
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
