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

function Cookies() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-4/5 bg-red-300 my-14 flex flex-col gap-16">
        <div className="bg-yellow-300 flex flex-col gap-5 w-4/5">
          <h2 className="text-5xl">Cookies</h2>
          <p className="leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam non,
            aut ipsam ab perspiciatis nihil, quae perferendis velit, consectetur
            maxime magnam commodi! Quasi repellendus delectus provident
            laudantium nobis et? Autem? Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Laudantium provident eum rerum facere molestias
            rem assumenda hic voluptates, cum at accusantium voluptatem officia
            quasi numquam soluta voluptatum placeat quidem pariatur!
          </p>
        </div>
        <div className="bg-green-300 w-full flex flex-col ">
          <div>
            <p className="text-2xl text-center py-5">Available Cookies</p>
          </div>
          <div className="flex justify-between flex-wrap gap-y-5 py-5">
            <div className="w-[24%] flex flex-col gap-2">
              <img className="w-full" src={photo2} />
              <div className="flex flex-col gap-1">
                <h3 className="text-lg">Valentines Treat Box</h3>
                <p className="text-sm">Cake By Opera Baker</p>
                <p>$12</p>
              </div>
            </div>
            <div className="w-[24%] flex flex-col gap-2">
              <img className="w-full" src={photo3} />
              <div className="flex flex-col gap-1">
                <h3 className="text-lg">Valentines Treat Box</h3>
                <p className="text-sm">Cake By Opera Baker</p>
                <p>$12</p>
              </div>
            </div>
            <div className="w-[24%] flex flex-col gap-2">
              <img className="w-full" src={photo8} />
              <div className="flex flex-col gap-1">
                <h3 className="text-lg">Valentines Treat Box</h3>
                <p className="text-sm">Cake By Opera Baker</p>
                <p>$12</p>
              </div>
            </div>
            <div className="w-[24%] flex flex-col gap-2">
              <img className="w-full" src={photo9} />
              <div className="flex flex-col gap-1">
                <h3 className="text-lg">Valentines Treat Box</h3>
                <p className="text-sm">Cake By Opera Baker</p>
                <p>$12</p>
              </div>
            </div>
            <div className="w-[24%] flex flex-col gap-2">
              <img className="w-full" src={photo5} />
              <div className="flex flex-col gap-1">
                <h3 className="text-lg">Valentines Treat Box</h3>
                <p className="text-sm">Cake By Opera Baker</p>
                <p>$12</p>
              </div>
            </div>
            <div className="w-[24%] flex flex-col gap-2">
              <img className="w-full" src={photo6} />
              <div className="flex flex-col gap-1">
                <h3 className="text-lg">Valentines Treat Box</h3>
                <p className="text-sm">Cake By Opera Baker</p>
                <p>$12</p>
              </div>
            </div>
            <div className="w-[24%] flex flex-col gap-2">
              <img className="w-full" src={photo7} />
              <div className="flex flex-col gap-1">
                <h3 className="text-lg">Valentines Treat Box</h3>
                <p className="text-sm">Cake By Opera Baker</p>
                <p>$12</p>
              </div>
            </div>
            <div className="w-[24%] flex flex-col gap-2">
              <img className="w-full" src={photo8} />
              <div className="flex flex-col gap-1">
                <h3 className="text-lg">Valentines Treat Box</h3>
                <p className="text-sm">Cake By Opera Baker</p>
                <p>$12</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-end text">
          <div className="w-2/5 flex justify-end">
            <img className="w-[450px] h-full" src={store} alt="" />
          </div>
          <div className="w-3/5 flex justify-between items-center ">
            <div className=" w-[90%] pl-20 flex flex-col gap-4 items-start">
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
        </div>
      </div>
    </div>
  );
}

export default Cookies;
