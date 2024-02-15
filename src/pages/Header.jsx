import React from "react";

import { FaArrowRightLong } from "react-icons/fa6";

function Header() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[100%]">
        <div className="flex items-center gap-3 bg-[#f7e4e3] justify-center py-3">
          <h3 className="font-architech text-[#40695d] text-xl ">
            SHOP OUR VALENTINES COLLECTION
          </h3>
          <FaArrowRightLong className="w-4 h-4 text-[#40695d]" />
        </div>
        <div className="flex justify-center items-center">
          <div className="bg-red-300 tracking-wider flex items-center justify-between gap-8 w-4/5 py-5">
            <div className="flex flex-col font-whisper bg-green-300">
              <h1 className="text-5xl">Opera Baker</h1>
            </div>
            <ul className="flex gap-6 bg-yellow-300">
              <li>HOME</li>
              <li>VALENTINES</li>
              <li>BESPOKE</li>
              <li>WEDDINGS</li>
              <li>ABOUT</li>
              <li>FAQ</li>
              <li>CONTACT</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
