import React from "react";
import "./frontcard.css";
const FrontCard = () => {
  return (
    <div className="card front">
      <div className="wrapper">
        <img className="head-shot" src="Pushpa-2-The-Rule-4-306x393.jpg" />

        <div className="content-box">
          <h5 className="name-title">
            MATTHEW
            <span style={{ display: "block", fontWeight: "200" }}>BRADLEY</span>
          </h5>

          <hr className="hr-rule" />

          <h5 className="name-title-secondary">KELLER WILLIAMS</h5>
          <h5 className="name-title btm">REALITY</h5>
        </div>
      </div>
    </div>
  );
};

export default FrontCard;
