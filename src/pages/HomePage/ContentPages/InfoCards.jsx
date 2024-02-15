import React from "react";
import foto1 from "../../../assets/img1.jpg";
import foto2 from "../../../assets/img2.jpg";
function InfoCards() {
  return (
    <div className="flex flex-col w-4/5 bg-red-300 gap-12">
      <div className="flex w-full h-[450px] justify-center ">
        <div className="w-1/2 bg-indigo-200 flex justify-end items-center">
          <div className="bg-green-400 w-[90%] h-5/6 px-10 flex flex-col gap-4 ">
            <h2 className="text-4xl">As featured in British VOGUE</h2>
            <p className="text-md ">
              Our Christmas Mini Cake featured in the British VOGUE DECEMBER
              2022 edition!
            </p>
          </div>
        </div>
        <div className="w-1/2 flex justify-end">
          <img className="w-4/5 h-full" src={foto1} alt="" />
        </div>
      </div>
      <div className="h-[350px] bg-blue-300 flex  ">
        <div className="w-1/3 h-full bg-slate-700 flex ">
          <img className="h-full max-w-max" src={foto2} alt="" />
        </div>
        <div className="w-2/3 bg-red-600 px-10">
          <div className="bg-yellow-300  h-full">
            <h2 className="text-4xl">Weddings</h2>
            <p className="text-md">
              The most important dat of your life deserves the most elegant
              cake. Let's create the wedding cake you've only ever dreamt of .
            </p>
            <button className="border px-5 py-1 shadow-md rounded-md border-blue-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-full h-[450px] justify-center text-end">
        <div className="w-1/2 bg-indigo-200 flex justify-end items-center ">
          <div className="bg-green-400 w-[90%] h-5/6 px-10 flex flex-col gap-4 items-end">
            <h2 className="text-4xl">Visit us in store</h2>
            <div className="flex flex-col gap-2">
              <p>30 Market Street , Adlington ,Chorley,PR7 4HE</p>
              <p>Opening hours:</p>
              <p>Monday 09:00 - 16:30</p>
              <p>Tuesday 09:00 - 16:30</p>
              <p>Wednesday 09:00 - 16:30</p>
              <p>Thursday 09:00 - 16:30</p>
              <p>Friday 09:00 - 16:30</p>
              <p>Saturday 09:00 - 16:30</p>
            </div>
            <button className="border w-1/3 py-1 rounded-md shadow">
              Directions
            </button>
          </div>
        </div>
        <div className="w-1/2 flex justify-end">
          <img className="w-4/5 h-full" src={foto1} alt="" />
        </div>
      </div>
    </div>
  );
}

export default InfoCards;
