import react from "react";
import "./card.css";

const Card = () => {
  return (
    <div className="wrapper d-flex ">
      <div className="card">
        <img src="profile-1.png" className="card-img-top" alt="img" />
        <div className="card-body">
          <h5 className="card-title">unknown 1</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> Item 1</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">
            Buy NOW!
          </a>
          <a href="#" className="card-link">
            More......
          </a>
        </div>
      </div>

      <div className="card">
        <img src="profile-1.png" className="card-img-top" alt="img" />
        <div className="card-body">
          <h5 className="card-title">Unknown 2</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">
            BUY NOW!
          </a>
          <a href="#" className="card-link">
            More...
          </a>
        </div>
      </div>

      <div className="card">
        <img src="profile-1.png" className="card-img-top" alt="img" />
        <div className="card-body">
          <h5 className="card-title">unkown-3</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">
            BUY NOW!
          </a>
          <a href="#" className="card-link">
            More...
          </a>
        </div>
      </div>

      <div className="card">
        <img src="profile-1.png" className="card-img-top" alt="img" />
        <div className="card-body">
          <h5 className="card-title">Unknown 4</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">
            BUY NOW!
          </a>
          <a href="#" className="card-link">
            More...
          </a>
        </div>
      </div>
    </div>
  );
};
export default Card;
