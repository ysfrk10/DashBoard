import { useState, useEffect, useRef, useContext } from "react";
import { useLanguage } from "../../hooks/useLanguage";

// icons
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import WebRoundedIcon from "@mui/icons-material/WebRounded";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";
// component
import SearchField from "../HeaderComponents/SearchField";
import HomeLayOut from "../HeaderComponents/HomeLayOut";
import UserSettings from "../HeaderComponents/UserSettings";
import { ShowSideBarContext } from "../../contexts/sideBarShowContext";
export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const { language } = useLanguage();
  const { showSideBar, setShowSideBar } = useContext(ShowSideBarContext);

  function HomeClassNameHandler() {}

  // يقفل لما تدوس برا المينيو
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div
      className={
        showSideBar
          ? language === "en"
            ? "transition-[margin] duration-300 flex flex-col ml-[270px] mt-4 "
            : "transition-[margin] duration-300 flex flex-col mr-[270px] mt-4"
          : language === "en"
          ? "transition-[margin] duration-300 flex flex-col ml-[60px] mt-4 "
          : "transition-[margin] duration-300 flex flex-col mr-[60px] mt-4"
      }
    >
      <div
        className="h-[75px] rounded-sm  
       w-full fixed z-20 backdrop-blur-sm bg-[#0f1729]/50 "
      >
        <div className="flex items-center gap-10 ">
          <WebRoundedIcon
            onClick={() => {
              setShowSideBar(!showSideBar);
              console.log(showSideBar);
            }}
            sx={{
              borderRadius: "10px",
              fontSize: "40px",
              padding: "8px",
              transition: "0.3s",
              cursor: "pointer",
            }}
            className="  hover:bg-[#8953e0] "
          />
          <SearchField />
          <div className="relative">
            <NotificationsNoneOutlinedIcon
              sx={{
                borderRadius: "10px",
                fontSize: "35px",
                paddingY: "8px",
                transition: "0.3s",
                cursor: "pointer",
              }}
              className="hover:bg-[#8953e0]"
            />
            <span className="absolute top-1 right-1 w-3 h-3 bg-[#8953e0] rounded-full"></span>
          </div>
          <div
            className="relative top-1"
            ref={menuRef}
            onClick={() => setOpen(!open)}
          >
            <IconButton sx={{ color: "white", marginBottom: "10px" }}>
              <PersonIcon
                sx={{
                  backgroundColor: "#8953e0",
                  borderRadius: "50%",
                  transition: "0.3s",
                  cursor: "pointer",
                  padding: "8px",
                  fontSize: "35px",
                }}
              />
            </IconButton>

            {open && (
              <div
                className="absolute left-[20%] top-[20%] 
          text-white p-4 rounded-lg shadow-lg z-50"
              >
                <UserSettings />
              </div>
            )}
          </div>
        </div>
      </div>

      <HomeLayOut />
    </div>
  );
}
