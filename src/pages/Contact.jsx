import React, { useEffect } from "react";
import photo4 from "../assets/weddings/wedding4.png";
import photo5 from "../assets/weddings/wedding5.png";
import photo6 from "../assets/weddings/wedding6.png";
import photo7 from "../assets/weddings/wedding7.png";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);
  return (
    <div className="w-full flex justify-center">
      <div className="w-4/5 my-16 flex flex-col gap-16">
        <div className="flex flex-col gap-7 text-center">
          <h1 className="2xl:text-4xl xl:text-3xl lg:text-3xl md:text-2xl text-3xl">
            Get In Touch
          </h1>
          <div className="flex flex-col gap-3 2xl:text-xl xl:text-lg lg:text-lg md:text-base">
            <p>Please ensure you include the following in your enqueries .</p>
            <p>This helps to ensure you get a quote as quick as possible:</p>
            <p>--The date you would like to collect </p>
            <p>--Cake size or quantity of treats </p>
            <p>--Flavours </p>
            <p>--Design ideas and any inspiration</p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="2xl:w-[60%] xl:w-[60%] lg:w-[65%] md:w-[80%] w-full flex flex-col gap-4">
            <h3 className="2xl:text-2xl xl:text-2xl lg:text-2xl md:text-lg text-lg">
              Make an enquiery
            </h3>
            <div className="hidden md:flex md:justify-between lg:flex lg:justify-between xl:flex xl:justify-between 2xl:flex 2xl:justify-between">
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
              className="block md:hidden lg:hidden xl:hidden 2xl:hidden border border-black w-full py-2 pl-5"
              type="text"
              placeholder="Name *"
            />
            <input
              className="block md:hidden lg:hidden xl:hidden 2xl:hidden border border-black w-full py-2 pl-5"
              type="email"
              name=""
              id=""
              placeholder="E-mail *"
            />

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
        <div className="flex flex-col gap-2 text-center 2xl:text-lg xl:text-lg lg:text-lg md:text-base text-sm">
          <p>30 Market Street ,Adlinghton , Chorley , PR7 4HE</p>
          <p>01257 781782</p>
          <p>muratsimseekk@gmail.com</p>
        </div>
        <div className="w-full flex flex-col gap-10">
          <h3 className="2xl:text-3xl xl:text-2xl lg:text-2xl md:text-xl text-xl text-center">
            Follow on instagram
          </h3>
          <div className="flex w-full justify-between">
            <img
              className="md:w-[24%] lg:w-[24%] xl:w-[24%] 2xl:w-[24%] w-[33%] rounded-md"
              src={photo4}
              alt=""
            />
            <img
              className="md:w-[24%] lg:w-[24%] xl:w-[24%] 2xl:w-[24%] w-[33%] rounded-md"
              src={photo5}
              alt=""
            />
            <img
              className="md:w-[24%] lg:w-[24%] xl:w-[24%] 2xl:w-[24%] w-[33%] rounded-md"
              src={photo6}
              alt=""
            />
            <img
              className="w-[24%] rounded-md md:block lg:block xl:block 2xl:block hidden"
              src={photo7}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
