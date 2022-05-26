import React from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import PerfilComponent from "./components/PerfilComponent";
import { nanoid } from "nanoid";

const rootDiv = document.querySelector("#root");
const root = createRoot(rootDiv);
const skills = [
  {
    id: nanoid(),
    name: "JS",
  },

  {
    id: nanoid(),
    name: "React.js",
  },

  {
    id: nanoid(),
    name: "Node.Js",
  },
];

root.render(
  <StrictMode>
    <PerfilComponent name="Josue" skills={skills} />
  </StrictMode>
);
