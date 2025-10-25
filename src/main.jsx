import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HomeContextProvider } from "./contexts/homeContext.jsx";
import { ShowSideBarProvider } from "./contexts/sideBarShowContext";
import { LanguageProvider } from "./contexts/languageContext.jsx";
import { ThemeProvider } from "./contexts/themeContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <ThemeProvider>
        <ShowSideBarProvider>
          <HomeContextProvider>
            <App />
          </HomeContextProvider>
        </ShowSideBarProvider>
      </ThemeProvider>
    </LanguageProvider>
  </StrictMode>
);
