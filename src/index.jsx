import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import App from "./layout/App";
import Admin from "./layout/Admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "admin",
    element: <Admin />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
