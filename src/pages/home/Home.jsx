import React from "react";
import "./home.scss";
import {Navbar} from "../../Components/navbar/Navbar";
import Sidebar from "../../Components/sidebar/Sidebar";
import Widget from "../../Components/widget/Widget";
import Featured from "../../Components/featured/Featured";
import Chart from "../../Components/chart/Chart";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        {/* <Navbar /> */}
        <div className="widgets">
          <Widget type="teachers"/>
          <Widget type="syllabus"/>
          <Widget type="gallery"/>
          <Widget type="payments"/>
        </div>
        <div className="charts">
          <Featured />
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Home;
