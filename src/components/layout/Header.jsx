import Divider from "@mui/material/Divider";
import { useState } from "react";
// icons
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import WebRoundedIcon from "@mui/icons-material/WebRounded";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-60">
      <div
        className="flex gap-10 items-end mt-4 ml-5 relative
   "
      >
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
        <IconButton sx={{ color: "white" }} onClick={() => setOpen(!open)}>
          <PersonIcon
            sx={{
              position: "absolute",
              top: "-20px",
              backgroundColor: "#8953e0",
              borderRadius: "50%",
              transition: "0.3s",
              cursor: "pointer",
              padding: "8px",
              fontSize: "35px",
            }}
            className="hover:scale-110"
          />
        </IconButton>
        {open && <UserSettings />}
      </div>
    </div>
  );
}

function SearchField() {
  return (
    <form className="relative ">
      <SearchIcon
        sx={{
          position: "absolute",
          top: "10px",
          left: "10px",
        }}
      />
      <input
        type="text"
        className="bg-[#222f44] text-white rounded-lg border-2 border-none px-4 py-2 
      pl-[40px] w-2xl focus:outline-[#8953e0]"
        placeholder="Search"
      />
    </form>
  );
}

function UserSettings() {
  return (
    <div
      className="absolute top-12 right-0 z-20 border-[#7a5de3] 
    border-1 rounded-md p-2 w-[200px] transition duration-300
    flex flex-col gap-2 "
    >
      <h3>My Account</h3>
      <Divider
        orientation="horizontal"
        flexItem
        sx={{
          backgroundColor: "#223045",
          height: "0.5px",
          width: "100%",
        }}
      />
      <div className="py-1 rounded-md hover:bg-[#8953e0] transition duration-300">
        <a href="#" className="pl-1  ">
          {" "}
          Profile
        </a>
      </div>
      <div className="py-1 rounded-md hover:bg-[#8953e0] transition duration-300">
        <a href="#" className="pl-1  ">
          {" "}
          Setting
        </a>
      </div>
      <div className=" py-1 rounded-md hover:bg-[#8953e0] transition duration-300">
        <a href="#" className="pl-1  ">
          {" "}
          Billing
        </a>
      </div>

      <Divider
        orientation="horizontal"
        flexItem
        sx={{
          backgroundColor: "#223045",
          height: "0.5px",
          width: "100%",
        }}
      />
      <div className="py-1 rounded-md hover:bg-[#8953e0] transition duration-300">
        <a href="#" className="pl-1  ">
          {" "}
          Logout
        </a>
      </div>
    </div>
  );
}
