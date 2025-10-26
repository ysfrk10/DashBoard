import SideBar from "./components/layout/sideBar";
import Header from "./components/layout/Header";
import { useContext, useEffect } from "react";
import { LanguageContext } from "./contexts/languageContext";
import { useTheme } from "./contexts/themeContext";
import "./index.css";
function App() {
  const { language } = useContext(LanguageContext);
  const { theme } = useTheme();
  localStorage.getItem("theme");
  useEffect(() => {
    localStorage.setItem("theme", theme.toString());
    theme
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);
  return (
    <div
      dir={language === "en" ? "ltr" : "rtl"}
      className={
        theme
          ? "flex bg-primary-dark w-full h-screen color-text-main-dark mb-4 "
          : "flex bg-primary  w-full h-screen text-white mb-4"
      }
    >
      <div className=" w-[80%]  md:w-fit z-50 md:fixed h-full  ">
        <SideBar />
      </div>

      <Header />
    </div>
  );
}

export default App;
