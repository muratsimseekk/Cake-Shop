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
            <h2 className="text-4xl">Valentines at CAKE</h2>
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
          <div className="w-1/2">
            <img className="w-full" src={topPhoto} alt="" />
          </div>
        </div>
        <div className="bg-green-300 w-full flex flex-col ">
          <div>
            <p className="text-2xl text-center py-5">Available CAKES</p>
          </div>
          <div className="flex justify-between flex-wrap gap-y-5 py-5">
            <div className="w-[23%] flex flex-col gap-2">
              <img className="w-full" src={photo2} />
              <div className="flex flex-col gap-1">
                <h3 className="text-lg">Valentines Treat Box</h3>
                <p className="text-sm">Cake By Opera Baker</p>
                <p>$12</p>
              </div>
            </div>
            <div className="w-[23%] flex flex-col gap-2">
              <img className="w-full" src={photo3} />
              <div className="flex flex-col gap-1">
                <h3 className="text-lg">Valentines Treat Box</h3>
                <p className="text-sm">Cake By Opera Baker</p>
                <p>$12</p>
              </div>
            </div>
            <div className="w-[23%] flex flex-col gap-2">
              <img className="w-full" src={photo8} />
              <div className="flex flex-col gap-1">
                <h3 className="text-lg">Valentines Treat Box</h3>
                <p className="text-sm">Cake By Opera Baker</p>
                <p>$12</p>
              </div>
            </div>
            <div className="w-[23%] flex flex-col gap-2">
              <img className="w-full" src={photo9} />
              <div className="flex flex-col gap-1">
                <h3 className="text-lg">Valentines Treat Box</h3>
                <p className="text-sm">Cake By Opera Baker</p>
                <p>$12</p>
              </div>
            </div>
            <div className="w-[23%] flex flex-col gap-2">
              <img className="w-full" src={photo5} />
              <div className="flex flex-col gap-1">
                <h3 className="text-lg">Valentines Treat Box</h3>
                <p className="text-sm">Cake By Opera Baker</p>
                <p>$12</p>
              </div>
            </div>
            <div className="w-[23%] flex flex-col gap-2">
              <img className="w-full" src={photo6} />
              <div className="flex flex-col gap-1">
                <h3 className="text-lg">Valentines Treat Box</h3>
                <p className="text-sm">Cake By Opera Baker</p>
                <p>$12</p>
              </div>
            </div>
            <div className="w-[23%] flex flex-col gap-2">
              <img className="w-full" src={photo7} />
              <div className="flex flex-col gap-1">
                <h3 className="text-lg">Valentines Treat Box</h3>
                <p className="text-sm">Cake By Opera Baker</p>
                <p>$12</p>
              </div>
            </div>
            <div className="w-[23%] flex flex-col gap-2">
              <img className="w-full" src={photo8} />
              <div className="flex flex-col gap-1">
                <h3 className="text-lg">Valentines Treat Box</h3>
                <p className="text-sm">Cake By Opera Baker</p>
                <p>$12</p>
              </div>
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
            <img className="w-[450px] h-full" src={store} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialPage;
