import slider1 from "./../../assets/img1.jpg";
import slider2 from "./../../assets/img2.jpg";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/open-animation.css";

function TopSlider() {
  return (
    <>
      <AwesomeSlider animation="openAnimation">
        <div data-src={slider1} />
        <div data-src={slider2} />
      </AwesomeSlider>
    </>
  );
}

export default TopSlider;
