import { createBrowserRouter, RouterProvider } from "react-router";
import routes from "./Routes/Routes";
import type { FC } from "react";

const browserRoutes = createBrowserRouter(routes);

const App: FC = () => {
  return <RouterProvider router={browserRoutes} />;
};

export default App;
