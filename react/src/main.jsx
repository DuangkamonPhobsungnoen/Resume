import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import MyBannar from "./components/MyBannar";
import AboutMe from "./components/AboutMe";
import MySkills from "./components/MySkills";
import MyProject from "./components/MyProject";

const Contents = () => {
  return (
    <div className="bg-black text-white">
      <MyNavbar/>
      <MyBannar/>
      <AboutMe/>
      <MySkills/>
      <MyProject/>
      <MyFooter/>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Contents />);