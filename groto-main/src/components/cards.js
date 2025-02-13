import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  function addCommasToNumber(number) {
    let numberStr = number.toString();

    let parts = numberStr.split(".");

    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return parts.join(".");
  }

  function convertToIndianNumberingSystem(price) {
    if (price >= 10000000) {
      return (price / 10000000).toFixed(1) + " Cr";
    } else if (price >= 100000) {
      return (price / 100000).toFixed(1) + " Lac";
    } else if (price >= 1000) {
      return (price / 1000).toFixed(1) + " K";
    } else {
      return price.toString();
    }
  }

  return (
    <Link
      to={`/details/${props.data.id}`}
      class="card text-dark"
      style={{ textDecoration: "none" }}
    >
      <div
        className="card mb-4 w-100 border-0 shadow-sm rounded-3"
        data-aos="fade-up"
      >
        <div className="row g-0">
          <div className="col-lg-4">
            <img
              src={props.data.img}
              className="d-block w-100 rounded-start"
              alt="..."
              loading="eager"
              style={{ height: "350px", objectFit: "cover" }}
            />
          </div>

          <div className="col-lg-8 px-3 py-3 ">
            <div className="card-body " style={{ minHeight: "220px" }}>
              <div className="w-100 d-lg-flex align-items-center justify-content-between mb-2">
                <h5 className="card-title fw-bold text-dark  fs-2 my-0 py-0">
                  {props.data.name}
                </h5>
                <h5 className="text-primary fw-bold fs-2 my-0 py-0">
                  {" "}
                  {convertToIndianNumberingSystem(props.data.price)}
                </h5>
              </div>

              <div className="w-100" style={{ height: "150px" }}>
                <p className="text-muted lead  pt-4 mb-4 line-clamp">
                  {props.data.desc}
                </p>
              </div>
              <div className="btm-text d-flex align-items-center justify-content-between  pb-2 w-100">
                <div className="block text-center">
                  <p className="text-muted fs-6  py-0 mb-0">Plot Area</p>
                  <p className="card-text mt-auto align-text-bottom text-secondary  pt-0 mt-0 fs-4">
                    {props.data.plot_area}
                  </p>
                </div>

                <div className="block text-center">
                  <p className="text-muted fs-6  py-0 mb-0">Rooms</p>
                  <p className="card-text mt-auto align-text-bottom text-secondary  pt-0 mt-0 fs-4">
                    {props.data.rooms}
                  </p>
                </div>

                <div className="block text-center">
                  <p className="text-muted fs-6  py-0 mb-0">Ratings</p>
                  <p className="card-text mt-auto align-text-bottom text-primary  pt-0 mt-0 fs-4">
                    {props.data.avg_ratings}{" "}
                    <i className="fa fa-star text-warning"></i>
                  </p>
                </div>

                <div className="block text-center d-lg-block d-none">
                  <p className="text-muted fs-6  py-0 mb-0">Booking Amount </p>
                  <p className="card-text mt-auto align-text-bottom text-secondary  pt-0 mt-0 fs-4">
                    ₹ {addCommasToNumber(props.data.booking_amnt)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
