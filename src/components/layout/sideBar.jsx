import DashboardIcon from "@mui/icons-material/Dashboard";
import Divider from "@mui/material/Divider";

// icons
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import EqualizerRoundedIcon from "@mui/icons-material/EqualizerRounded";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
export default function SideBar() {
  return (
    <div>
      {/* logo */}
      <div className="flex m-2 gap-1 items-end pr-10 pl-2 py-2 ">
        {/* logo icon */}
        <div>
          <DashboardIcon
            sx={{
              backgroundColor: "#755fe3",
              borderRadius: "20px",
              padding: "5px",
            }}
          />
        </div>
        {/* logo text */}
        <div> DashBoard</div>
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
          <div
            className=" flex items-center gap-1 pl-1
             hover:bg-[#1f2a3d] hover:rounded-md hover:transition duration-300"
          >
            <SpaceDashboardIcon
              sx={{
                fontSize: "30px",
              }}
            />{" "}
            <p className=" text-[15px] my-1">DashBoard</p>
          </div>
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
