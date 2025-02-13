import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import { Outlet, Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
const SignUp = () => {
  document.title = "Sign Up";

  const [response, setResponse] = useState("");

  const [udata, setUdata] = useState({
    uname: "",
    uemail: "",
    pw: "",
  });
  const [isLoading, setIsloading] = useState(false);

  const handlesubmit = (e) => {
    e.preventDefault();
    const FD = new FormData(document.getElementById("uform"));
    let formData = new FormData(); //formdata object
    setIsloading(true);

    FD.append("uname", udata.uname);
    FD.append("uemail", udata.uemail);
    FD.append("upw", udata.pw); //append the values with key, value pair
    // console.log([...FD.entries()]);
    // FD.append('age', 20);

    const config = {
      headers: { "content-type": "multipart/form-data" },
    };

    Axios.post("http://localhost/apiPhp/myFiles/apiSignup.php", FD, config)
      .then((response) => {
        setResponse(response.data);
        setUdata({ uname: "", uemail: "", pw: "" });
        toast.success("Success");
        setIsloading(false);
      })
      .catch((error) => {
        setResponse(error.message);
        toast.error("Something went Wrong");
        setIsloading(false);
      });
  };

  return (
    <>
      {isLoading && (
        <div className="loader">
          <div className="border border-1 border-dark p-4 rounded shadow-lg">
            <img src="/assets/imgs/loader.gif" className="img-fluid" />
            <h5 className="text-dark fw-bold text-center">PROCESSING</h5>
          </div>
        </div>
      )}

      <div
        className="card mt-3"
        style={{ background: "transparent", border: "none", height: "100vh" }}
      >
        <div className="d-flex h-100 align-items-center justify-content-center ">
          <form
            id="uform"
            onSubmit={handlesubmit}
            className="row g-1 col-11 col-md-5 p-3 my-4 text-dark rounded bg-light shadow-lg"
            // style={{ background: "#36393f" }}
            data-aos="fade-down"
          >
            <h3 className="fw-bold">Sign Up</h3>
            {response !== "" && <p className="fw-bold text-info">{response}</p>}
            <hr />
            <div className="col-12">
              <label for="Email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control bg-light text-dark shadow border-0 p-3"
                id="Email"
                autoComplete="new-email"
                placeholder="John@email.com"
                value={udata.uemail}
                onChange={(e) => setUdata({ ...udata, uemail: e.target.value })}
              />
            </div>
            <div className="col-12">
              <label for="Password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control bg-light text-dark shadow border-0 p-3"
                id="Password"
                autoComplete="new-password"
                placeholder="Minimum 8 characters"
                value={udata.pw}
                onChange={(e) => setUdata({ ...udata, pw: e.target.value })}
              />
            </div>
            <div className="col-12">
              <label for="UserName" className="form-label">
                UserName
              </label>
              <input
                type="text"
                className="form-control bg-light text-dark shadow border-0 p-3"
                id="UserName"
                placeholder="John Jacobs"
                autoComplete="off"
                value={udata.uname}
                onChange={(e) => setUdata({ ...udata, uname: e.target.value })}
              />
            </div>

            <div className="col-12 py-2">
              <button
                type="submit"
                className="btn w-100 fw-bold py-2 btn-lg btn-dark"
              >
                Continue
              </button>
            </div>
            <p className="lead">
              Already have an Account?
              <Link
                to="/login"
                state={{ check: "Login" }}
                className="link-info text-decoration-none fw-bold"
              >
                {" "}
                Login
              </Link>
            </p>
          </form>
        </div>
        <Outlet />
      </div>
    </>
  );
};
export default SignUp;
