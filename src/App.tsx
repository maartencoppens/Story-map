import { createBrowserRouter, RouterProvider } from "react-router";
import routes from "./Routes/Routes";

const browserRoutes = createBrowserRouter(routes);

function App() {
  return (
    <>
      <RouterProvider router={browserRoutes} />
    </>
  );
}

export default App;
