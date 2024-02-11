import React from "react";
import AwesomeSlider from "react-awesome-slider";
import slider1 from "./../../assets/img1.jpg";
import slider2 from "./../../assets/img2.jpg";

import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";

function TopSlider() {
  return (
    <AwesomeSlider className="" animation="cubeAnimation">
      <div data-src={slider1} />
      <div data-src={slider2} />
    </AwesomeSlider>
  );
}

export default TopSlider;
