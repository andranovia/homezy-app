import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./style/scss/main.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import PropertyDetails from "./pages/ProrpertyDetails.tsx";
import About from "./pages/About.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path: '/property/details',
    element: <PropertyDetails/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
