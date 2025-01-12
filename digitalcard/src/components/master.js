import react from "react";
import Frontcard from "./frontcard";
import "../style/master.css";
import Backcard from "./backcard";

const Master = () => {
  return (
    <div className="Masterbody">
      <Frontcard />
      <Backcard />
    </div>
  );
};
export default Master;
