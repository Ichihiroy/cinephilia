import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import App from "./layout/App";
import Admin from "./layout/Admin";
import Details from "./pages/Details";
import Main from "./pages/Main";
import Theatre from "./pages/Theatre";
import Payment from "./pages/Payment";
import RegPage from "./pages/RegPage";
import LogInPage from "./pages/LogInPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "movie/:id",
        element: <Details />,
      },
      {
        path: "theatre/:id",
        element: <Theatre />,
      },
      {
        path: "payment/:id",
        element: <Payment />,
      },
      { path: "register", element: <RegPage /> },
      {
        path: "login",
        element: <LogInPage />,
      },
    ],
  },
  {
    path: "/admin",
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
