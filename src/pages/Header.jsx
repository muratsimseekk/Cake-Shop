import React from "react";

import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[100%]">
        <div className="flex items-center gap-3 bg-[#f7e4e3] justify-center py-3">
          <h3 className="font-architech text-[#40695d] text-2xl hover:underline hover:cursor-pointer">
            SHOP OUR VALENTINES COLLECTION
          </h3>
          <FaArrowRightLong className="w-4 h-4 text-[#40695d]" />
        </div>
        <div className="flex justify-center items-center">
          <div className="bg-red-300 tracking-wider flex items-center justify-between gap-8 w-4/5 py-5">
            <div className="flex flex-col font-whisper bg-green-300">
              <Link to="/">
                <h1 className="text-6xl ">Opera Baker</h1>
              </Link>
            </div>
            <ul className="flex gap-6 bg-yellow-300 text-xl">
              <Link to="/">
                <li>HOME</li>
              </Link>
              <Link to="/specialday">
                <li>VALENTINES</li>
              </Link>
              <Link to="/cookies">
                <li>BESPOKE</li>
              </Link>
              <Link to="/weddings">
                <li>WEDDINGS</li>
              </Link>
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
