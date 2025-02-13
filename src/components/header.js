import React, { useState } from "react";
import { Cookies, useCookies } from "react-cookie";
import toast from "react-hot-toast";

const Header = () => {
  const handleLogin = () => {
    window.location.href = "/login";
  };
  const handleSignUp = () => {
    window.location.href = "/signup";
  };
  const [cookies, setCookie, removeCookie] = useCookies(["uToken"]);
  const handleLogOut = () => {
    removeCookie("uToken");
    toast.success("loged-out Sucessfully");
  };

  return (
    <nav
      className="navbar navbar-light bg-light py-lg-3 px-lg-5 position-sticky top-0 left-0 w-100 shadow-sm"
      style={{ zIndex: "99" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand text-dark fw500 fs-2">
          Dharti<span className="text-primary">Homes</span>
        </a>
        {cookies.uToken == undefined && (
          <div className="d-flex">
            <button
              className="btn btn-lg btn-light border-secondary fs-6 px-md-4 py-md-3 py-2 px-2  me-lg-4 me-2 defaultRound"
              onClick={handleLogin}
            >
              Login
            </button>
            <button
              className="btn btn-lg btn-primary defaultRound fs-6 px-md-4 py-md-3 py-2 px-2"
              onClick={handleSignUp}
            >
              Get Started{" "}
              <img
                className="ms-2"
                src="\icons\arrow_circle_right_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
              />
            </button>
          </div>
        )}
        {cookies.uToken != undefined && (
          <div className="d-flex">
            <button
              onClick={handleLogOut}
              className="btn btn-lg btn-light border-secondary fs-6 px-md-4 py-md-3 py-2 px-2  me-lg-4 me-2 defaultRound"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
