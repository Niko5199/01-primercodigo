import React from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import PerfilComponent from "./components/PerfilComponent";

const rootDiv = document.querySelector("#root");
const root = createRoot(rootDiv);
const skills = [
  {
    id: 1,
    name: "JS",
  },

  {
    id: 2,
    name: "React.js",
  },

  {
    id: 3,
    name: "Node.Js",
  },
];

root.render(
  <StrictMode>
    <PerfilComponent name="Josue" skills={skills} />
  </StrictMode>
);
