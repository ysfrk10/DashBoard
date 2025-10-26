import SearchIcon from "@mui/icons-material/Search";
import { useLanguage } from "../../hooks/useLanguage";
import { useTheme } from "../../contexts/themeContext";
export default function SearchField() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  return (
    <div className=" flex ">
      <form className="relative">
        <SearchIcon
          sx={{
            position: "absolute",
            top: "10px",
            left: "10px",
          }}
        />

        <input
          type="text"
          className={
            theme
              ? "pl-10 w-[150px] md:w-2xl focus:outline-[#8953e0] rounded-lg border-2 border-none px-4 py-2 text-main-dark bg-search-dark transition[color] duration-300  "
              : "pl-10 w-[150px] md:w-2xl focus:outline-[#8953e0] rounded-lg border-2 border-none px-4 py-2 text-main bg-search transition[color] duration-300  "
          }
          placeholder={t("search")}
        />
      </form>
    </div>
  );
}
