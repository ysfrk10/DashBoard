import SideBar from "./components/layout/sideBar";
import Header from "./components/layout/Header";
import Divider from "@mui/material/Divider";

function App() {
  return (
    <div className="bg-[#0f1729] text-white box-border">
      <div className="flex h-screen overflow-hidden">
        <SideBar />
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            backgroundColor: "#313259",
            height: "100%",
            width: "0.5px",
            marginX: 1,
          }}
        />
        <Header />
      </div>
    </div>
  );
}

export default App;
