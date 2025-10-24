import SideBar from "./components/layout/sideBar";
import Header from "./components/layout/Header";
import { useContext } from "react";
import { LanguageContext } from "./contexts/languageContext";
import { ShowSideBarProvider } from "./contexts/sideBarShowContext";

import "./App.css";
function App() {
  const { language } = useContext(LanguageContext);

  return (
    <div
      dir={language === "en" ? "ltr" : "rtl"}
      className="   w-full h-screen 
      text-white flex mb-4"
    >
      <div className="fixed h-full ">
        <SideBar />
      </div>
      <Header />
    </div>
  );
}

export default App;
