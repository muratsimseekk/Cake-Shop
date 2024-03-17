import React from "react";

import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="2xl:w-full xl:w-full 2xl:flex xl:flex 2xl:justify-center xl:justify-center w-full flex justify-center">
      <div className="2xl:w-[100%] w-full">
        <div className="flex items-center gap-3 bg-[#f7e4e3] justify-center py-3">
          <h3 className="font-architech text-[#40695d] 2xl:text-2xl xl:text-2xl lg:text-xl hover:underline hover:cursor-pointer">
            SHOP OUR VALENTINES COLLECTION
          </h3>
          <FaArrowRightLong className="w-4 h-4 text-[#40695d]" />
        </div>
        <div className="2xl:flex xl:flex 2xl:justify-center xl:justify-center 2xl:items-center xl:items-center flex flex-col items-center">
          <div className="bg-red-300 tracking-wider  flex flex-col items-center gap-8 2xl:flex xl:flex 2xl:flex-row xl:flex-row 2xl:items-center xl:items-center 2xl:justify-between xl:justify-between 2xl:gap-8 2xl:w-4/5 xl:w-4/5 w-full py-5 xl:py-3">
            <div className="flex flex-col font-whisper bg-green-300">
              <Link to="/">
                <h1 className="2xl:text-6xl xl:text-5xl lg:text-6xl">
                  Opera Baker
                </h1>
              </Link>
            </div>
            <ul className="2xl:flex xl:flex xl:gap-6 2xl:gap-6 bg-yellow-300 2xl:text-2xl xl:text-lg lg:text-lg lg:flex lg:gap-12">
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
              <Link to="/about">
                <li>ABOUT</li>
              </Link>
              <Link to="/faq">
                <li>FAQ</li>
              </Link>
              <Link to="/contact">
                <li>CONTACT</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
