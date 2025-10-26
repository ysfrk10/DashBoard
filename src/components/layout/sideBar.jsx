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
          ? `${
              showSideBar ? "  w-fit md:w-[200px]" : " md:w-fit "
            }   bg-primary-dark text-main-dark md:h-full transition[color] duration-300`
          : `${
              showSideBar ? " w-fit md:w-[250px]" : " md:w-fit "
            } text-main md:h-full transition[color] duration-300`
      }
    >
      {/* logo */}
      <div
        onClick={() => {
          showHome(true);
        }}
        className={`${
          showSideBar ? "flex" : "hidden md:flex"
        } flex my-4 gap-1 items-center pr-2 pl-2 py-3
        cursor-pointer `}
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
          <div className=" md:px-2 md:font-bold md:text-xl ">
            {t("DashBoard")}
          </div>
        ) : null}
      </div>
      {showSideBar ? (
        <Divider
          className={`${showSideBar ? "flex" : "hidden md:flex"}`}
          orientation="horizontal"
          flexItem
          sx={{
            backgroundColor: "#313259",
            height: "0.5px",
            width: "200px",
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
                ? "hidden md:flex text-main-dark text-[15px] pl-1 py-3"
                : "hidden md:flex text-main text-[15px] pl-1 py-3"
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
            className={`${
              showSideBar ? " flex w-[200px]" : "hidden w-fit  md:flex"
            } flex items-center gap-1 p-1
           hover:bg-[#1f2a3d] hover:text-[white] hover:rounded-md hover:transition duration-300`}
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
            className={`${
              showSideBar ? "flex" : "hidden w-fit md:flex"
            } flex items-center gap-1 p-1
           hover:bg-[#1f2a3d] hover:text-[white] hover:rounded-md hover:transition duration-300`}
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
            className={`${
              showSideBar ? "flex" : "hidden md:flex"
            } flex items-center gap-1 p-1
           hover:bg-[#1f2a3d] hover:text-[white] hover:rounded-md hover:transition duration-300`}
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
            className={`${
              showSideBar ? "flex" : "hidden md:flex"
            } flex items-center gap-1 p-1
           hover:bg-[#1f2a3d] hover:text-[white] hover:rounded-md hover:transition duration-300`}
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
            className={`${
              showSideBar ? "flex" : "hidden md:flex"
            } flex items-center gap-1 p-1
           hover:bg-[#1f2a3d] hover:text-[white] hover:rounded-md hover:transition duration-300`}
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
            className={`${
              showSideBar ? "flex" : "hidden md:flex"
            } flex items-center gap-1 p-1
           hover:bg-[#1f2a3d] hover:text-[white] hover:rounded-md hover:transition duration-300`}
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
