import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import TopSlider from "./HomePage/TopSlider";
import Content from "./HomePage/Content";

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);
  return (
    <div className="">
      <TopSlider />
      <Content />
    </div>
  );
}

export default HomePage;
