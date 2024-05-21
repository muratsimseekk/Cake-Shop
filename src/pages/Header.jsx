import React, { useState } from "react";

import { FaArrowRightLong } from "react-icons/fa6";
import { CiMenuBurger } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { GiCakeSlice } from "react-icons/gi";

function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <div className="2xl:w-full xl:w-full 2xl:flex xl:flex 2xl:justify-center xl:justify-center w-full flex justify-center">
      <div className="2xl:w-[100%] w-full">
        <div className="flex items-center gap-3  justify-center py-3 bg-[#fff3ed]">
          <Link to="faq">
            <h3 className="  font-architech text-[#0f3227] 2xl:text-2xl xl:text-2xl lg:text-xl md:text-lg  hover:underline hover:cursor-pointer">
              ENFES TATLILARIMIZA GÖZ ATIN
            </h3>
          </Link>
          <FaArrowRightLong className="w-4 h-4 text-[#40695d]" />
        </div>
        <div className="header bg-white 2xl:flex xl:flex 2xl:justify-center xl:justify-center 2xl:items-center xl:items-center flex flex-col items-center">
          <div className=" tracking-wider  flex flex-col items-center gap-8 2xl:flex xl:flex 2xl:flex-row xl:flex-row 2xl:items-center xl:items-center 2xl:justify-between xl:justify-between 2xl:gap-8 2xl:w-4/5 xl:w-4/5 w-full py-5 xl:py-3">
            <div className="flex items-center w-full md:hidden lg:hidden xl:hidden 2xl:hidden justify-between px-2 font-whisper ">
              <CiMenuBurger onClick={() => setMenu(!menu)} size={"28px"} />
              <Link to="/">
                <h1 className="2xl:text-6xl xl:text-5xl lg:text-6xl md:text-5xl text-[42px]">
                  Opera Baker
                </h1>
              </Link>
              <Link to="/weddings">
                <GiCakeSlice size={"26px"} />
              </Link>
            </div>
            <div className=" md:block lg:block xl:block 2xl:block hidden font-whisper">
              <Link to="/">
                <h1 className="2xl:text-6xl xl:text-5xl lg:text-6xl md:text-5xl text-[42px]">
                  Opera Baker
                </h1>
              </Link>
            </div>
            <ul className="2xl:flex xl:flex xl:gap-6 2xl:gap-6 hidden 2xl:text-xl xl:text-lg lg:text-lg lg:flex lg:gap-12 md:flex md:gap-6 ">
              <Link to="/">
                <li>ANASAYFA</li>
              </Link>
              <Link to="/specialday">
                <li>ÇİKOLATA</li>
              </Link>
              <Link to="/cookies">
                <li>KURABİYE</li>
              </Link>
              <Link to="/weddings">
                <li>PASTA</li>
              </Link>
              <Link to="/faq">
                <li>TATLILAR</li>
              </Link>
              <Link to="/about">
                <li>HAKKIMIZDA</li>
              </Link>

              <Link to="/contact">
                <li>İLETİŞİM</li>
              </Link>
            </ul>
            {menu && (
              <ul className="flex flex-col gap-4 md:hidden lg:hidden xl:hidden 2xl:hidden  text-center">
                <Link onClick={() => setMenu(false)} to="/">
                  <li>ANASAYFA</li>
                </Link>
                <Link onClick={() => setMenu(false)} to="/specialday">
                  <li>ÇİKOLATA</li>
                </Link>
                <Link onClick={() => setMenu(false)} to="/cookies">
                  <li>KURABİYE</li>
                </Link>
                <Link onClick={() => setMenu(false)} to="/weddings">
                  <li>PASTA</li>
                </Link>
                <Link onClick={() => setMenu(false)} to="/faq">
                  <li>TATLILAR</li>
                </Link>
                <Link onClick={() => setMenu(false)} to="/about">
                  <li>HAKKIMIZDA</li>
                </Link>

                <Link onClick={() => setMenu(false)} to="/contact">
                  <li>İLETİŞİM</li>
                </Link>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
