import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "normalize.css";
import "~/assets/scss/main.scss";
import App from "./App.tsx";
import { store } from "./store/index.ts";
import { Provider } from "react-redux";

const root = document.getElementById("root")!;

createRoot(root).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
