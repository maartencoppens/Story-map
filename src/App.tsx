import { createBrowserRouter, RouterProvider } from "react-router";
import routes from "./Routes/Routes";
import type { JSX } from "react";

const browserRoutes = createBrowserRouter(routes);

function App(): JSX.Element {
  return <RouterProvider router={browserRoutes} />;
}

export default App;
