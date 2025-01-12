import React from "react";
import FrontCard from "./frontcard";
import "./master.css";
import BackCard from "./backcard";
const Master = () => {
  return (
    <div className="master">
      <FrontCard />

      <BackCard />
    </div>
  );
};

export default Master;
