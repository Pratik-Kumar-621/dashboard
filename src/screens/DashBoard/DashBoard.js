import React from "react";
import "../common.scss";
import Heading from "../../Components/Basics/Heading/Heading";
import LeftBar from "../../Components/Basics/LeftBar/LeftBar";
import TopNavigation from "../../Components/Basics/Top Nav/TopNavigation";

const DashBoard = () => {
  return (
    <div className="common-structure">
      <div className="left-nav">
        <LeftBar />
      </div>
      <div className="right-body">
        <TopNavigation />
        <Heading />
      </div>
    </div>
  );
};

export default DashBoard;
