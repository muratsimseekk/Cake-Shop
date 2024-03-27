import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineCopyright } from "react-icons/ai";

function Footer() {
  //TODO: ul-li ler icin button ve hover effect verilecek.
  return (
    <div className="w-full bg-[#f7e4e3] flex flex-col items-center justify-center">
      <div className="w-4/5  md:flex md:flex-row lg:flex lg:flex-row xl:flex xl:flex-row 2xl:flex 2xl:flex-row flex flex-col md:gap-0 lg:gap-0 xl:gap-0 2xl:gap-0 gap-12 my-8">
        <div className="md:w-1/3 lg:w-1/3 xl:w-1/3 2xl:w-1/3 w-full flex flex-col gap-4">
          <div>
            <h3 className="2xl:text-xl xl:text-xl lg:text-xl md:text-base text-xl">
              Navigation
            </h3>
          </div>
          <div>
            <ul className="md:flex md:flex-col md:gap-2 lg:flex lg:flex-col lg:gap-2 xl:flex xl:flex-col xl:gap-2 2xl:flex 2xl:flex-col 2xl:gap-2  flex flex-col gap-3  w-max 2xl:text-sm xl:text-sm lg:text-sm md:text-xs">
              <li className="hover:underline hover:cursor-pointer">HOME</li>
              <li className="hover:underline hover:cursor-pointer">
                VALENTINES
              </li>
              <li className="hover:underline hover:cursor-pointer">BESPOKE</li>
              <li className="hover:underline hover:cursor-pointer">WEDDINGS</li>
              <li className="hover:underline hover:cursor-pointer">ABOUT</li>
              <li className="hover:underline hover:cursor-pointer">FAQ</li>
              <li className="hover:underline hover:cursor-pointer">CONTACT</li>
            </ul>
          </div>
        </div>
        <div className="md:w-1/3 lg:w-1/3 xl:w-1/3 2xl:w-1/3 w-full bg-indigo-300 flex flex-col gap-4">
          <div className="">
            <h3 className="2xl:text-xl xl:text-xl lg:text-xl md:text-base text-xl">
              Information
            </h3>
          </div>
          <div className="">
            <ul className="md:flex md:flex-col md:gap-2 lg:flex lg:flex-col lg:gap-2 xl:flex xl:flex-col xl:gap-2 2xl:flex 2xl:flex-col 2xl:gap-2  flex flex-col gap-3  w-max 2xl:text-sm xl:text-sm lg:text-sm md:text-xs">
              <li className="hover:underline hover:cursor-pointer">SEARCH</li>
              <li className="hover:underline hover:cursor-pointer">
                CANCELLATION
              </li>
              <li className="hover:underline hover:cursor-pointer">PRIVACY</li>
              <li className="hover:underline hover:cursor-pointer">TERMS</li>
            </ul>
          </div>
        </div>
        <div className="md:w-1/3 lg:w-1/3 xl:w-1/3 2xl:w-1/3 w-full  flex flex-col justify-between gap-6">
          <div className="flex flex-col gap-4">
            <h3 className="2xl:text-xl xl:text-xl lg:text-xl md:text-base text-xl">
              Opera Baker
            </h3>
            <div className="2xl:text-sm xl:text-sm lg:text-sm md:text-xs flex flex-col gap-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                corrupti autem nobis doloremque aut veniam, sequi iusto ducimus
                dolores illo, temporibus veritatis sint optio quas non esse
                maxime est odio.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non,
                perferendis.
              </p>
            </div>
          </div>
          <div className=" flex justify-center gap-8 md:flex md:flex-row md:gap-4 md:mr-4 md:justify-end lg:flex lg:flex-row lg:gap-4 lg:mr-4 lg:justify-end xl:flex xl:flex-row xl:gap-4 xl:mr-4 xl:justify-end 2xl:flex 2xl:flex-row 2xl:gap-4 2xl:mr-4 2xl:justify-end">
            <FaFacebookF size={"30px"} />
            <FaInstagram size={"30px"} />
          </div>
        </div>
      </div>
      <div className="border-t-2 w-full">
        <div className="flex items-center gap-2 my-4  justify-center">
          <AiOutlineCopyright />
          <p>2024 , Opera Baker</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
