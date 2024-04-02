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
        <div className="bg-slate-400 w-full flex flex-col gap-8 md:flex md:flex-row md:gap-0 lg:flex lg:flex-row lg:gap-0 xl:flex xl:flex-row xl:gap-0 2xl:flex 2xl:flex-row 2xl:gap-0 ">
          <div className="md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 w-full flex flex-col gap-4 bg-yellow-200 pt-10">
            <h2 className="2xl:text-4xl xl:text-3xl lg:text-3xl md:text-2xl text-3xl">
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
          <div className="md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 h-full">
            <img className="w-full h-full " src={topPhoto} alt="" />
          </div>
        </div>
        <div className="bg-green-300 w-full flex flex-col md:text-center 2xl:text-start xl:text-start lg:text-start ">
          <div>
            <p className="text-2xl text-center py-5 md:text-xl">
              Available CAKES
            </p>
          </div>
          <div className="flex md:flex md:flex-row md:gap-y-5 md:py-5 lg:flex lg:flex-row lg:gap-y-5 lg:py-5 xl:flex xl:flex-row xl:gap-y-5 xl:py-5 2xl:flex 2xl:flex-row 2xl:gap-y-5 2xl:py-5   justify-between flex-wrap">
            <div className="md:w-[23%] lg:w-[23%] xl:w-[23%] 2xl:w-[23%] w-[49%] flex flex-col gap-2">
              <img className="w-full rounded-md" src={photo2} />
              <div className="flex flex-col gap-1">
                <h3 className="text-lg">Valentines Treat Box</h3>
                <p className="text-sm">Cake By Opera Baker</p>
                <p>$12</p>
              </div>
            </div>
            <div className="md:w-[23%] lg:w-[23%] xl:w-[23%] 2xl:w-[23%] w-[49%] flex flex-col gap-2">
              <img className="w-full rounded-md" src={photo3} />
              <div className="flex flex-col gap-1">
                <h3 className="text-lg">Valentines Treat Box</h3>
                <p className="text-sm">Cake By Opera Baker</p>
                <p>$12</p>
              </div>
            </div>
            <div className="md:w-[23%] lg:w-[23%] xl:w-[23%] 2xl:w-[23%] w-[49%]  flex flex-col gap-2">
              <img className="w-full rounded-md" src={photo8} />
              <div className="flex flex-col gap-1">
                <h3 className="text-lg">Valentines Treat Box</h3>
                <p className="text-sm">Cake By Opera Baker</p>
                <p>$12</p>
              </div>
            </div>
            <div className="md:w-[23%] lg:w-[23%] xl:w-[23%] 2xl:w-[23%] w-[49%]  flex flex-col gap-2">
              <img className="w-full rounded-md" src={photo9} />
              <div className="flex flex-col gap-1">
                <h3 className="text-lg">Valentines Treat Box</h3>
                <p className="text-sm">Cake By Opera Baker</p>
                <p>$12</p>
              </div>
            </div>
            <div className="md:w-[23%] lg:w-[23%] xl:w-[23%] 2xl:w-[23%] w-[49%]  flex flex-col gap-2">
              <img className="w-full rounded-md" src={photo5} />
              <div className="flex flex-col gap-1">
                <h3 className="text-lg">Valentines Treat Box</h3>
                <p className="text-sm">Cake By Opera Baker</p>
                <p>$12</p>
              </div>
            </div>
            <div className="md:w-[23%] lg:w-[23%] xl:w-[23%] 2xl:w-[23%] w-[49%]  flex flex-col gap-2">
              <img className="w-full rounded-md" src={photo6} />
              <div className="flex flex-col gap-1">
                <h3 className="text-lg">Valentines Treat Box</h3>
                <p className="text-sm">Cake By Opera Baker</p>
                <p>$12</p>
              </div>
            </div>
            <div className="md:w-[23%] lg:w-[23%] xl:w-[23%] 2xl:w-[23%] w-[49%]  flex flex-col gap-2">
              <img className="w-full rounded-md" src={photo7} />
              <div className="flex flex-col gap-1">
                <h3 className="text-lg">Valentines Treat Box</h3>
                <p className="text-sm">Cake By Opera Baker</p>
                <p>$12</p>
              </div>
            </div>
            <div className="md:w-[23%] lg:w-[23%] xl:w-[23%] 2xl:w-[23%] w-[49%]  flex flex-col gap-2">
              <img className="w-full rounded-md" src={photo8} />
              <div className="flex flex-col gap-1">
                <h3 className="text-lg">Valentines Treat Box</h3>
                <p className="text-sm">Cake By Opera Baker</p>
                <p>$12</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-red-50 flex flex-col gap-8 w-full md:flex md:justify-end md:text-end lg:flex lg:justify-end lg:text-end xl:flex xl:justify-end xl:text-end 2xl:flex 2xl:justify-end 2xl:text-end">
          <div className="2xl:w-3/5 xl:w-3/5 lg:w-3/5 md:w-[55%] w-full flex flex-col md:flex md:flex-row md:justify-between md:items-center lg:flex lg:flex-row lg:justify-between lg:items-center xl:flex xl:flex-row xl:justify-between xl:items-center 2xl:flex 2xl:flex-row 2xl:justify-between 2xl:items-center ">
            <div className=" md:w-[90%] md:px-10 lg:w-[90%] lg:px-10 xl:w-[90%] xl:px-10 2xl:w-[90%] 2xl:px-10 flex flex-col gap-4 md:items-end lg:items-end xl:items-end 2xl:items-end">
              <h2 className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl text-3xl">
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
              <button className="border 2xl:text-lg xl:text-lg lg:text-lg md:text-base 2xl:w-1/3 xl:w-1/3 lg:w-1/3 md:w-[45%] w-1/2 py-1.5 rounded-md shadow">
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
