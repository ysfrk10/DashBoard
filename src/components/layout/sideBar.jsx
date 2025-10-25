import DashboardIcon from "@mui/icons-material/Dashboard";
import Divider from "@mui/material/Divider";
import { useContext } from "react";
import { HomeContext } from "/src/contexts/homeContext.jsx";
import { ShowSideBarContext } from "../../contexts/sideBarShowContext";
import { useLanguage } from "../../hooks/useLanguage";
import { useTheme } from "../../contexts/themeContext";
// icons
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import EqualizerRoundedIcon from "@mui/icons-material/EqualizerRounded";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
export default function SideBar() {
  const { t } = useLanguage();
  const { Home, showHome } = useContext(HomeContext);
  const { showSideBar } = useContext(ShowSideBarContext);
  const { theme } = useTheme();

  return (
    <div
      className={
        theme
          ? "text-main-dark  h-full  transition[color] duration-300"
          : "text-main transition[color] duration-300"
      }
    >
      {/* logo */}
      <div
        onClick={() => {
          showHome(true);
        }}
        className="flex my-4 gap-1 items-center pr-2 pl-2 py-3
        cursor-pointer "
      >
        {/* logo icon */}
        <div>
          <DashboardIcon
            sx={{
              backgroundColor: "#755fe3",
              borderRadius: "20px",
              padding: "8px",
              fontSize: "35px",
              color: "#fff",
            }}
          />
        </div>
        {/* logo text */}
        {showSideBar ? (
          <div className="px-2 font-bold text-xl "> {t("DashBoard")}</div>
        ) : null}
      </div>
      {showSideBar ? (
        <Divider
          orientation="horizontal"
          flexItem
          sx={{
            backgroundColor: "#313259",
            height: "0.5px",
            width: "98%",
            marginY: "13.4px",
          }}
        />
      ) : null}

      {/* nav links */}
      <div className="m-2">
        {showSideBar ? (
          <p
            className={
              theme
                ? "text-main-dark text-[15px] pl-1 py-3"
                : "text-main text-[15px] pl-1 py-3"
            }
          >
            {t("Navigation")}
          </p>
        ) : null}

        <div>
          {/* start dashBoard Link */}
          <div
            onClick={() => {
              showHome(true);
            }}
            className=" flex items-center gap-1 pl-1 
             hover:bg-[#1f2a3d] hover:text-[white] hover:rounded-md hover:transition duration-300"
          >
            <SpaceDashboardIcon
              sx={{
                fontSize: "30px",
              }}
            />
            {showSideBar ? (
              <p className=" text-[15px] my-1">{t("DashBoard")}</p>
            ) : null}
          </div>
          {/* end dashBoard Link */}

          <div
            className="flex items-center gap-1 p-1 
           hover:bg-[#1f2a3d] hover:text-[white] hover:rounded-md hover:transition duration-300"
          >
            <EqualizerRoundedIcon
              sx={{
                fontSize: "30px",
              }}
            />
            {showSideBar ? (
              <p className=" text-[15px] my-1">{t("Analytics")}</p>
            ) : (
              <p></p>
            )}
          </div>
          <div
            className="flex items-center gap-1 p-1
           hover:bg-[#1f2a3d] hover:text-[white] hover:rounded-md hover:transition duration-300"
          >
            <SummarizeOutlinedIcon
              sx={{
                fontSize: "30px",
              }}
            />
            {showSideBar ? (
              <p className=" text-[15px] my-1">{t("Reports")}</p>
            ) : (
              <p></p>
            )}
          </div>
          <div
            className="flex items-center gap-1 p-1
           hover:bg-[#1f2a3d] hover:text-[white] hover:rounded-md hover:transition duration-300"
          >
            <PeopleOutlineOutlinedIcon
              sx={{
                fontSize: "30px",
              }}
            />
            {showSideBar ? (
              <p className="transition duration-300 text-[15px] my-1">
                {t("users")}
              </p>
            ) : (
              <p></p>
            )}
          </div>
          <div
            className="flex items-center gap-1 p-1
           hover:bg-[#1f2a3d] hover:text-[white] hover:rounded-md hover:transition duration-300"
          >
            <TrendingUpOutlinedIcon
              sx={{
                fontSize: "30px",
              }}
            />
            {showSideBar ? (
              <p className=" text-[15px] my-1">{t("Trends")}</p>
            ) : null}
          </div>
          <div
            onClick={() => {
              showHome(false);
            }}
            className="flex items-center gap-1 p-1
           hover:bg-[#1f2a3d] hover:text-[white] hover:rounded-md hover:transition duration-300"
          >
            <SettingsOutlinedIcon
              sx={{
                fontSize: "30px",
              }}
            />
            {showSideBar ? (
              <p className=" text-[15px] my-1">{t("settings")}</p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
