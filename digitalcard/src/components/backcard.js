import react from "react";
import "../style/backcard.css";

const Backcard = () => {
  return (
    <>
      <div className="card">
        <h2>Contact Us </h2>
        <span>Let's Connect:</span>
        <p>
          Got questions, feedback, or ideas for collaboration? Don't hesitate to
          reach out at. I'm always excited to connect with like-minded
          individuals. For immediate inquiries or opportunities, you can reach
          me directly. Looking forward to our conversation!
        </p>
        <h3>Important Links </h3>
        <div className="logos">
          <img
            className="logo"
            src="mail_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png"
          ></img>
          <img className="logo" src="instagram (1).png"></img>
          <img className="logo" src="twitter.png"></img>
          <img className="logo" src="facebook.png"></img>
        </div>
      </div>
    </>
  );
};

export default Backcard;
