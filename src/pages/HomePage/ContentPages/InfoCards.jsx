import React from "react";
import foto1 from "../../../assets/img1.jpg";
import foto2 from "../../../assets/img2.jpg";
function InfoCards() {
  //TODO: img ler map ile yazdiriliacak
  return (
    <div className="flex flex-col w-4/5 bg-300 gap-20">
      <div className="hidden md:flex md:w-full  md:justify-center lg:flex lg:w-full  lg:justify-center xl:flex xl:w-full  xl:justify-center 2xl:flex 2xl:w-full  2xl:justify-center">
        <div className="w-3/5  flex justify-end items-center">
          <div className=" w-[90%] h-5/6 px-10 md:px-4 flex flex-col gap-4">
            <h2 className="2xl:text-5xl xl:text-4xl lg:text-4xl md:text-2xl">
              As featured in British VOGUE
            </h2>
            <p className=" 2xl:text-lg xl:text-lg lg:text-xl md:text-base ">
              Our Christmas Mini Cake featured in the British VOGUE DECEMBER
              2022 edition!
            </p>
          </div>
        </div>
        <div className="w-1/2 flex justify-end">
          <img
            className="2xl:w-[450px] xl:w-[400px]  rounded-md"
            src={foto1}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col gap-10 md:hidden lg:hidden xl:hidden 2xl:hidden">
        <div className="w-full ">
          <img className="rounded-md" src={foto1} alt="" />
        </div>
        <div className="w-full bg-yellow-100 flex  justify-center">
          <div className="flex flex-col text-center w-[90%] bg-red-100 gap-6">
            <h2 className="text-3xl">As featured in British VOGUE</h2>
            <p className=" text-base ">
              Our Christmas Mini Cake featured in the British VOGUE DECEMBER
              2022 edition!
            </p>
          </div>
        </div>
      </div>
      <div className="md:h-[400px] lg:h-[400px] xl:h-[400px] 2xl:h-[400px] md:flex md:items-center lg:flex lg:items-center xl:flex xl:items-center 2xl:flex 2xl:items-center hidden">
        <div className="w-[45%] h-full  flex ">
          <img className="h-full  md:w-[400px] rounded-md" src={foto2} alt="" />
        </div>
        <div className="w-[55%] h-4/5 px-10">
          <div className="flex flex-col gap-6">
            <h2 className="2xl:text-5xl xl:text-4xl lg:text-4xl md:text-2xl">
              Weddings
            </h2>
            <p className="2xl:text-lg xl:text-lg lg:text-xl md:text-base">
              The most important day of your life deserves the most elegant
              cake. Let's create the wedding cake you've only ever dreamt of .
            </p>
            <button className="border w-[26.5%] md:w-[56%] md:text-base py-1 text-lg shadow-md rounded-md border-blue-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className=" md:hidden lg:hidden xl:hidden 2xl:hidden w-full flex flex-col gap-10 ">
        <div className="w-full">
          <img className=" rounded-md" src={foto2} alt="" />
        </div>
        <div className="w-full flex justify-center text-center">
          <div className="flex flex-col w-[90%] items-center bg-indigo-100 gap-6">
            <h2 className="text-3xl">Weddings</h2>
            <p className="text-base">
              The most important day of your life deserves the most elegant
              cake. Let's create the wedding cake you've only ever dreamt of .
            </p>
            <button className="border w-[65%] py-1 text-lg shadow-md rounded-md border-blue-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="hidden w-full md:flex md:justify-end md:text-end lg:flex lg:justify-end lg:text-end xl:flex xl:justify-end xl:text-end 2xl:flex 2xl:justify-end 2xl:text-end">
        <div className="w-3/5 flex justify-between items-center ">
          <div className=" w-[90%] px-10 flex flex-col gap-4 items-end">
            <h2 className="2xl:text-5xl xl:text-4xl lg:text-4xl md:text-2xl">
              Visit us in store
            </h2>
            <div className="flex text-lg md:text-base flex-col gap-2">
              <p>30 Market Street , Adlington ,Chorley,PR7 4HE</p>
              <p>Opening hours:</p>
              <p>Monday 09:00 - 16:30</p>
              <p>Tuesday 09:00 - 16:30</p>
              <p>Wednesday 09:00 - 16:30</p>
              <p>Thursday 09:00 - 16:30</p>
              <p>Friday 09:00 - 16:30</p>
              <p>Saturday 09:00 - 16:30</p>
            </div>
            <button className="border text-lg w-[35%] md:w-[55%] py-1 rounded-md shadow">
              Directions
            </button>
          </div>
        </div>
        <div className="w-2/5 flex justify-end">
          <img
            className="2xl:w-[450px] xl:w-[400px] h-full rounded-md"
            src={foto1}
            alt=""
          />
        </div>
      </div>
      <div className="md:hidden lg:hidden xl:hidden 2xl:hidden w-full flex  ">
        <div className="w-full flex flex-col items-center gap-10">
          <div className="w-full ">
            <img className="rounded-md w-full" src={foto1} alt="" />
          </div>
          <div className=" w-[90%] flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl">Visit us in store</h2>
            <div className="flex text-base flex-col gap-2">
              <p>30 Market Street , Adlington ,Chorley,PR7 4HE</p>
              <p>Opening hours:</p>
              <p>Monday 09:00 - 16:30</p>
              <p>Tuesday 09:00 - 16:30</p>
              <p>Wednesday 09:00 - 16:30</p>
              <p>Thursday 09:00 - 16:30</p>
              <p>Friday 09:00 - 16:30</p>
              <p>Saturday 09:00 - 16:30</p>
            </div>
            <button className="border text-lg w-[65%] py-1 rounded-md shadow">
              Directions
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-10">
        <h3 className="2xl:text-3xl xl:text-2xl lg:text-2xl md:text-xl text-xl bg-red-400 text-center">
          Follow on instagram
        </h3>
        <div className="flex w-full justify-between">
          <img
            className="md:w-[24%] lg:w-[24%] xl:w-[24%] 2xl:w-[24%] w-[33%] rounded-md"
            src={foto1}
            alt=""
          />
          <img
            className="md:w-[24%] lg:w-[24%] xl:w-[24%] 2xl:w-[24%] w-[33%] rounded-md"
            src={foto1}
            alt=""
          />
          <img
            className="md:w-[24%] lg:w-[24%] xl:w-[24%] 2xl:w-[24%] w-[33%] rounded-md"
            src={foto1}
            alt=""
          />
          <img
            className="w-[24%] rounded-md md:block lg:block xl:block 2xl:block hidden"
            src={foto1}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default InfoCards;
