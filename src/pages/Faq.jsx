import React, { useState } from "react";
import { CiSquareCheck } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function Faq() {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);
  const [fifth, setFifth] = useState(false);

  const change1 = () => {
    setFirst(!first);
  };
  const change2 = () => {
    setSecond(!second);
  };
  const change3 = () => {
    setThird(!third);
  };
  const change4 = () => {
    setFourth(!fourth);
  };
  const change5 = () => {
    setFifth(!fifth);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-4/5  my-10 flex flex-col gap-20">
        <div className="flex flex-col gap-3">
          <h1 className="text-center 2xl:text-4xl xl:text-3xl lg:text-3xl md:text-2xl text-3xl my-4">
            FAQ{" "}
          </h1>
          <div className=" cursor-pointer">
            {first == false && (
              <div
                onClick={change1}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-8">
                  <CiSquareCheck className="text-4xl" />
                  <p className="2xl:text-xl xl:text-lg lg:text-lg md:text-base">
                    Do you make fondant or novelty cakes ?
                  </p>
                </div>
                <IoIosArrowDown className="text-2xl" />
              </div>
            )}
          </div>
          <div className=" cursor-pointer">
            {first == true && (
              <div className="flex flex-col gap-3">
                <div
                  onClick={change1}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-8">
                    <CiSquareCheck className="text-4xl" />
                    <p className="2xl:text-xl xl:text-lg lg:text-lg md:text-base">
                      Do you make fondant or novelty cakes ?
                    </p>
                  </div>
                  <IoIosArrowUp className="text-2xl" />
                </div>
                <p className="">No</p>
              </div>
            )}
          </div>
          <div className=" cursor-pointer">
            {second == false && (
              <div
                onClick={change2}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-8">
                  <CiSquareCheck className="text-4xl" />
                  <p className="2xl:text-xl xl:text-lg lg:text-lg md:text-base">
                    Do you make fondant or novelty cakes ?
                  </p>
                </div>
                <IoIosArrowDown className="text-2xl" />
              </div>
            )}
          </div>
          <div className=" cursor-pointer">
            {second == true && (
              <div className="flex flex-col gap-3">
                <div
                  onClick={change2}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-8">
                    <CiSquareCheck className="text-4xl" />
                    <p className="2xl:text-xl xl:text-lg lg:text-lg md:text-base">
                      Do you make fondant or novelty cakes ?
                    </p>
                  </div>
                  <IoIosArrowUp className="text-2xl" />
                </div>
                <p>No</p>
              </div>
            )}
          </div>
          <div className="bg-red-200 cursor-pointer">
            {third == false && (
              <div
                onClick={change3}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-8">
                  <CiSquareCheck className="text-4xl" />
                  <p className="2xl:text-xl xl:text-lg lg:text-lg md:text-base">
                    Do you make fondant or novelty cakes ?
                  </p>
                </div>
                <IoIosArrowDown className="text-2xl" />
              </div>
            )}
          </div>
          <div className="bg-red-200 cursor-pointer">
            {third == true && (
              <div className="flex flex-col gap-3">
                <div
                  onClick={change3}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-8">
                    <CiSquareCheck className="text-4xl" />
                    <p className="2xl:text-xl xl:text-lg lg:text-lg md:text-base">
                      Do you make fondant or novelty cakes ?
                    </p>
                  </div>
                  <IoIosArrowUp className="text-2xl" />
                </div>
                <p>No</p>
              </div>
            )}
          </div>
          <div className="bg-red-200 cursor-pointer">
            {fourth == false && (
              <div
                onClick={change4}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-8">
                  <CiSquareCheck className="text-4xl" />
                  <p className="2xl:text-xl xl:text-lg lg:text-lg md:text-base">
                    Do you make fondant or novelty cakes ?
                  </p>
                </div>
                <IoIosArrowDown className="text-2xl" />
              </div>
            )}
          </div>
          <div className="bg-red-200 cursor-pointer">
            {fourth == true && (
              <div className="flex flex-col gap-3">
                <div
                  onClick={change4}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-8">
                    <CiSquareCheck className="text-4xl" />
                    <p className="2xl:text-xl xl:text-lg lg:text-lg md:text-base">
                      Do you make fondant or novelty cakes ?
                    </p>
                  </div>
                  <IoIosArrowUp className="text-2xl" />
                </div>
                <p>No</p>
              </div>
            )}
          </div>
          <div className="bg-red-200 cursor-pointer">
            {fifth == false && (
              <div
                onClick={change5}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-8">
                  <CiSquareCheck className="text-4xl" />
                  <p className="2xl:text-xl xl:text-lg lg:text-lg md:text-base">
                    Do you make fondant or novelty cakes ?
                  </p>
                </div>
                <IoIosArrowDown className="text-2xl" />
              </div>
            )}
          </div>
          <div className="bg-red-200 cursor-pointer">
            {fifth == true && (
              <div className="flex flex-col gap-3">
                <div
                  onClick={change5}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-8">
                    <CiSquareCheck className="text-4xl" />
                    <p className="2xl:text-xl xl:text-lg lg:text-lg md:text-base">
                      Do you make fondant or novelty cakes ?
                    </p>
                  </div>
                  <IoIosArrowUp className="text-2xl" />
                </div>
                <p>No</p>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-6 items-center bg-rose-200">
          <h2 className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-2xl">
            GET IN TOUCH
          </h2>
          <p className="2xl:text-xl xl:text-lg lg:text-lg md:text-base">
            Any other questions ? Just send a message{" "}
          </p>
        </div>
        <div className="flex justify-center">
          <div className="2xl:w-[60%] xl:w-[60%] lg:w-[65%] md:w-[80%] w-full  bg-red-300 flex flex-col gap-4">
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
      </div>
    </div>
  );
}

export default Faq;
