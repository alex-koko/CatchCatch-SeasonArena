import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "@app/variables.css";
import "./index.css";
import { AppRouter } from "./app-router";

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={AppRouter()} />
  </React.StrictMode>,
);
