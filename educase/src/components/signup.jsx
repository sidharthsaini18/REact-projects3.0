import React from "react";
import LandingPage from "./landingPage";

const SignUp = () => {
  function handleBtn() {
    window.location.href = "./profile";
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };
  const [inputData, setInputData] = useState({
    fName: "",
    mobile: "",
    email: "",
    cName: "",
  });

  return (
    <>
      <div className=" first border d-flex justify-content-center align-items-start">
        <div
          className="  border rounded shadow d-flex justify-content-start align-items-center flex-column m-2"
          style={{ height: "35rem" }}
        >
          <h3 className="w-75 m-2">Create your Popx account</h3>

          <div className="inputs d-flex justify-content-center flex-column align-items-center w-100">
            <label className="w-75 ">Full Name </label>
            <input
              className=" m-2 rounded w-75"
              placeholder="Enter your name"
              value={inputData.fName}
              onChange={handleChange}
            ></input>
            <label className="w-75 ">Ph No.</label>
            <input
              className=" m-2 rounded w-75"
              placeholder="Enter your Phone number"
              type="number"
            ></input>
            <label className="w-75 ">Email</label>
            <input
              className=" m-2 rounded w-75"
              placeholder="Enter your email address"
              value={inputData.email}
              onChange={handleChange}
            ></input>
            <label className="w-75">Password</label>
            <input
              className=" m-2 rounded w-75"
              placeholder="Enter your password"
              type="password"
            ></input>
            <label className="w-75 ">Company name</label>
            <input
              className=" m-2 rounded w-75"
              placeholder="Enter your email address"
              value={inputData.cName}
              onChange={handleChange}
            ></input>

            <label className="w-75">Are you agency?</label>
            <div className="d-flex gap-2 justify-content-start  w-75">
              <input type="radio" value="Yes" name="agency" />
              Yes
              <input type="radio" value="No" name="agency" />
              No
            </div>
            <button className="btn btn-primary w-75 m-3" onClick={handleBtn}>
              Create Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
