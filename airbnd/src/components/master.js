import React, { useEffect, useState } from "react";
import "./master.css";
import Card from "./card";
import houses from "./mockdata.json";
import Filterbar from "./filterbar";

const Master = () => {
  const [data, setData] = useState(houses);
  const [filterData, setFilterData] = useState(houses);
  const [searchTerm, setsearchTerm] = useState("");

  const [isLikes, setIslikes] = useState(
    localStorage.getItem("likes")
      ? JSON.parse(localStorage.getItem("likes"))
      : []
  );

  function handleLike(id) {
    if (isLikes.includes(id)) {
      let newarr = isLikes.filter((like) => id !== like);

      setIslikes(newarr);
      return;
    } else {
      setIslikes([...isLikes, id]);
    }
  }

  useEffect(() => {
    localStorage.setItem("likes", JSON.stringify(isLikes));

    const filtered = data.filter((house) =>
      house.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilterData(filtered);
  }, [isLikes, searchTerm, data]);

  // useEffect(() => {
  //   const filtered = data.filter((house) =>
  //     house.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   );

  //   setFilterData(filtered);
  // }, [searchTerm, data]);

  return (
    <div className="container-fluid bg-dark">
      <div className="row h-100 hero  text-light p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 className="display-4 fw-bold lh-1">
            Border hero with cropped image and shadows
          </h1>
          <p className="lead">
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system,
            extensive prebuilt components, and powerful JavaScript plugins.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
            >
              Primary
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Default
            </button>
          </div>
        </div>
        <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img
            className="rounded-lg-3"
            src="./assets/hero.jpg"
            alt=""
            width="720"
          />
        </div>
      </div>

      <div className="w-75 mt-5 mx-auto">
        <Filterbar onSearchChange={setsearchTerm} />
      </div>

      <div className="row mt-5 py-4">
        {filterData.map((house, i) => {
          return (
            <div
              className="col-lg-3 col-md-6 mb-4"
              key={i}
              onClick={() => handleLike(house.id)}
            >
              <Card
                price={house.price}
                name={house.name}
                img={house.img}
                desc={house.desc}
                ratings={house.avg_ratings}
                id={house.id}
                like={isLikes.includes(house.id)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Master;
