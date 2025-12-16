import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "normalize.css";
import "~/assets/scss/main.scss";
import App from "./App.tsx";

const root = document.getElementById("root")!;

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
);
