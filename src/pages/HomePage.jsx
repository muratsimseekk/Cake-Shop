import React from "react";
import { Route, Routes } from "react-router-dom";
import TopSlider from "./HomePage/TopSlider";
import Content from "./HomePage/Content";

function HomePage() {
  return (
    <div>
      <TopSlider />
      <Content />
      <TopSlider />
    </div>
  );
}

export default HomePage;
