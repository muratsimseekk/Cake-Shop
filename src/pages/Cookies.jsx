import React from "react";

import photo2 from "../assets/cookies/cookie2.png";
import photo3 from "../assets/cookies/cookie3.png";
import photo4 from "../assets/cookies/cookie4.png";
import photo5 from "../assets/cookies/cookie5.png";
import photo6 from "../assets/cookies/cookie6.png";
import photo7 from "../assets/cookies/cookie7.png";
import photo8 from "../assets/cookies/cookie8.png";

import store from "../assets/specialpage/specialDayPhotos/store.png";

function Cookies() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-4/5 bg-red-300 my-14 flex flex-col gap-16">
        <div className="bg-yellow-300 flex flex-col gap-5 w-4/5">
          <h2 className="2xl:text-4xl xl:text-3xl lg:text-3xl md:text-2xl">
            Cookies
          </h2>
          <p className="leading-7 2xl:text-xl xl:text-lg lg:text-lg md:text-base">
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
            <p className="2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl text-center py-5">
              Available Cookies
            </p>
          </div>
          <div className="flex justify-between flex-wrap gap-y-5 py-5">
            <div className="w-[24%] flex flex-col gap-2">
              <img className="w-full rounded-md" src={photo2} />
              <div className="flex flex-col gap-1 md:text-center 2xl:text-start xl:text-start lg:text-start">
                <h3 className="2xl:text-lg xl:text-lg lg:text-lg md:text-base ">
                  Valentines Treat Box
                </h3>
                <p className="text-sm">Cake By Opera Baker</p>
                <p>$12</p>
              </div>
            </div>
            <div className="w-[24%] flex flex-col gap-2 ">
              <img className="w-full rounded-md" src={photo3} />
              <div className="flex flex-col gap-1 md:text-center 2xl:text-start xl:text-start lg:text-start">
                <h3 className="2xl:text-lg xl:text-lg lg:text-lg md:text-base">
                  Valentines Treat Box
                </h3>
                <p className="text-sm">Cake By Opera Baker</p>
                <p>$12</p>
              </div>
            </div>
            <div className="w-[24%] flex flex-col gap-2">
              <img className="w-full rounded-md" src={photo8} />
              <div className="flex flex-col gap-1  md:text-center 2xl:text-start xl:text-start lg:text-start">
                <h3 className="2xl:text-lg xl:text-lg lg:text-lg md:text-base">
                  Valentines Treat Box
                </h3>
                <p className="text-sm">Cake By Opera Baker</p>
                <p>$12</p>
              </div>
            </div>
            <div className="w-[24%] flex flex-col gap-2">
              <img className="w-full rounded-md" src={photo4} />
              <div className="flex flex-col gap-1 md:text-center 2xl:text-start xl:text-start lg:text-start">
                <h3 className="2xl:text-lg xl:text-lg lg:text-lg md:text-base">
                  Valentines Treat Box
                </h3>
                <p className="text-sm">Cake By Opera Baker</p>
                <p>$12</p>
              </div>
            </div>
            <div className="w-[24%] flex flex-col gap-2">
              <img className="w-full rounded-md" src={photo5} />
              <div className="flex flex-col gap-1 md:text-center 2xl:text-start xl:text-start lg:text-start">
                <h3 className="2xl:text-lg xl:text-lg lg:text-lg md:text-base">
                  Valentines Treat Box
                </h3>
                <p className="text-sm">Cake By Opera Baker</p>
                <p>$12</p>
              </div>
            </div>
            <div className="w-[24%] flex flex-col gap-2">
              <img className="w-full rounded-md" src={photo6} />
              <div className="flex flex-col gap-1 md:text-center 2xl:text-start xl:text-start lg:text-start">
                <h3 className="2xl:text-lg xl:text-lg lg:text-lg md:text-base">
                  Valentines Treat Box
                </h3>
                <p className="text-sm">Cake By Opera Baker</p>
                <p>$12</p>
              </div>
            </div>
            <div className="w-[24%] flex flex-col gap-2">
              <img className="w-full rounded-md" src={photo7} />
              <div className="flex flex-col gap-1 md:text-center 2xl:text-start xl:text-start lg:text-start">
                <h3 className="2xl:text-lg xl:text-lg lg:text-lg md:text-base">
                  Valentines Treat Box
                </h3>
                <p className="text-sm">Cake By Opera Baker</p>
                <p>$12</p>
              </div>
            </div>
            <div className="w-[24%] flex flex-col gap-2">
              <img className="w-full rounded-md" src={photo4} />
              <div className="flex flex-col gap-1 md:text-center 2xl:text-start xl:text-start lg:text-start">
                <h3 className="2xl:text-lg xl:text-lg lg:text-lg md:text-base">
                  Valentines Treat Box
                </h3>
                <p className="text-sm">Cake By Opera Baker</p>
                <p>$12</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-end text">
          <div className="2xl:w-2/5 xl:w-2/5 lg:w-2/5 md:w-[45%] flex justify-end">
            <img
              className="w-full bg-fuchsia-100 h-full rounded-md"
              src={store}
              alt=""
            />
          </div>
          <div className="2xl:w-3/5 xl:w-3/5 lg:w-3/5 md:w-[55%] bg-red-100 py-4 flex justify-between items-center ">
            <div className=" w-[90%] 2xl:pl-20 xl:pl-20 lg:pl-20 md:pl-10 flex flex-col gap-4 items-start">
              <h2 className="2xl:text-5xl xl:text-3xl lg:text-3xl md:text-xl">
                Visit us in store
              </h2>
              <div className="flex 2xl:text-lg xl:text-lg lg:text-lg md:text-base flex-col gap-2">
                <p>30 Market Street , Adlington ,Chorley,PR7 4HE</p>
                <p>Opening hours:</p>
                <p>Monday 09:00 - 16:30</p>
                <p>Tuesday 09:00 - 16:30</p>
                <p>Wednesday 09:00 - 16:30</p>
                <p>Thursday 09:00 - 16:30</p>
                <p>Friday 09:00 - 16:30</p>
                <p>Saturday 09:00 - 16:30</p>
              </div>
              <button className="border 2xl:text-lg xl:text-lg lg:text-lg md:text-sm 2xl:w-1/3 xl:w-1/3 lg:w-1/3 md:w-[45%] py-1 rounded-md shadow">
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
