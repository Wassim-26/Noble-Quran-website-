import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import Sourates from "./pages/Sourates/Sourates";
import Reciter from "./pages/Reciters/Reciter.jsx";
import Audio from "./pages/Audio/Audio";
import About from "./pages/About/About";
import FeedBack from "./pages/FeedBack/FeedBack";
import { createBrowserRouter, RouterProvider } from "react-router";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Sourate/:numberSourat",
    element: <Sourates />,
  },
  {
    path: "/Reciters",
    element: <Reciter />,
  },
  {
    path: "/Reciters/:identifier",
    element: <Audio />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/feedback",
    element: <FeedBack />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
