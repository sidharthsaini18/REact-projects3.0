import React from "react";
import "./backcard.css";
const BackCard = () => {
  return (
    <div className="card back">
      <div className="wrapper">
        <img className="head-shot" src="Pushpa-2-The-Rule-4-306x393.jpg" />

        <div className="content-box">
          <h5 className="name-title">
            MATTHEW
            <span style={{ display: "block", fontWeight: "200" }}>
              {" "}
              BRADLEY{" "}
            </span>
          </h5>

          <hr className="hr-rule" />

          <div className="socials">
            <img src="instagram (1).png" />
            <img src="facebook.png" />
            <img src="twitter.png" />
            <span className="text-muted">@matthewreality</span>
          </div>

          <div className="address">
            <h6 className="ad1">900 Pine View Street</h6>
            <h6>Newbtrunswick, CA 19823</h6>
            <h6 className="contact-details">hi@mattbradleyreality.com</h6>

            <h6>mattbradleyreality.com</h6>
            <h6>Mobile: 459-489-1234</h6>
            <h6>office:459-489-1234</h6>
          </div>
          <h5 className="name-title-secondary">KELLER WILLIAMS</h5>
          <h5 className="name-title btm">REALITY</h5>
        </div>
      </div>
    </div>
  );
};

export default BackCard;
