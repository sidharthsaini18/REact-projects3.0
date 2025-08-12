import React from "react";
import "./landingPage.css";

const LandingPage = () => {
  function handlebtn() {
    window.location.href = "./signup";
  }
  function handlebtn2() {
    window.location.href = "./Login";
  }
  return (
    <>
      <div className=" first border d-flex justify-content-center align-items-center ">
        <div className=" main border shadow rounded  d-flex justify-content-end flex-column ">
          <h2>Welcome to popX</h2>
          <p className="">
            your gateway to a world of innovation and creativity! Here, every
            idea pops with endless possibilities
          </p>
          <div className="m-2 btns">
            <button
              className="btn1 btn btn-primary w-100 mb-2"
              onClick={handlebtn}
            >
              Create Account
            </button>
            <button
              className=" btn2 text-black btn btn-primary w-100"
              onClick={handlebtn2}
            >
              Already Register?Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
