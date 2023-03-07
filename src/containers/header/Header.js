import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="header section__padding" id="home">
      <div className="header-content">
        <h1 className="gradiant__text">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut
          cursus quam
        </h1>{" "}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut
          cursus quam. Sed sollicitudin elementum neque id vestibulum. Nam
          faucibus a lorem vitae venenatis. Nunc tincidunt leo non porta
          porttitor. Fusce elementum, tellus vel pulvinar imperdiet, purus felis
          congue nulla,
        </p>
        <div className="header-content__input">
          <input type="email" placeholder="Enter Your Email Address" />
          <button type="submit">Get Started</button>
        </div>
        <div className="header-content__people">
          <img src={people} alt="people" />
          <p> 1500 people visited this website</p>
        </div>
      </div>
      <div className="header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
