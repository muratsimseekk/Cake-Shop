import React from "react";
import slider1 from "../../../assets/img1.jpg";
function Cards() {
  const viewButton = (e) => {
    e.preventDefault();
    console.log("tiklandi");
  };
  return (
    <>
      <div className="w-4/5 bg-red-200 md:block lg:block xl:block 2xl:block hidden">
        <div>
          <h3 className="tracking tracking-wider 2xl:text-2xl 2xl:py-10 xl:text-xl xl:py-7 lg:text-xl md:text-xl py-5">
            Our Valentines range ...
          </h3>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="flex flex-col gap-4 border w-[24%]">
            <div className=" w-full">
              <img src={slider1} alt="" />
            </div>
            <div className="flex flex-col gap-2 2xl:text-xl xl:text-lg">
              <h3>Valentines Treat Box</h3>
              <p>$16.00 </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 border w-[24%]">
            <div className=" w-full">
              <img src={slider1} alt="" />
            </div>
            <div className="flex flex-col gap-2 2xl:text-xl xl:text-lg">
              <h3>Valentines Treat Box</h3>
              <p>$16.00 </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 border w-[24%]">
            <div className=" w-full">
              <img src={slider1} alt="" />
            </div>
            <div className="flex flex-col gap-2 2xl:text-xl xl:text-lg">
              <h3>Valentines Treat Box</h3>
              <p>$16.00 </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 border w-[24%]">
            <div className=" w-full">
              <img src={slider1} alt="" />
            </div>
            <div className="flex flex-col gap-2 2xl:text-xl xl:text-lg">
              <h3>Valentines Treat Box</h3>
              <p>$16.00 </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-4 bg-slate-400 mt-10">
          <button
            type="button"
            onClick={(e) => viewButton(e)}
            className="bg-red-600 2xl:py-1 2xl:px-5 xl:py-1 xl:px-5 lg:py-1 lg:px-6 md:px-6 md:py-1 rounded-md shadow-md cursor-pointer "
          >
            View All
          </button>
        </div>
        <div className="bg-yellow-100 py-10 flex flex-col gap-4">
          <div className="flex justify-center gap-2">
            <button className="border hover:border-2 border-[#40695d] text-center text-lg py-[2px] w-52 rounded-md shadow-md cursor-pointer">
              Click & Collect
            </button>
            <button className="border hover:border-2 border-[#40695d] text-center text-lg py-[2px] w-52 rounded-md shadow-md cursor-pointer">
              Bespoke
            </button>
          </div>
          <div className="flex justify-center">
            <p className="">
              Luxury bespoke cakes and sweet treats , designed , created and
              served in Chorley , Lancashire.
            </p>
          </div>
        </div>
      </div>
      <div className="w-4/5 md:hidden lg:hidden xl:hidden 2xl:hidden  bg-red-300 text-center flex flex-col items-center gap-6">
        <h2 className="text-3xl ">Mothers Day at CAKE</h2>
        <p>Pre order for both collection in store and UK delivery</p>
        <button className="border w-[45%] py-2 rounded-md">Shop now</button>
        <div className="w-full flex flex-col gap-3 mt-6">
          <button className="border w-full py-2 rounded-md">
            Click & Collect
          </button>
          <button className="border w-full py-2 rounded-md">Bespoke</button>
        </div>
        <p>
          Luxury bespoke cakes and sweet treats , designed , created and served
          in Chorley , Lancashire.
        </p>
      </div>
    </>
  );
}

export default Cards;
