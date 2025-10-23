import SideBar from "./components/layout/sideBar";
import Header from "./components/layout/Header";
import Divider from "@mui/material/Divider";
import "./App.css";
function App() {
  return (
    <div
      className="   w-full h-screen 
      text-white flex mb-4"
    >
      <div className="fixed h-full ">
        <SideBar />
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            backgroundColor: "#313259",
            height: "100%",
            width: "0.5px",
            marginLeft: "250px",
          }}
        />
      </div>
      <Header />
    </div>
  );
}

export default App;
