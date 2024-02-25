import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

function Footer() {
  //TODO: ul-li ler icin button ve hover effect verilecek.
  return (
    <div className="w-full bg-[#f7e4e3] flex justify-center">
      <div className="w-4/5 bg-red-500 flex my-8">
        <div className="w-1/3 bg-green-300 flex flex-col gap-4">
          <div>
            <h3 className="text-xl">Navigation</h3>
          </div>
          <div>
            <ul className="flex flex-col gap-2 text-sm">
              <li>HOME</li>
              <li>VALENTINES</li>
              <li>BESPOKE</li>
              <li>WEDDINGS</li>
              <li>ABOUT</li>
              <li>FAQ</li>
              <li>CONTACT</li>
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
            <h3 className="text-xl">Information</h3>
          </div>
          <div className="">
            <ul className="flex flex-col gap-2 text-sm">
              <li>SEARCH</li>
              <li>CANCELLATION</li>
              <li>PRIVACY</li>
              <li>TERMS</li>
            </ul>
          </div>
        </div>
        <div className="w-1/3 bg-yellow-300 flex flex-col ">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl">Opera Baker</h3>
            <div className="text-sm flex flex-col gap-3">
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
          <div className="text-xl flex  gap-1">
            <FaFacebookF />
            <FaInstagram />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
