import React, { useState } from "react";
import FrontCard from "./frontcard";
import "./master.css";
import BackCard from "./backcard";
const Master = () => {
  const [toggle, settoggle] = useState("front");
  return (
    <div className="master">
      {toggle == "front" && (
        <div
          onClick={() => {
            settoggle("back");
          }}
        >
          <FrontCard />
        </div>
      )}

      {toggle == "back" && (
        <div
          onClick={() => {
            settoggle("front");
          }}
        >
          <BackCard />
        </div>
      )}
    </div>
  );
};

export default Master;
