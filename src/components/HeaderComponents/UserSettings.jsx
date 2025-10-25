import Divider from "@mui/material/Divider";
import { useLanguage } from "../../hooks/useLanguage";
import { useContext } from "react";
import { HomeContext } from "../../contexts/homeContext";
import { useTheme } from "../../contexts/themeContext";
export default function UserSettings() {
  const { t } = useLanguage();
  const { Home, showHome } = useContext(HomeContext);
  const { theme } = useTheme();
  return (
    <div
      className={
        theme
          ? "flex flex-col gap-2 absolute top-12 right-0 z-20 border rounded-md p-2 w-[200px] bg-[#eeeeee] text-[black]  border-[#7a5de3] transition[color] duration-300   "
          : "flex flex-col gap-2 absolute top-12 right-0 z-20 border rounded-md p-2 w-[200px] bg-search border-[#7a5de3] transition[color] duration-300  "
      }
    >
      <h3>{t("myaccount")}</h3>

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
          {t("profile")}
        </a>
      </div>
      <div
        onClick={() => {
          showHome(false);
        }}
        className="py-1 rounded-md hover:bg-[#8953e0] transition duration-300"
      >
        <a href="#" className="pl-1  ">
          {t("settings")}
        </a>
      </div>
      <div className=" py-1 rounded-md hover:bg-[#8953e0] transition duration-300">
        <a href="#" className="pl-1  ">
          {t("billing")}
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
          {t("logout")}
        </a>
      </div>
    </div>
  );
}
