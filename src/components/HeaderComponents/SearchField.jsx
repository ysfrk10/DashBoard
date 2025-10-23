import SearchIcon from "@mui/icons-material/Search";

export default function SearchField() {
  return (
    <div className=" flex">
      <form className="relative  ">
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
    </div>
  );
}
