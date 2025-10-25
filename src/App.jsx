import SideBar from "./components/layout/sideBar";
import Header from "./components/layout/Header";
import { useContext, useState, useEffect } from "react";
import { LanguageContext } from "./contexts/languageContext";
import { useTheme } from "./contexts/themeContext";
import "./index.css";
function App() {
  const { language } = useContext(LanguageContext);
  const { theme } = useTheme();

  useEffect(() => {
    theme
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);
  return (
    <div
      dir={language === "en" ? "ltr" : "rtl"}
      className={
        theme
          ? "bg-primary-dark w-full h-screen color-text-main-dark flex mb-4 "
          : "bg-primary  w-full h-screen text-white flex mb-4"
      }
    >
      <div className="fixed h-full ">
        <SideBar />
      </div>
      <Header />
    </div>
  );
}

export default App;
