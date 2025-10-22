import SideBar from "./components/layout/sideBar";
import Header from "./components/layout/Header";
import Divider from "@mui/material/Divider";

function App() {
  return (
    <div className="min-h-screen w-full bg-gray-900 text-white">
      <div className="flex w-full min-h-screen ">
        <SideBar />
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            backgroundColor: "#313259",
            height: "100%",
            width: "0.5px",
            marginX: 2,
          }}
        />
        <Header />
      </div>
    </div>
  );
}

export default App;
