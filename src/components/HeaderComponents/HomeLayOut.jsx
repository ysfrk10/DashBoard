import axios from "axios";
import { HomeContext } from "/src/contexts/homeContext.jsx";
import { useState, useEffect, useContext } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
// icons
import SsidChartRoundedIcon from "@mui/icons-material/SsidChartRounded";
import WebAssetOutlinedIcon from "@mui/icons-material/WebAssetOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import { alpha, styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import Switch from "@mui/material/Switch";
export default function HomeLayOut() {
  const { Home, showHome } = useContext(HomeContext);
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    axios
      .get("data.json")
      .then((res) => setTransactions(res.data.transactions));
  }, []);
  function reRenderTable() {
    return transactions.map((element) => {
      return (
        <tbody key={element.id}>
          <tr className=" transition duration-300 hover:bg-[#0f1729]/20">
            <td className=" px-4 py-3 border-b-[#313259] border-b border-solid">
              {element.User}
            </td>
            <td className=" px-4 py-3 border-b-[#313259] border-b border-solid">
              {element.Action}
            </td>
            <td className=" px-4 py-3 border-b-[#313259] border-b border-solid">
              <p
                className={
                  element.Amount >= 0 ? "text-green-500" : "text-red-600"
                }
              >
                $ {element.Amount}
              </p>
            </td>
            <td className=" px-4 py-3 border-b-[#313259] border-b border-solid">
              <div
                className={
                  element.Status === "Completed"
                    ? "bg-green-500 px-2  w-fit rounded-full"
                    : element.Status === "Failed"
                    ? "bg-red-600 px-2  w-fit rounded-full"
                    : "bg-[#35335e] px-2  w-fit rounded-full "
                }
              >
                {element.Status}
              </div>
            </td>
            <td className=" px-4 py-3 border-b-[#313259] border-b border-solid">
              <p className="text-[#94a3b3]">{element.Time}</p>
            </td>
          </tr>
        </tbody>
      );
    });
  }
  if (Home) {
    return (
      <div>
        <div className="my-8 mx-2 mt-[100px]">
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
        <div className="bg-[#212e42] m-4 rounded-lg pb-10 ">
          <div>
            <h1 className="text-2xl font-bold px-4 pt-4">Recent Activity</h1>
            <p className="text-sm px-4 pb-4 text-[#94a3b8] ">
              Latest transactions and user actions
            </p>
          </div>
          <table className=" w-full text-[white] text-left border-collapse m ">
            <thead>
              <tr>
                <th className="text-[#94a3b3] px-4 py-3 border-b-[#313259] border-b border-solid">
                  User
                </th>
                <th className="text-[#94a3b3] px-4 py-3 border-b-[#313259] border-b border-solid">
                  Action
                </th>
                <th className="text-[#94a3b3] px-4 py-3 border-b-[#313259] border-b border-solid">
                  Amount
                </th>
                <th className="text-[#94a3b3] px-4 py-3 border-b-[#313259] border-b border-solid">
                  Status
                </th>
                <th className="text-[#94a3b3] px-4 py-3 border-b-[#313259] border-b border-solid">
                  Time
                </th>
              </tr>
            </thead>
            {reRenderTable()}
          </table>
        </div>
      </div>
    );
  } else {
    return <SettingScreen />;
  }
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

function SettingScreen() {
  return (
    <div className="w-[50vw]">
      <div
        className="flex justify-between w-full h-fit
        items-center bg-[#212e42] mt-30 mx-5 rounded-lg py-5 px-5"
      >
        <h1 className="text-2xl "> Theme </h1>
        <ColorSwitches />
      </div>
      <div
        className="flex justify-between w-full h-fit
        items-center bg-[#212e42] mt-10 mx-5 rounded-lg py-5 px-5"
      >
        <h1 className="text-2xl "> Language </h1>
        <button
          className="transition duration-300 hover:bg-[#1d518a]/50
        py-3 px-6 bg-[#1d518a] rounded-xl cursor-pointer"
        >
          Arabic
        </button>
      </div>
    </div>
  );
}

function ColorSwitches() {
  const label = { inputProps: { "aria-label": "Color switch demo" } };

  return (
    <div>
      <Switch {...label} />
      {/* checked= onChange= */}
    </div>
  );
}
