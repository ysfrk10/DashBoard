import Divider from "@mui/material/Divider";
import { useState, useEffect, useRef } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
// icons
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import WebRoundedIcon from "@mui/icons-material/WebRounded";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import SsidChartRoundedIcon from "@mui/icons-material/SsidChartRounded";
import WebAssetOutlinedIcon from "@mui/icons-material/WebAssetOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
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
    <div className="h-60  ">
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
        <div
          className="relative top-1"
          ref={menuRef}
          onClick={() => setOpen(!open)}
        >
          <IconButton sx={{ color: "white" }}>
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

      <HomeLayOut />
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
    flex flex-col gap-2 bg-[#101829]"
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

function HomeLayOut() {
  return (
    <div>
      <div className="my-8 mx-2">
        <h1 className="text-2xl font-bold">DashBoard</h1>
        <p className="text-sm text-[#94a3b3]">
          {" "}
          Welcome back! Here's your business overview.
        </p>
      </div>
      <div className="flex gap-8">
        {/* 1st card */}
        <div
          className="bg-[#212e42] flex w-[250px] p-4 rounded-lg
         ml-4 transition duration-300 ease-in-out hover:scale-105 hover:shadow-[0_4px_25px_0_rgba(137,83,224,0.2)]"
        >
          <div>
            <p className="text-sm text-[#94a3b8] mb-3">Total Revenue</p>
            <h1 className="text-2xl font-bold">$45,231</h1>
            <p className="text-sm text-[#22ba52] ">+20.1% from last month</p>
          </div>
          <div className="ml-auto text-[#8852de] bg-[#2b304f] w-7 h-7 rounded-lg flex items-center justify-center">
            $
          </div>
        </div>
        {/* 2nd  card */}
        <div
          className="bg-[#212e42] flex w-[250px] p-4 rounded-lg
         ml-4 transition duration-300 ease-in-out hover:scale-105 hover:shadow-[0_4px_25px_0_rgba(137,83,224,0.2)]"
        >
          <div>
            <p className="text-sm text-[#94a3b8] mb-3">Active Users</p>
            <h1 className="text-2xl font-bold">2,350</h1>
            <p className="text-sm text-[#22ba52] ">+15.3% from last month</p>
          </div>
          <div className="ml-auto text-[#8852de] bg-[#2b304f] w-7 h-7 rounded-lg flex items-center justify-center">
            <PeopleAltOutlinedIcon sx={{ fontSize: "15px" }} />
          </div>
        </div>
        {/* 3rd  card */}
        <div
          className="bg-[#212e42] flex w-[250px] p-4 rounded-lg
         ml-4 transition duration-300 ease-in-out hover:scale-105 hover:shadow-[0_4px_25px_0_rgba(137,83,224,0.2)]"
        >
          <div>
            <p className="text-sm text-[#94a3b8] mb-3">Transactions</p>
            <h1 className="text-2xl font-bold">12,234</h1>
            <p className="text-sm text-[#22ba52] ">+8.2% from last month</p>
          </div>
          <div className="ml-auto text-[#8852de] bg-[#2b304f] w-7 h-7 rounded-lg flex items-center justify-center">
            <WebAssetOutlinedIcon sx={{ fontSize: "15px" }} />
          </div>
        </div>
        {/* 4th  card */}
        <div
          className="bg-[#212e42] flex w-[250px] p-4 rounded-lg
         ml-4 transition duration-300 ease-in-out hover:scale-105 hover:shadow-[0_4px_25px_0_rgba(137,83,224,0.2)]"
        >
          <div>
            <p className="text-sm text-[#94a3b8] mb-3">Conversion Rate</p>
            <h1 className="text-2xl font-bold">3.2%</h1>
            <p className="text-sm text-[#f04141] ">-2.4% from last month</p>
          </div>
          <div className="ml-auto text-[#8852de] bg-[#2b304f] w-7 h-7 rounded-lg flex items-center justify-center">
            <SsidChartRoundedIcon sx={{ fontSize: "15px" }} />
          </div>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="w-[60%] bg-[#212d40] mt-4 mx-4 rounded-xl">
          <h1 className="text-2xl font-bold p-4">Revenue Overview</h1>
          <p className="text-sm p-4 text-[#94a3b8] ">
            Monthly revenue for the last 7 months
          </p>
          <StatusPieChart />
        </div>
        <div className="w-[50%] bg-[#212d40] mt-4 mx-4 rounded-xl">
          <div>
            <h1 className="text-4xl font-bold pl-10 pt-10">Quick Stats</h1>
            <p className="text-lg pl-10 text-[#94a3b8]  ">
              Performance metrics at a glance
            </p>
          </div>
          <div
            className="flex justify-between bg-[#212e42] px-10 py-4
          rounded-md items-end"
          >
            <h2 className="font text-xl">Avg. Order Value</h2>
            <p className="font-bold text-2xl text-[#8953e0]">$127.50</p>
          </div>
          <div
            className="flex justify-between bg-[#212e42] px-10 py-4
          rounded-md items-end"
          >
            <h2 className="font text-xl">Customer Lifetime Value</h2>
            <p className="font-bold text-2xl text-[#8953e0]">$1,248</p>
          </div>
          <div
            className="flex justify-between bg-[#212e42] px-10 py-4
          rounded-md items-end"
          >
            <h2 className="font text-xl">Churn Rate</h2>
            <p className="font-bold text-2xl text-[#8953e0]">2.3%</p>
          </div>
          <div
            className="flex justify-between bg-[#212e42] px-10 py-4
          rounded-md items-end"
          >
            <h2 className="font text-xl">Monthly Recurring Revenue</h2>
            <p className="font-bold text-2xl text-[#8953e0]">$24,891</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusPieChart() {
  const data = [
    { name: "18-24", uv: 31.47, fill: "#8884d8" },
    { name: "25-29", uv: 26.69, fill: "#83a6ed" },
    { name: "50+", uv: 2.63, fill: "#d0ed57" },
    { name: "Unknown", uv: 6.67, fill: "#ffc658" },
  ];
  return (
    <ResponsiveContainer height={300} width="100%">
      <PieChart>
        <Pie data={data} dataKey="uv" cx="50%" cy="50%" outerRadius={120} label>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
