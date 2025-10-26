import { useState, useEffect, useRef, useContext } from "react";
import { useLanguage } from "../../hooks/useLanguage";
import { useTheme } from "../../contexts/themeContext";
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
  const { theme } = useTheme();
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
            ? "transition-[margin] duration-300  flex flex-col md:ml-[270px] "
            : "transition-[margin] duration-300  flex flex-col md:mr-[270px] "
          : language === "en"
          ? "transition-[margin] duration-300  flex flex-col md:ml-[60px]  "
          : "transition-[margin] duration-300  flex flex-col md:mr-[60px] "
      }
    >
      <div
        className={
          theme
            ? "h-[75px] w-full md:w-[200%] md:mx-10 md:fixed z-20 backdrop-blur-sm rounded-sm text-main-dark  transition[color] duration-300  "
            : "h-[75px] w-full md:w-[200%] md:mx-10 md:fixed z-20 backdrop-blur-sm rounded-sm text-main transition[color] duration-300  "
        }
      >
        <div className=" flex items-center gap-2 md:gap-10 my-4 ">
          <WebRoundedIcon
            onClick={() => {
              setShowSideBar(!showSideBar);
            }}
            sx={{
              borderRadius: "10px",
              fontSize: "25px",
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
                  fontSize: "25px",
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
