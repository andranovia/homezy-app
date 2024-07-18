import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./style/scss/main.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import PropertyDetails from "./pages/ProrpertyDetails.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
