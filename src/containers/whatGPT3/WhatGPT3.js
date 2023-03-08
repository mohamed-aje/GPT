import React from "react";
import { Feature } from "../../components";
import "./whatGPT3.css";
const WhatGPT3 = () => {
  return (
    <div className="whatgpt3 section__margin" id="wgpt3">
      <div className="whatgpt3-feature">
        <Feature
          title="Lorem ipsum dolor"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet semper lorem. Fusce molestie risus in maximus fermentum. Mauris auctor in velit sed maximus. Praesent gravida orci eget purus vestibulum consequat"
        />
      </div>
      <div className="whatgpt3-heading">
        <h1 className="gradiant__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h1>
        <p>Explore the library</p>
      </div>
      <div className="whatgpt3-container">
        <Feature
          title="Lorem  "
          text="Duis sit amet nunc in dolor tincidunt hendrerit. Sed luctus finibus nibh, sed rutrum augue consequat id. "
        />
        <Feature
          title=" ipsum "
          text="est sed tincidunt pulvinar, elit elit luctus urna, eu vestibulum urna libero nec lorem "
        />
        <Feature
          title=" dolor"
          text="Sed tempor enim et dolor tincidunt finibus. Curabitur porttitor porta justo nec aliquam. Vivamus tincidunt eros mi "
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
