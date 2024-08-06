import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./style/scss/main.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import PropertyDetails from "./pages/ProrpertyDetails.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Pricing from "./pages/Pricing.tsx";
import Agent from "./pages/Agent.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/property/details",
    element: <PropertyDetails />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },
  {
    path: "/agent",
    element: <Agent />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
