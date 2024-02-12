import React from "react";
import foto1 from "../../../assets/img1.jpg";
import foto2 from "../../../assets/img2.jpg";
function InfoCards() {
  return (
    <div className="flex flex-col w-4/5 bg-red-300">
      <div className="flex w-full h-[450px] justify-center gap-8">
        <div className="w-1/2 bg-indigo-200 flex justify-center items-center">
          <div className="bg-green-400 w-2/3 h-5/6 px-4 flex flex-col gap-4">
            <h2 className="text-4xl">As featured in British VOGUE</h2>
            <p className="text-sm">
              Our Christmas Mini Cake featured in the British VOGUE DECEMBER
              2022 edition!
            </p>
          </div>
        </div>
        <div className="w-1/2">
          <img className="w-full h-full" src={foto1} alt="" />
        </div>
      </div>
      <div className="h-[350px] bg-blue-300 ">
        <div className="w-1/2 bg-slate-500">
          <img src="" alt="" />
        </div>
        <div className="w-1/2 bg-red-600"></div>
      </div>
      <div></div>
    </div>
  );
}

export default InfoCards;
