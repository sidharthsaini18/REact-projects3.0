import react from "react";
import "../style/frontcard.css";
const Frontcard = () => {
  return (
    <>
      <div className="card-container">
        <div className="black-container">
          <img src="IMG_4073.JPG"></img>
        </div>
        <div className="name-div">
          <h2 className="name-title">Sidharth</h2>
          <span>Saini</span>
          <h5>Future React Developer</h5>
          <p>
            Passionate about crafting dynamic web applications with a focus on
            innovative solutions and user experience. Constant learner and tech
            enthusiast. 🌟
          </p>
          <button>Projects</button>
          <button>Swipe ➡️</button>
        </div>
      </div>
    </>
  );
};

export default Frontcard;
