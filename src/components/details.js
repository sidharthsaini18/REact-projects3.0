import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import houseData from "./mockdata.json";
import Pform from "./pform";
import Success from "./success";

const Details = () => {
  const { propid } = useParams();

  const [propertyID, setPropertyID] = useState(Number(propid));
  const [activeHouse, setActiveHouse] = useState({});

  useEffect(() => {
    console.log("propertyID:", propertyID);
    if (propertyID) {
      const data = houseData.filter((house) => house.id === propertyID);
      console.log("Filtered data:", data);
      if (data.length > 0) {
        setActiveHouse(data[0]);
      } else {
        console.warn("No matching house found.");
        setActiveHouse(null);
      }
    }
  }, [propertyID]);

  useEffect(() => {
    console.log("activeHouse:", activeHouse);
  }, [activeHouse]);
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mt-5 p-0">
      <div></div>
      <div className="d-sm-flex flex-sm-column flex-lg-row justify-content-centeralign-items-center">
        {activeHouse && activeHouse.id ? (
          <>
            <div className="w-100 m-1">
              <img
                className=""
                src={activeHouse.img}
                width={"100%"}
                height={450}
                alt="House Image"
              />
            </div>

            {activeHouse.gallery && (
              <div className="row w-100 gap-3 justify-content-center align-items-center m-1">
                {activeHouse.gallery.map((image, i) => (
                  <div
                    key={i}
                    className="col-lg-4 col-md-3 p-0 align-self-center"
                  >
                    <img
                      src={image}
                      width={"100%"}
                      height={200}
                      style={{ objectFit: "cover" }}
                      alt={`Gallery Image ${i + 1}`}
                    />
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          <p>Loading or No Data Found</p>
        )}
      </div>
      <section className="d-lg-flex  justify-content-center align-items-center mt-3 gap-5">
        <div className="d-flex flex-column w-lg-50 m-2 ">
          <div className="pt-4 pb-4">
            <h3 className="m-0 fs-4">{activeHouse.name}</h3>
            <p className="text-secondary fs-6 m-0">{activeHouse.rooms}</p>
            <div className="d-flex gap-1">
              <img src="/icons/star.png" height={20} />
              <p className="   ">5.0- {activeHouse.avg_ratings} reviews</p>
            </div>
          </div>
          <div className=" pb-2 pt-2 border-top border-bottom border-muted fs-5 fw-2 d-flex gap-3">
            <img
              className="rounded-circle"
              src="/icons/profile-1.png"
              height={50}
            />
            <div>
              <h4>Hosted by {activeHouse.host}</h4>
              <p className="fs-md-6 text-muted m-0">
                {activeHouse.time} hosting
              </p>
            </div>
          </div>
          <div className="pt-3 ">
            <h5>About this place</h5>
            <p>{activeHouse.desc}</p>
          </div>
        </div>
        <div className="w-100 d-flex justify-content-center">
          <Pform />
        </div>
      </section>
    </div>
  );
};

export default Details;
