import React from "react";

import topPhoto from "../assets/specialpage/specialDayPhotos/photo1.png";
import photo2 from "../assets/specialpage/specialDayPhotos/photo2.png";
import photo3 from "../assets/specialpage/specialDayPhotos/photo3.png";
import photo4 from "../assets/specialpage/specialDayPhotos/photo4.png";
import photo5 from "../assets/specialpage/specialDayPhotos/photo5.png";
import photo6 from "../assets/specialpage/specialDayPhotos/photo6.png";
import photo7 from "../assets/specialpage/specialDayPhotos/photo7.png";
import photo8 from "../assets/specialpage/specialDayPhotos/photo8.png";
import photo9 from "../assets/specialpage/specialDayPhotos/photo9.png";
import store from "../assets/specialpage/specialDayPhotos/store.png";

function SpecialPage() {
  return (
    <div className="w-full flex justify-center my-5">
      <div className="w-4/5 flex flex-col items-center gap-10">
        <div className="bg-slate-400 w-full flex ">
          <div className="w-1/2 flex flex-col gap-4 bg-yellow-200 pt-10">
            <h2 className="2xl:text-4xl xl:text-3xl lg:text-3xl md:text-2xl">
              Valentines at CAKE
            </h2>
            <div className="flex flex-col gap-2 text-base">
              <p>Happy Valentine's Day</p>
              <p>
                For someone you love or just a little self care,we have the
                perfect gift ...
              </p>
              <p>
                Choose from our range for freshly baked and beautifully
                decorated mini cakes and sweet treat , and treat the ones you
                love this Valentines Day.
              </p>
              <p>
                Available for collection in store on Saturday 10th or Wednesday
                14th of February
              </p>
              <p>Postal options also available .</p>
            </div>
          </div>
          <div className="w-1/2 h-full">
            <img className="w-full h-full " src={topPhoto} alt="" />
          </div>
        </div>
        <div className="bg-green-300 w-full flex flex-col md:text-center 2xl:text-start xl:text-start lg:text-start ">
          <div>
            <p className="text-2xl text-center py-5 md:text-xl">
              Available CAKES
            </p>
          </div>
          <div className="flex justify-between flex-wrap gap-y-5 py-5">
            <div className="w-[23%] flex flex-col gap-2">
              <img className="w-full rounded-md" src={photo2} />
              <div className="flex flex-col gap-1">
                <h3 className="text-lg">Valentines Treat Box</h3>
                <p className="text-sm">Cake By Opera Baker</p>
                <p>$12</p>
              </div>
            </div>
            <div className="w-[23%] flex flex-col gap-2">
              <img className="w-full rounded-md" src={photo3} />
              <div className="flex flex-col gap-1">
                <h3 className="text-lg">Valentines Treat Box</h3>
                <p className="text-sm">Cake By Opera Baker</p>
                <p>$12</p>
              </div>
            </div>
            <div className="w-[23%] flex flex-col gap-2">
              <img className="w-full rounded-md" src={photo8} />
              <div className="flex flex-col gap-1">
                <h3 className="text-lg">Valentines Treat Box</h3>
                <p className="text-sm">Cake By Opera Baker</p>
                <p>$12</p>
              </div>
            </div>
            <div className="w-[23%] flex flex-col gap-2">
              <img className="w-full rounded-md" src={photo9} />
              <div className="flex flex-col gap-1">
                <h3 className="text-lg">Valentines Treat Box</h3>
                <p className="text-sm">Cake By Opera Baker</p>
                <p>$12</p>
              </div>
            </div>
            <div className="w-[23%] flex flex-col gap-2">
              <img className="w-full rounded-md" src={photo5} />
              <div className="flex flex-col gap-1">
                <h3 className="text-lg">Valentines Treat Box</h3>
                <p className="text-sm">Cake By Opera Baker</p>
                <p>$12</p>
              </div>
            </div>
            <div className="w-[23%] flex flex-col gap-2">
              <img className="w-full rounded-md" src={photo6} />
              <div className="flex flex-col gap-1">
                <h3 className="text-lg">Valentines Treat Box</h3>
                <p className="text-sm">Cake By Opera Baker</p>
                <p>$12</p>
              </div>
            </div>
            <div className="w-[23%] flex flex-col gap-2">
              <img className="w-full rounded-md" src={photo7} />
              <div className="flex flex-col gap-1">
                <h3 className="text-lg">Valentines Treat Box</h3>
                <p className="text-sm">Cake By Opera Baker</p>
                <p>$12</p>
              </div>
            </div>
            <div className="w-[23%] flex flex-col gap-2">
              <img className="w-full rounded-md" src={photo8} />
              <div className="flex flex-col gap-1">
                <h3 className="text-lg">Valentines Treat Box</h3>
                <p className="text-sm">Cake By Opera Baker</p>
                <p>$12</p>
              </div>
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
            <img className="w-full h-full" src={store} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialPage;
