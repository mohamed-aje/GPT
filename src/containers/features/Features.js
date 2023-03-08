import React from "react";
import { Feature } from "../../components";
import "./features.css";
const Features = () => {
  const data = [
    {
      title: " sed rutrum augue consequat id",
      text: "est sed tincidunt pulvinar, elit elit luctus urna,",
    },
    {
      title: " sed rutrum augue consequat id",
      text: "est sed tincidunt pulvinar, elit elit luctus urna,",
    },
    {
      title: " sed rutrum augue consequat id",
      text: "est sed tincidunt pulvinar, elit elit luctus urna,",
    },
  ];
  return (
    <div className="features section__padding" id="features">
      <div className="features-heading">
        <h1 className="gradiant__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit
          amet semper lorem.
        </h1>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
      <div className="features-container">
        {data.map((feature, index) => (
          <Feature
            title={feature.title}
            text={feature.text}
            key={feature.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
