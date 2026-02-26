import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Buttons } from "./assets/count.jsx";
import { EffectHook } from "./useEffectHook.jsx";

createRoot(document.querySelector("body")).render(
  <StrictMode>
    <App />
    <Buttons />
    <EffectHook />
  </StrictMode>,
);
