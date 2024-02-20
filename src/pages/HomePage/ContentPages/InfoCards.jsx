import React from "react";
import foto1 from "../../../assets/img1.jpg";
import foto2 from "../../../assets/img2.jpg";
function InfoCards() {
  return (
    <div className="flex flex-col w-4/5 bg-300 gap-20">
      <div className="flex w-full  justify-center">
        <div className="w-3/5  flex justify-end items-center">
          <div className=" w-[90%] h-5/6 px-10 flex flex-col gap-4 ">
            <h2 className="text-5xl">As featured in British VOGUE</h2>
            <p className="text-lg ">
              Our Christmas Mini Cake featured in the British VOGUE DECEMBER
              2022 edition!
            </p>
          </div>
        </div>
        <div className="w-1/2 flex justify-end">
          <img className="w-[450px] " src={foto1} alt="" />
        </div>
      </div>
      <div className="h-[400px] flex  items-center">
        <div className="w-1/3 h-full  flex ">
          <img className="h-full w-[350px]" src={foto2} alt="" />
        </div>
        <div className="w-2/3 h-4/5 px-10">
          <div className="flex flex-col gap-6">
            <h2 className="text-5xl">Weddings</h2>
            <p className="text-lg">
              The most important dat of your life deserves the most elegant
              cake. Let's create the wedding cake you've only ever dreamt of .
            </p>
            <button className="border w-[26.5%] py-1 text-lg shadow-md rounded-md border-blue-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-end text-end">
        <div className="w-3/5 flex justify-between items-center ">
          <div className=" w-[90%] px-10 flex flex-col gap-4 items-end">
            <h2 className="text-5xl">Visit us in store</h2>
            <div className="flex text-lg flex-col gap-2">
              <p>30 Market Street , Adlington ,Chorley,PR7 4HE</p>
              <p>Opening hours:</p>
              <p>Monday 09:00 - 16:30</p>
              <p>Tuesday 09:00 - 16:30</p>
              <p>Wednesday 09:00 - 16:30</p>
              <p>Thursday 09:00 - 16:30</p>
              <p>Friday 09:00 - 16:30</p>
              <p>Saturday 09:00 - 16:30</p>
            </div>
            <button className="border text-lg w-1/3 py-1 rounded-md shadow">
              Directions
            </button>
          </div>
        </div>
        <div className="w-2/5 flex justify-end">
          <img className="w-[450px] h-full" src={foto1} alt="" />
        </div>
      </div>
      <div className="w-full flex flex-col gap-10">
        <h3 className="text-3xl bg-red-400 text-center">Follow on instagram</h3>
        <div className="flex w-full justify-between">
          <img className="w-[24%]" src={foto1} alt="" />
          <img className="w-[24%]" src={foto1} alt="" />
          <img className="w-[24%]" src={foto1} alt="" />
          <img className="w-[24%]" src={foto1} alt="" />
        </div>
      </div>
    </div>
  );
}

export default InfoCards;
