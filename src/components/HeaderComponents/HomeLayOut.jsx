import axios from "axios";
import { HomeContext } from "/src/contexts/homeContext.jsx";
import { useState, useEffect, useContext } from "react";
import { useLanguage } from "../../hooks/useLanguage";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
// icons
import SsidChartRoundedIcon from "@mui/icons-material/SsidChartRounded";
import WebAssetOutlinedIcon from "@mui/icons-material/WebAssetOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import Switch from "@mui/material/Switch";
import { useTheme } from "../../contexts/themeContext";
import "../../../src/index.css";
export default function HomeLayOut() {
  const { t } = useLanguage();
  const { Home } = useContext(HomeContext);
  const { theme } = useTheme();
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
            <td className="text-center  px-4 py-3 border-b-[#313259] border-b border-solid">
              {element.User}
            </td>
            <td className="text-center px-4 py-3 border-[#313259] border-b border-solid">
              {element.Action}
            </td>
            <td className=" px-4 py-3 border-b-[#313259] border-b border-solid">
              <p
                className={
                  element.Amount >= 0
                    ? "text-green-500 text-center"
                    : "text-red-600 text-center"
                }
              >
                $ {element.Amount}
              </p>
            </td>
            <td className="flex justify-center text-center px-4 py-3 border-b-[#313259] border-b border-solid">
              <div
                className={
                  element.Status === "Completed"
                    ? `bg-green-500 px-2  w-fit rounded-full ${
                        theme ? "text-main" : "text-main-dark"
                      }`
                    : element.Status === "Failed"
                    ? `bg-red-600 px-2  w-fit rounded-full ${
                        theme ? "text-main" : "text-main-dark"
                      }`
                    : `bg-[#35335e] px-2  w-fit rounded-full ${
                        theme ? "text-main" : "text-main-dark"
                      }`
                }
              >
                {element.Status}
              </div>
            </td>
            <td className=" px-4 py-3 border-b-[#313259] border-b border-solid">
              <p className="text-center text-[#94a3b3]">{element.Time}</p>
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
          <h1
            className={
              theme
                ? "text-2xl font-bold text-main-dark transition[color] duration-300  "
                : "text-2xl font-bold  transition[color] duration-300  "
            }
          >
            {t("DashBoard")}
          </h1>
          <p
            className={
              theme
                ? "text-sm text-main-dark transition[color] duration-300  "
                : "text-sm text-[#94a3b3] transition[color] duration-300  "
            }
          >
            {t("welcome")}
          </p>
        </div>
        <div className="flex gap-8 mx-4">
          {/* 1st card */}
          <div
            className={` flex w-[250px] p-4 rounded-lg
         ml-4 transition duration-300 ease-in-out hover:scale-105 ${
           theme
             ? "border border-[#212e42]/60 hover:shadow-[0_4px_25px_0_rgba(0,0,0,0.5)]"
             : " bg-[#212e42]/60 hover:shadow-[0_4px_25px_0_rgba(117,95,227,0.2)]"
         }`}
          >
            <div>
              <p
                className={`text-sm  mb-3
                 ${theme ? "" : "text-[#94a3b8]"}`}
              >
                {t("TotalRevenue")}
              </p>
              <h1 className="text-2xl font-bold">$45,231</h1>
              <p className="text-sm text-[#22ba52] ">+20.1% from last month</p>
            </div>
            <div
              className={`ml-auto text-[#8852de] ${
                theme ? "bg-[#ebe4f7]" : ""
              } bg-[#2b304f] w-7 h-7 rounded-lg flex items-center justify-center`}
            >
              $
            </div>
          </div>
          {/* 2nd  card */}
          <div
            className={` flex w-[250px] p-4 rounded-lg
         ml-4 transition duration-300 ease-in-out hover:scale-105 ${
           theme
             ? "border border-[#212e42]/60 hover:shadow-[0_4px_25px_0_rgba(0,0,0,0.5)]"
             : " bg-[#212e42]/60 hover:shadow-[0_4px_25px_0_rgba(117,95,227,0.2)]"
         }`}
          >
            <div>
              <p
                className={`text-sm  mb-3
                 ${theme ? "" : "text-[#94a3b8]"}`}
              >
                {t("ActiveUsers")}
              </p>
              <h1 className="text-2xl font-bold">2,350</h1>
              <p className="text-sm text-[#22ba52] ">+15.3% from last month</p>
            </div>
            <div
              className={`ml-auto text-[#8852de] ${
                theme ? "bg-[#ebe4f7]" : ""
              } bg-[#2b304f] w-7 h-7 rounded-lg flex items-center justify-center`}
            >
              <PeopleAltOutlinedIcon sx={{ fontSize: "15px" }} />
            </div>
          </div>
          {/* 3rd  card */}
          <div
            className={` flex w-[250px] p-4 rounded-lg
         ml-4 transition duration-300 ease-in-out hover:scale-105 ${
           theme
             ? "border border-[#212e42]/60 hover:shadow-[0_4px_25px_0_rgba(0,0,0,0.5)]"
             : " bg-[#212e42]/60 hover:shadow-[0_4px_25px_0_rgba(117,95,227,0.2)]"
         }`}
          >
            <div>
              <p
                className={`text-sm  mb-3
                 ${theme ? "" : "text-[#94a3b8]"}`}
              >
                {t("Transactions")}
              </p>
              <h1 className="text-2xl font-bold">12,234</h1>
              <p className="text-sm text-[#22ba52] ">+8.2% from last month</p>
            </div>
            <div
              className={`ml-auto text-[#8852de] ${
                theme ? "bg-[#ebe4f7]" : ""
              } bg-[#2b304f] w-7 h-7 rounded-lg flex items-center justify-center`}
            >
              <WebAssetOutlinedIcon sx={{ fontSize: "15px" }} />
            </div>
          </div>
          {/* 4th  card */}
          <div
            className={`  flex w-[250px] p-4 rounded-lg
         ml-4 transition duration-300 ease-in-out hover:scale-105 ${
           theme
             ? "border border-[#212e42]/60 hover:shadow-[0_4px_25px_0_rgba(0,0,0,0.5)]"
             : " bg-[#212e42]/60 hover:shadow-[0_4px_25px_0_rgba(117,95,227,0.2)]"
         }`}
          >
            <div>
              <p
                className={`text-sm  mb-3
                 ${theme ? "" : "text-[#94a3b8]"}`}
              >
                {t("ConversionRate")}
              </p>
              <h1 className="text-2xl font-bold">3.2%</h1>
              <p className="text-sm text-[#f04141] ">-2.4% from last month</p>
            </div>
            <div
              className={`ml-auto text-[#8852de] ${
                theme ? "bg-[#ebe4f7]" : ""
              } bg-[#2b304f] w-7 h-7 rounded-lg flex items-center justify-center`}
            >
              <SsidChartRoundedIcon sx={{ fontSize: "15px" }} />
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <div
            className={`w-[60%]  mt-4 mx-4 rounded-xl ${
              theme
                ? "border border-[#212e42]/60  text-[#212d40]"
                : "bg-[#212d40]"
            }`}
          >
            <h1 className="text-2xl font-bold p-4">{t("RevenueOverview")}</h1>
            <p className={`text-sm px-4 ${theme ? "" : "text-[#94a3b8]"}  `}>
              {t("monthly")}
            </p>
            <StatusPieChart />
          </div>
          <div
            className={`w-[50%]  mt-4 mx-4 rounded-xl ${
              theme
                ? "border border-[#212e42]/60  text-[#212d40]"
                : "bg-[#212d40]"
            }`}
          >
            <div>
              <h1 className="text-4xl font-bold px-10 py-7 ">
                {t("QuickStats")}
              </h1>
              <p className="text-lg px-10 text-[#94a3b8]  ">
                {t("performance")}
              </p>
            </div>
            <div
              className={`flex justify-between mx-2 my-4 px-10 py-3
          rounded-md items-end ${theme ? "bg-[#eeeeee]" : ""}  `}
            >
              <h2 className="font text-xl">{t("Avg")}</h2>
              <p className="font-bold text-2xl text-[#8953e0]">$127.50</p>
            </div>
            <div
              className={`flex justify-between mx-2 my-4 px-10 py-3
          rounded-md items-end ${theme ? "bg-[#eeeeee]" : ""}  `}
            >
              <h2 className="font text-xl">{t("Customer")}</h2>
              <p className="font-bold text-2xl text-[#8953e0]">$1,248</p>
            </div>
            <div
              className={`flex justify-between mx-2 my-4 px-10 py-3
          rounded-md items-end ${theme ? "bg-[#eeeeee]" : ""}  `}
            >
              <h2 className="font text-xl">{t("Churn")}</h2>
              <p className="font-bold text-2xl text-[#8953e0]">2.3%</p>
            </div>
            <div
              className={`flex justify-between mx-2 my-4 px-10 py-3
          rounded-md items-end ${theme ? "bg-[#eeeeee]" : ""}  `}
            >
              <h2 className="font text-xl"> {t("MRR")}</h2>
              <p className="font-bold text-2xl text-[#8953e0]">$24,891</p>
            </div>
          </div>
        </div>
        <div
          className={`m-4 rounded-lg pb-10 ${
            theme ? "border border-[#212e42]/60" : "bg-[#212d40]"
          } `}
        >
          <div>
            <h1 className="text-2xl font-bold px-4 py-4">{t("Activity")}</h1>
            <p className="text-sm px-4 pb-4 text-[#94a3b8] ">
              {t("useractions")}
            </p>
          </div>
          <table className=" w-full  text-left border-collapse m ">
            <thead>
              <tr>
                <th className="text-center text-[#94a3b3] px-4 py-3 border-b-[#313259] border-b border-solid">
                  {t("Users")}
                </th>
                <th className="text-center text-[#94a3b3] px-4 py-3 border-b-[#313259] border-b border-solid">
                  {t("Action")}
                </th>
                <th className="text-center text-[#94a3b3] px-4 py-3 border-b-[#313259] border-b border-solid">
                  {t("Amount")}
                </th>
                <th className="text-center text-[#94a3b3] px-4 py-3 border-b-[#313259] border-b border-solid">
                  {t("Status")}
                </th>
                <th className="text-center text-[#94a3b3] px-4 py-3 border-b-[#313259] border-b border-solid">
                  {t("Time")}
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
    { name: "Avg. Order Value", uv: 127.5, fill: "#8884d8" },
    { name: "Customer Lifetime Value", uv: 249, fill: "#83a6ed" },
    { name: "Churn Rate", uv: 124, fill: "#d0ed57" },
    { name: "Monthly Recurring Revenue", uv: 847, fill: "#ffc658" },
  ];
  return (
    <ResponsiveContainer height={350} width="100%">
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
  const { language, changeLanguage, t } = useLanguage();
  const { theme } = useTheme();
  return (
    <div className="w-[50vw] ">
      <div
        className={`flex justify-between w-full h-fit
        items-center ${
          theme ? "bg-[#eeeeee] border border-[#212e42]/60 " : ""
        } bg-[#212e42]/60  mt-30 mx-5 rounded-lg py-5 px-5`}
      >
        <h1 className="text-2xl "> {t("Theme")} </h1>
        <ColorSwitches />
      </div>
      <div
        className={`flex justify-between w-full h-fit
        items-center ${
          theme ? "bg-[#eeeeee] border border-[#212e42]/60 " : ""
        } bg-[#212e42]/60  mt-30 mx-5 rounded-lg py-5 px-5`}
      >
        <h1 className="text-2xl "> {t("Language")} </h1>
        <button
          onClick={() => changeLanguage(language === "en" ? "ar" : "en")}
          className={`transition duration-300 
        py-3 px-6  rounded-xl cursor-pointer hover:bg-[#1d518a]/50
            ${theme ? "bg-[#7459eb] text-white " : "bg-[#1d518a]  "} `}
          // xcascasc
        >
          {language === "en" ? "العربية" : "English"}
        </button>
      </div>
    </div>
  );
}

function ColorSwitches() {
  const { theme, SetTheme } = useTheme();
  const label = { inputProps: { "aria-label": "Color switch demo" } };
  return (
    <div>
      <Switch
        {...label}
        onChange={() => {
          SetTheme((prevMode) => !prevMode);
          console.log(theme);
        }}
      />
    </div>
  );
}
