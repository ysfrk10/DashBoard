import DashboardIcon from "@mui/icons-material/Dashboard";
import Divider from "@mui/material/Divider";
import { useContext } from "react";
import { HomeContext } from "/src/contexts/homeContext.jsx";
// icons
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import EqualizerRoundedIcon from "@mui/icons-material/EqualizerRounded";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
export default function SideBar() {
  const { Home, showHome } = useContext(HomeContext);
  return (
    <div className="">
      {/* logo */}
      <div className="flex my-4 gap-1 items-center pr-10 pl-4 py-2 ">
        {/* logo icon */}
        <div>
          <DashboardIcon
            sx={{
              backgroundColor: "#755fe3",
              borderRadius: "20px",
              padding: "8px",
              fontSize: "35px",
            }}
          />
        </div>
        {/* logo text */}
        <div className="pl-2 font-bold text-xl"> DashBoard</div>
      </div>
      <Divider
        orientation="horizontal"
        flexItem
        sx={{
          backgroundColor: "#313259",
          height: "0.5px",
          width: "120%",
          marginY: "13.4px",
        }}
      />
      {/* nav links */}
      <div className="m-2">
        <p className="text-[#99b7bd] text-[15px] pl-1 py-3">Navigation</p>
        <div>
          {/* start dashBoard Link */}
          <div
            onClick={() => {
              showHome(true);
            }}
            className=" flex items-center gap-1 pl-1 
             hover:bg-[#1f2a3d] hover:rounded-md hover:transition duration-300"
          >
            <SpaceDashboardIcon
              sx={{
                fontSize: "30px",
              }}
            />
            <p className=" text-[15px] my-1">DashBoard</p>
          </div>
          {/* end dashBoard Link */}

          <div
            className="flex items-center gap-1 p-1 
           hover:bg-[#1f2a3d] hover:rounded-md hover:transition duration-300"
          >
            <EqualizerRoundedIcon
              sx={{
                fontSize: "30px",
              }}
            />{" "}
            <p className=" text-[15px] my-1">Analytics</p>
          </div>
          <div
            className="flex items-center gap-1 p-1
           hover:bg-[#1f2a3d] hover:rounded-md hover:transition duration-300"
          >
            <SummarizeOutlinedIcon
              sx={{
                fontSize: "30px",
              }}
            />{" "}
            <p className=" text-[15px] my-1">Reports</p>
          </div>
          <div
            className="flex items-center gap-1 p-1
           hover:bg-[#1f2a3d] hover:rounded-md hover:transition duration-300"
          >
            <PeopleOutlineOutlinedIcon
              sx={{
                fontSize: "30px",
              }}
            />{" "}
            <p className=" text-[15px] my-1">users</p>
          </div>
          <div
            className="flex items-center gap-1 p-1
           hover:bg-[#1f2a3d] hover:rounded-md hover:transition duration-300"
          >
            <TrendingUpOutlinedIcon
              sx={{
                fontSize: "30px",
              }}
            />{" "}
            <p className=" text-[15px] my-1">Trends</p>
          </div>
          <div
            onClick={() => {
              showHome(false);
            }}
            className="flex items-center gap-1 p-1
           hover:bg-[#1f2a3d] hover:rounded-md hover:transition duration-300"
          >
            <SettingsOutlinedIcon
              sx={{
                fontSize: "30px",
              }}
            />{" "}
            <p className=" text-[15px] my-1">Settings</p>
          </div>
        </div>
      </div>
    </div>
  );
}
