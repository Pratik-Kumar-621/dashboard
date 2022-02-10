import React from "react";
import LeftBar from "../Components/Basics/LeftBar/LeftBar";
import TopNavigation from "../Components/Basics/Top Nav/TopNavigation";
import "./common.scss";

const PageStructure = (props) => {
  return (
    <div className="common-structure">
      <div className="left-bar">
        <LeftBar />
      </div>
      <div className="right-body">
        <TopNavigation />
        {props.children}
      </div>
    </div>
  );
};

export default PageStructure;
