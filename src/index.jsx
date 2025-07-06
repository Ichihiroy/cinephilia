import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import App from "./layout/App";
import Admin from "./layout/Admin";
import Details from "./pages/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "movie/:id",
        element: <Details />,
      },
    ],
  },
  {
    path: "admin",
    element: <Admin />,
  },
  {
    path: "*",
    element: <App />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
