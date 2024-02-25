import React from "react";
import { Route, Routes } from "react-router-dom";
import TopSlider from "./HomePage/TopSlider";
import Content from "./HomePage/Content";
import Footer from "./HomePage/Footer";

function HomePage() {
  return (
    <div>
      <TopSlider />
      <Content />
    </div>
  );
}

export default HomePage;
