import React from "react";
import "./possibility.css";
import possibilty from "../../assets/possibility.png";
const Possibility = () => {
  return (
    <div className="possibility section__padding" id="possibility">
      <div className="possibility-image">
        <img src={possibilty} alt="possiblity" />
      </div>
      <div className="possibility-content">
        <h4>sed rutrum augue consequat id</h4>
        <h1 className="gradiant__text">
          sed rutrum augue consequat id rutrum augue consequat{" "}
        </h1>
        <p>sed rutrum augue consequat id rutrum</p>
        <h4>sed rutrum augue consequat id</h4>
      </div>
    </div>
  );
};

export default Possibility;
