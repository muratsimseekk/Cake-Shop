import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineCopyright } from "react-icons/ai";

function Footer() {
  //TODO: ul-li ler icin button ve hover effect verilecek.
  return (
    <div className="w-full bg-[#f7e4e3] flex flex-col items-center justify-center">
      <div className="w-4/5 bg-red-500 flex my-8">
        <div className="w-1/3 bg-green-300 flex flex-col gap-4">
          <div>
            <h3 className="2xl:text-xl xl:text-xl lg:text-xl md:text-base">
              Navigation
            </h3>
          </div>
          <div>
            <ul className="flex flex-col gap-2  w-max 2xl:text-sm xl:text-sm lg:text-sm md:text-xs">
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
          <div className="flex flex-col gap-3 ">
            <h3>Subscribe</h3>
            <input
              type="email"
              name=""
              id=""
              placeholder="Email"
              className="py-1 px-2 w-4/5 border border-[#40695d] rounded-sm"
            />
          </div>
        </div>
        <div className="w-1/3 bg-indigo-300 flex flex-col gap-4">
          <div className="">
            <h3 className="2xl:text-xl xl:text-xl lg:text-xl md:text-base">
              Information
            </h3>
          </div>
          <div className="">
            <ul className="flex flex-col gap-2 2xl:text-sm xl:text-sm lg:text-sm md:text-xs w-max">
              <li className="hover:underline hover:cursor-pointer">SEARCH</li>
              <li className="hover:underline hover:cursor-pointer">
                CANCELLATION
              </li>
              <li className="hover:underline hover:cursor-pointer">PRIVACY</li>
              <li className="hover:underline hover:cursor-pointer">TERMS</li>
            </ul>
          </div>
        </div>
        <div className="w-1/3 bg-yellow-300 flex flex-col justify-between">
          <div className="flex flex-col gap-4">
            <h3 className="2xl:text-xl xl:text-xl lg:text-xl md:text-base">
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
          <div className=" flex justify-end gap-4 text-2xl mr-4">
            <FaFacebookF />
            <FaInstagram />
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
