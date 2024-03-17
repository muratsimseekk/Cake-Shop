import React from "react";
import photo1 from "../assets/about/about1.png";
import photo2 from "../assets/about/about2.png";

import photo4 from "../assets/weddings/wedding4.png";
import photo5 from "../assets/weddings/wedding5.png";
import photo6 from "../assets/weddings/wedding6.png";
import photo7 from "../assets/weddings/wedding7.png";
function About() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-4/5 flex flex-col gap-12 my-14">
        <h1 className="2xl:text-4xl xl:text-3xl lg:text-3xl md:text-2xl text-center bg-green-200">
          About
        </h1>
        <div className="flex flex-col gap-16">
          <div className="flex justify-between">
            <div className=" flex w-[55%]">
              <img className=" bg-red-200 w-full" src={photo2} />
            </div>
            <div className="w-[45%] bg-yellow-200 flex justify-between items-center ">
              <div className="flex flex-col gap-5 2xl:px-8 xl:px-8 lg:px-8 md:px-4 py-5">
                <h2 className="2xl:text-3xl xl:text-2xl lg:text-2xl md:text-xl">
                  Hannah Jones
                </h2>
                <p className="2xl:text-lg xl:text-lg lg:text-lg md:text-[15px]">
                  I'm a self taught baker and cake designer ! My passion for
                  baking began 2015 when i started making cakes and treats for
                  my family and friends.Through word of mouth CAKE by Hannah
                  Jones has grown into what it is today
                </p>
                <p className="2xl:text-lg xl:text-lg lg:text-lg md:text-[15px]">
                  My shop is now open in Market Street in Addlinghton ,
                  Lancashire.I offer a full menu of takeaway counter treats ,
                  drinks , gifts , as well as my bespoke cake service for
                  beautifully designed cakes and treats for all occasions
                </p>
                <p className="2xl:text-lg xl:text-lg lg:text-lg md:text-[15px]">
                  Love{" "}
                </p>
                <p className="2xl:text-lg xl:text-lg lg:text-lg md:text-[15px]">
                  Hannah x
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-end text-end">
            <div className="2xl:w-3/5 xl:w-3/5 lg:w-3/5 md:w-[55%] flex justify-between items-center ">
              <div className=" w-[90%] px-10 flex flex-col gap-4 items-end">
                <h2 className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl">
                  Visit us in store
                </h2>
                <div className="flex text-lg flex-col gap-2 md:text-base">
                  <p>30 Market Street , Adlington ,Chorley,PR7 4HE</p>
                  <p>Opening hours:</p>
                  <p>Monday 09:00 - 16:30</p>
                  <p>Tuesday 09:00 - 16:30</p>
                  <p>Wednesday 09:00 - 16:30</p>
                  <p>Thursday 09:00 - 16:30</p>
                  <p>Friday 09:00 - 16:30</p>
                  <p>Saturday 09:00 - 16:30</p>
                </div>
                <button className="border 2xl:text-lg xl:text-lg lg:text-lg md:text-base 2xl:w-1/3 xl:w-1/3 lg:w-1/3 md:w-[45%] py-1 rounded-md shadow">
                  Directions
                </button>
              </div>
            </div>
            <div className="2xl:w-2/5 xl:w-2/5 lg:w-2/5 md:w-[45%] flex justify-end">
              <img className="w-full h-full" src={photo1} alt="" />
            </div>
          </div>
          <div className="w-full flex flex-col gap-10">
            <h3 className="2xl:text-3xl xl:text-2xl lg:text-2xl md:text-xl bg-red-400 text-center">
              Follow on instagram
            </h3>
            <div className="flex w-full justify-between">
              <img className="w-[24%] rounded-md" src={photo4} alt="" />
              <img className="w-[24%] rounded-md" src={photo5} alt="" />
              <img className="w-[24%] rounded-md" src={photo6} alt="" />
              <img className="w-[24%] rounded-md" src={photo7} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
