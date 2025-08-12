import React from "react";

const Login = () => {
  return (
    <>
      <div className=" first border d-flex justify-content-center align-items-start">
        <div
          className="  border rounded shadow d-flex justify-content-start align-items-center flex-column m-2"
          style={{ height: "35rem" }}
        >
          <h3 className="w-75 m-2">Login to your PopX account</h3>
          <p className="w-75 m-2 text-muted">
            Join us today to unlock exclusive features and seamless experiences!
          </p>
          <div className="inputs d-flex justify-content-center flex-column align-items-center w-100">
            <label className="w-75 m-2">Email</label>
            <input
              className=" m-2 rounded w-75"
              placeholder="Enter your email address"
            ></input>
            <label className="w-75 m-2">Password</label>
            <input
              className=" m-2 rounded w-75"
              placeholder="Enter your password"
            ></input>
            <button className="btn btn-primary w-75 m-2">Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
