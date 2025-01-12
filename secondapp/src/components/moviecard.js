import React from "react";
import "./moviecard.css";
// external css

const MovieCard = () => {
  //embeded css
  const moviecardbg = { backgroundColor: "yellow" };

  return (
    //inline css
    <div style={{ display: "flex", gap: "2em" }}>
      <div className="movie-card" style={moviecardbg}>
        <img src="logo192.png" />

        <h4 className="title">Movie Name</h4>
        <p className="desc">
          Reference site about Lorem Ipsum, giving information on its origins,
          as well as a random Lipsum generator.
        </p>
        <h6 className="price">
          $ <strong> 1014</strong>
        </h6>
      </div>

      <div className="movie-card" style={moviecardbg}>
        <img src="logo512.png" />

        <h4 className="title">Movie Name</h4>
        <p className="desc">
          Reference site about Lorem Ipsum, giving information on its origins,
          as well as a random Lipsum generator.
        </p>
        <h6 className="price">
          $ <strong> 1014</strong>
        </h6>
      </div>
    </div>
  );
};

export default MovieCard;
