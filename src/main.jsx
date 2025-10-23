import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HomeContextProvider } from "./contexts/homeContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HomeContextProvider>
      <App />
    </HomeContextProvider>
  </StrictMode>
);
