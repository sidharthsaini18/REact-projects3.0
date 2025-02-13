import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import { useCookies } from "react-cookie";
import { Outlet, Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
const Login = () => {
  document.title = "User-Login";

  const [cookies, setCookie, removeCookie] = useCookies(["uToken"]);
  const [response, setResponse] = useState([]);
  const [tresponse, setTresponse] = useState("");

  const [udata, setUdata] = useState({
    uemail: "",
    pw: "",
  });
  const [isLoading, setIsloading] = useState(false);

  const handlesubmit = (e) => {
    setIsloading(true);

    e.preventDefault();
    const FD = new FormData(document.getElementById("uform"));
    let formData = new FormData(); //formdata object

    FD.append("uemail", udata.uemail);
    FD.append("upw", udata.pw); //append the values with key, value pair
    // FD.append('age', 20);
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    setTresponse("");
    Axios.post("http://localhost/apiPhp/myFiles/apiSignIn.php", FD, config)
      .then((response) => {
        typeof response.data == "string"
          ? setTresponse(response.data)
          : setResponse(response.data);

        response.data !== "Email or Password doesn't exist or incorrect" &&
          setCookie("uToken", response.data.token, { path: "/" });
        setUdata({ uemail: "", pw: "" });

        response.data !== "Email or Password doesn't exist or incorrect"
          ? toast.success("Success")
          : toast.error("Error");
        if (response.data !== "Email or Password doesn't exist or incorrect") {
          window.location.href = "/";
        }
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
        className="card"
        style={{ background: "transparent", border: "none", height: "100%" }}
      >
        <div className="d-flex h-100 align-items-center justify-content-center">
          <form
            id="uform"
            onSubmit={handlesubmit}
            className="row g-3 col-11 col-md-5 p-4 my-5 text-dark rounded shadow-lg bg-light"
            data-aos="fade-down"
          >
            <h3 className="fw-bold">Login</h3>
            {tresponse.length !== 0 && (
              <p className="fw-bold text-info">{tresponse}</p>
            )}
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

            <div className="col-12 py-2">
              <button
                type="submit"
                className="btn w-100 fw-bold py-2 btn-lg btn-dark"
              >
                Continue
              </button>
            </div>
            <p className="lead">
              Don't have an Account?
              <Link
                to="/signup"
                state={{ check: "SignUp" }}
                className="link-info text-decoration-none fw-bold"
              >
                {" "}
                Sign Up
              </Link>
            </p>
          </form>
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default Login;
