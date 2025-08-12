import React, { useState } from "react";

const Card = ({ like, price, img, desc, ratings, name, id }) => {
  const [fulldesc, setFullDescTrue] = useState(false);

  return (
    <div class="card w-100 mb-4 h-100">
      <img
        src={img}
        class="card-img-top"
        alt="..."
        style={{ height: "300px", objecFit: "cover" }}
      />
      <div class="card-body">
        <h5 class="card-title">{name}</h5>

        <p
          class={`card-text lead ${fulldesc ? "" : "descbox"}`}
          onMouseOver={() => {
            setFullDescTrue(true);
          }}
          onMouseLeave={() => {
            setFullDescTrue(false);
          }}
        >
          {desc}
        </p>

        <h6 className="fs-5">{price}</h6>

        <span
          className="position-absolute text-light fw-bold 
            top-0 end-0 bg-dark px-3 py-1 m-4 rounded-pill fs-5"
        >
          {like ? (
            <i className="fa fa-heart" />
          ) : (
            <i className="fa fa-heart-o" />
          )}
        </span>

        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Card;
