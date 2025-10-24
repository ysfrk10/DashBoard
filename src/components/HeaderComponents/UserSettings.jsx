import Divider from "@mui/material/Divider";
import { useLanguage } from "../../hooks/useLanguage";
export function UserSettings() {
  const { t } = useLanguage();
  return (
    <div
      className="absolute top-12 right-0 z-20 border-[#7a5de3] 
    border-1 rounded-md p-2 w-[200px] transition duration-300
    flex flex-col gap-2 bg-[#101829]"
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
      <div className="py-1 rounded-md hover:bg-[#8953e0] transition duration-300">
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
