import React from "react";

import photo1 from "../assets/weddings/wedding1.png";
import photo2 from "../assets/weddings/wedding2.png";
import photo3 from "../assets/weddings/wedding3.png";
import photo4 from "../assets/weddings/wedding4.png";
import photo5 from "../assets/weddings/wedding5.png";
import photo6 from "../assets/weddings/wedding6.png";
import photo7 from "../assets/weddings/wedding7.png";
import photo8 from "../assets/weddings/wedding8.png";

function Wedding() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-4/5 bg-yellow-300 my-14 flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <h2 className="2xl:text-4xl xl:text-3xl lg:text-3xl md:text-2xl text-center">
            Weddings
          </h2>
          <p className="2xl:text-2xl xl:text-xl lg:text-xl md:text-base text-center">
            For your perfect day,you deserve the perfect cake
          </p>
        </div>
        <div className="flex justify-between h-[900px]">
          <div className="w-[65%] h-full">
            <img
              className="w-full h-full object-fill rounded-md"
              src={photo1}
            />
          </div>
          <div className="w-[34%] flex flex-col justify-between">
            <img
              className="w-full h-[49%] object-fill rounded-md"
              src={photo2}
            />
            <img
              className="w-full h-[49%] object-fill rounded-md"
              src={photo3}
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 text-center items-center ">
          <h3 className="2xl:text-3xl xl:text-2xl lg:text-2xl md:text-xl">
            It's time to create something you've only ever dreamt of{" "}
          </h3>
          <p className="2xl:text-base xl:text-base lg:text-base md:text-[15px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            quia dolorum magnam aspernatur eos.
          </p>
          <p className="2xl:text-base xl:text-base lg:text-base md:text-[15px]">
            My Wedding Brochure will provide you with all the details you need
            to know .
          </p>
          <button className="px-5 py-1 max-w-max border border-rose-400 rounded-md">
            Download Brochure{" "}
          </button>
        </div>
        <div className="flex justify-between">
          <div className="w-[24%]">
            <img className="w-full rounded-md" src={photo4} />
          </div>
          <div className="w-[24%]">
            <img className="w-full rounded-md" src={photo5} />
          </div>
          <div className="w-[24%]">
            <img className="w-full rounded-md" src={photo6} />
          </div>
          <div className="w-[24%]">
            <img className="w-full rounded-md" src={photo7} />
          </div>
        </div>
        <div className="flex justify-between ">
          <div className="w-1/2 ">
            <img className="w-full rounded-md" src={photo8} />
          </div>
          <div className="w-1/2 flex justify-center items-center ">
            <div className="bg-red-300 w-4/5 flex flex-col gap-8">
              <h2 className="2xl:text-4xl xl:text-3xl lg:text-3xl md:text-2xl">
                Let's talk it over ...
              </h2>
              <div className="flex flex-col gap-4">
                <p className="2xl:text-lg xl:text-lg lg:text-lg md:text-[15px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  itaque dolor dolore enim doloribus eaque omnis, hic officia
                  deleniti fugiat fugit ea ullam unde pariatur eligendi quod
                  eius tenetur nostrum.
                </p>
                <p className="2xl:text-lg xl:text-lg lg:text-lg md:text-[15px]">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Repudiandae optio tempore architecto iste numquam sunt ipsa
                  adipisci enim, molestias nesciunt!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="2xl:w-[60%] xl:w-[60%] lg:w-[65%] md:w-[80%]  bg-red-300 flex flex-col gap-4">
            <h3 className="2xl:text-2xl xl:text-2xl lg:text-2xl md:text-lg">
              Make an enquiery
            </h3>
            <div className="flex justify-between">
              <input
                className="border border-black w-[47%] py-2 pl-5"
                type="text"
                placeholder="Name *"
              />
              <input
                className="border border-black w-[47%] py-2 pl-5"
                type="email"
                name=""
                id=""
                placeholder="E-mail *"
              />
            </div>
            <input
              className="border border-black w-full py-2 pl-5"
              type="tel"
              name=""
              id=""
              placeholder="Phone Number *"
            />
            <textarea
              className="border border-black w-full pt-2 pl-5"
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Comment"
            ></textarea>
            <button className="max-w-max border border-black py-1 px-10 rounded-md">
              Send
            </button>
          </div>
        </div>
        <div className="bg-blue-400 flex flex-col gap-2 text-center mt-9 text-lg">
          <p>30 Market Street , Adlinhton , Chorley,PR7 4HE</p>
          <p>123456789</p>
          <p>muratsimseekk@gmail.com</p>
        </div>
        <div className="w-full flex flex-col gap-10">
          <h3 className="2xl:text-3xl xl:text-2xl lg:text-2xl md:text-xl bg-red-400 text-center">
            Follow on instagram
          </h3>
          <div className="flex w-full justify-between">
            <img className="w-[24%]" src={photo4} alt="" />
            <img className="w-[24%]" src={photo5} alt="" />
            <img className="w-[24%]" src={photo6} alt="" />
            <img className="w-[24%]" src={photo7} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wedding;
