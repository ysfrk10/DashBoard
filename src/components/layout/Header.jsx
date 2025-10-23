import Divider from "@mui/material/Divider";
import { useState, useEffect, useRef } from "react";
// icons
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import WebRoundedIcon from "@mui/icons-material/WebRounded";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";
// component
import SearchField from "../HeaderComponents/SearchField";
import { UserSettings } from "../HeaderComponents/UserSettings";
import HomeLayOut from "../HeaderComponents/HomeLayOut";
export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

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
    <div className=" flex flex-col ml-[270px] ">
      <div
        className="h-[75px] rounded-sm  
       w-full fixed z-20 backdrop-blur-sm bg-[#0f1729]/50 "
      >
        <div className="flex items-center gap-10 ">
          <WebRoundedIcon
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
                padding: "8px",
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

        <Divider
          orientation="horizontal"
          flexItem
          sx={{
            backgroundColor: "#313259",
            height: "0.5px",
            width: "100%",
            marginY: "15px",
          }}
        />
      </div>

      <HomeLayOut />
    </div>
  );
}
