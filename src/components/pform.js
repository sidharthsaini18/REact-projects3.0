import React, { useState } from "react";
import { useCookies } from "react-cookie";
import toast from "react-hot-toast";
import Success from "./success";

const Pform = () => {
  const [inputData, setInputData] = useState({
    date: "",
    name: "",
    mobile: "",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [cookies] = useCookies(["uToken"]);

  const validate = () => {
    const errors = {};

    if (!inputData.date) {
      errors.date = "Visiting date is required";
    }

    if (!inputData.name) {
      errors.name = "Name is required";
    }

    if (!inputData.mobile) {
      errors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(inputData.mobile)) {
      errors.mobile = "Mobile number must be 10 digits";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    }
    if (!cookies.uToken) {
      toast.error("Please log in first");
      return;
    } else {
      setIsSuccess(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  return (
    <form
      className="border border-light w-lg-75 rounded d-flex flex-column justify-content-center align-items-center shadow-lg p-3 mb-5 bg-white rounded"
      onSubmit={handleSubmit}
    >
      <large className="fs-5 fw-6">Book Appointment</large>
      <div className="d-flex flex-column justify-content-center">
        <div className="form-group">
          <label htmlFor="date">Visiting date</label>
          <input
            type="date"
            name="date"
            className="form-control"
            onChange={handleChange}
            value={inputData.date}
            id="date"
            aria-describedby="dateHelp"
            placeholder="Enter date"
          />
          {errors.date && <span className="text-danger">{errors.date}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            onChange={handleChange}
            value={inputData.name}
            id="name"
            aria-describedby="nameHelp"
            placeholder="Name"
          />
          {errors.name && <span className="text-danger">{errors.name}</span>}
          <input
            type="number"
            name="mobile"
            className="form-control mt-3"
            onChange={handleChange}
            value={inputData.mobile}
            id="mobile"
            aria-describedby="mobileHelp"
            placeholder="Ph no."
          />
          {errors.mobile && (
            <span className="text-danger">{errors.mobile}</span>
          )}
        </div>
      </div>
      <button type="submit" className="btn btn-primary w-75 m-2">
        Book
      </button>
      <p className="text-muted fs-6">You won't be charged yet</p>
      <div className="charges"></div>
      {isSuccess && <Success setIsSuccess={(e) => setIsSuccess(e)} />}
    </form>
  );
};

export default Pform;
