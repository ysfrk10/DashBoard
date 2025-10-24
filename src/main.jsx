import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HomeContextProvider } from "./contexts/homeContext.jsx";
import { ShowSideBarProvider } from "./contexts/sideBarShowContext";
import { LanguageProvider } from "./contexts/languageContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <ShowSideBarProvider>
        <HomeContextProvider>
          <App />
        </HomeContextProvider>
      </ShowSideBarProvider>
    </LanguageProvider>
  </StrictMode>
);
