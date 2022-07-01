import React from "react";
import "./home.scss";
import {Navbar} from "../../Components/navbar/Navbar";
import Sidebar from "../../Components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        {/* <Navbar /> */}
        container
      </div>
    </div>
  );
};

export default Home;
