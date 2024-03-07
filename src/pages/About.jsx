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
        <h1 className="text-5xl text-center bg-green-200">About</h1>
        <div className="flex flex-col gap-16">
          <div className="flex justify-between">
            <div className=" flex w-1/2">
              <img className=" bg-red-200 w-full" src={photo2} />
            </div>
            <div className="w-1/2 bg-yellow-200 flex justify-between items-center ">
              <div className="flex flex-col gap-5 px-8">
                <h2 className="text-3xl ">Hannah Jones</h2>
                <p className="text-lg">
                  I'm a self taught baker and cake designer ! My passion for
                  baking began 2015 when i started making cakes and treats for
                  my family and friends.Through word of mouth CAKE by Hannah
                  Jones has grown into what it is today
                </p>
                <p className="text-lg">
                  My shop is now open in Market Street in Addlinghton ,
                  Lancashire.I offer a full menu of takeaway counter treats ,
                  drinks , gifts , as well as my bespoke cake service for
                  beautifully designed cakes and treats for all occasions
                </p>
                <p className="text-lg">Love </p>
                <p className="text-lg">Hannah x</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="w-1/2 bg-yellow-200 flex justify-between items-center ">
              <div className="flex flex-col gap-6 px-8">
                <h2 className="text-3xl ">Visit in Store</h2>
                <div>
                  <p className="text-lg">
                    30 Market Street , Adlinghton ,Chorley, PR7 4HE
                  </p>
                  <p className="text-lg">Opening Hours :</p>
                  <p className="text-lg">Monday 09:00 -21:00 </p>
                  <p className="text-lg">Tuesday 09:00 -21:00 </p>
                  <p className="text-lg">Wednesday 09:00 -21:00 </p>
                  <p className="text-lg">Thursday 09:00 -21:00 </p>
                  <p className="text-lg">Friday 09:00 -21:00 </p>
                  <p className="text-lg">Saturday 09:00 -21:00</p>
                  <p className="text-lg">Sunday 09:00 -21:00</p>
                </div>
              </div>
            </div>
            <div className=" flex w-1/2">
              <img className=" bg-red-200 w-full" src={photo1} />
            </div>
          </div>
          <div className="w-full flex flex-col gap-10">
            <h3 className="text-3xl bg-red-400 text-center">
              Follow on instagram
            </h3>
            <div className="flex w-full justify-between">
              <img className="w-[24%]" src={photo4} alt="" />
              <img className="w-[24%]" src={photo5} alt="" />
              <img className="w-[24%]" src={photo6} alt="" />
              <img className="w-[24%]" src={photo7} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
