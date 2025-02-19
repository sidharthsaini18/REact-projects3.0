import React, { useState, useEffect } from "react";
import mockData from "./houseData.json"; // Import the mock data
import "./home.css"; // Optional: Create this CSS file for custom styles

const Home = () => {
  const [houses, setHouses] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setHouses(mockData);

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % mockData.length);
    }, 1400);

    return () => {
      clearInterval(interval);
    };
  }, []);
  const handleBtn = () => {
    window.location.href = "/aboutus";
  };
  const handlExplore = () => {
    window.location.href = "/main";
  };

  return (
    <div className="container-fluid">
      <header className="bg-muted  text-center p-5">
        <div className="header-content">
          <h1 className="display-4">Welcome to Dharti Homes</h1>
          <p className="lead">Find your dream home with us</p>
          <p>
            Welcome to Dharti Homes, your ultimate destination for discovering
            the perfect home. At Dharti Homes, we are dedicated to providing you
            with a seamless and enjoyable experience as you explore our
            extensive range of properties. Whether you're in search of a
            luxurious villa, a modern apartment, or a cozy cottage, we have
            something for everyone. Our experienced professionals are committed
            to helping you find the home of your dreams. At Dharti Homes, we
            understand that buying or renting a property is a significant
            decision, and we're here to make the process as smooth as possible.
            Our comprehensive listings feature properties in prime locations,
            each offering unique amenities and breathtaking views. From tranquil
            countryside retreats to vibrant city dwellings, our selection caters
            to diverse preferences and lifestyles.
          </p>
          <button className="btn btn-primary mt-3" onClick={handleBtn}>
            About us{" "}
          </button>
        </div>
      </header>

      <section className="py-5">
        <div className="container">
          <h2 className="text-center">Featured Houses</h2>
          <div
            id="houseCarousel"
            className="carousel slide carousel-medium"
            data-ride="carousel"
            data-interval="3000"
          >
            <div className="carousel-inner">
              {houses.map((house, index) => (
                <div
                  key={house.id}
                  className={`carousel-item ${
                    index === activeIndex ? "active" : ""
                  }`}
                >
                  <img
                    className="d-block w-100"
                    src={house.image}
                    alt={house.title}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h3>{house.title}</h3>
                    <p>{house.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-4">
            <button className="btn btn-primary" onClick={handlExplore}>
              Explore More..
            </button>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="text-center">Main Features</h2>
          <div className="row">
            <div className="col-md-3">
              <div className="card text-center h-100">
                <img
                  className="card-img-top mx-auto p-2"
                  src="icons/magnifying-glass-location-solid.svg"
                  alt="Easy to Find"
                  style={{ width: "100px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Easy to Find</h5>
                  <p className="card-text">
                    Our advanced search filters make it easy to find your
                    perfect home.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center h-100">
                <img
                  className="card-img-top mx-auto p-2"
                  src="icons/hand-holding-dollar-solid.svg"
                  alt="Best Rates"
                  style={{ width: "100px" }}
                />
                <div className="card-body ">
                  <h5 className="card-title">Best Rates</h5>
                  <p className="card-text">
                    We offer competitive pricing and the best rates in the
                    market.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center h-100">
                <img
                  className="card-img-top mx-auto p-2"
                  src="icons/route-solid.svg"
                  alt="Wide Range of Options"
                  style={{ width: "100px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Wide Range of Options</h5>
                  <p className="card-text">
                    We have properties to suit all preferences and budgets.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center h-100">
                <img
                  className="card-img-top mx-auto p-2"
                  src="icons/headset-solid.svg"
                  alt="Dedicated Support"
                  style={{ width: "100px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Dedicated Support</h5>
                  <p className="card-text">
                    Our team is here to guide you through every step of the
                    process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
