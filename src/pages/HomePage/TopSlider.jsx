import slider1 from "./../../assets/img1.jpg";
import slider2 from "./../../assets/img2.jpg";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/open-animation.css";

function TopSlider() {
  return (
    <div className="w-[1280px]">
      {/* <AwesomeSlider className="w-full h-[600px]" animation="openAnimation">
        <div className="w-full" data-src={slider1} />
        <div className="w-full" data-src={slider2} />
      </AwesomeSlider> */}
    </div>
  );
}

export default TopSlider;