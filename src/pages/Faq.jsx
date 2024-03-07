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
      <div className="w-4/5 bg-yellow-300 my-10 flex flex-col gap-20">
        <div className="flex flex-col gap-3">
          <h1 className="text-center text-4xl my-4">FAQ </h1>
          <div className="bg-red-200 cursor-pointer">
            {first == false && (
              <div
                onClick={change1}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-8">
                  <CiSquareCheck className="text-4xl" />
                  <p className="text-xl">
                    Do you make fondant or novelty cakes ?
                  </p>
                </div>
                <IoIosArrowDown className="text-2xl" />
              </div>
            )}
          </div>
          <div className="bg-red-200 cursor-pointer">
            {first == true && (
              <div className="flex flex-col">
                <div
                  onClick={change1}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-8">
                    <CiSquareCheck className="text-4xl" />
                    <p className="text-xl">
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
            {second == false && (
              <div
                onClick={change2}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-8">
                  <CiSquareCheck className="text-4xl" />
                  <p className="text-xl">
                    Do you make fondant or novelty cakes ?
                  </p>
                </div>
                <IoIosArrowDown className="text-2xl" />
              </div>
            )}
          </div>
          <div className="bg-red-200 cursor-pointer">
            {second == true && (
              <div className="flex flex-col">
                <div
                  onClick={change2}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-8">
                    <CiSquareCheck className="text-4xl" />
                    <p className="text-xl">
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
                  <p className="text-xl">
                    Do you make fondant or novelty cakes ?
                  </p>
                </div>
                <IoIosArrowDown className="text-2xl" />
              </div>
            )}
          </div>
          <div className="bg-red-200 cursor-pointer">
            {third == true && (
              <div className="flex flex-col">
                <div
                  onClick={change3}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-8">
                    <CiSquareCheck className="text-4xl" />
                    <p className="text-xl">
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
                  <p className="text-xl">
                    Do you make fondant or novelty cakes ?
                  </p>
                </div>
                <IoIosArrowDown className="text-2xl" />
              </div>
            )}
          </div>
          <div className="bg-red-200 cursor-pointer">
            {fourth == true && (
              <div className="flex flex-col">
                <div
                  onClick={change4}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-8">
                    <CiSquareCheck className="text-4xl" />
                    <p className="text-xl">
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
                  <p className="text-xl">
                    Do you make fondant or novelty cakes ?
                  </p>
                </div>
                <IoIosArrowDown className="text-2xl" />
              </div>
            )}
          </div>
          <div className="bg-red-200 cursor-pointer">
            {fifth == true && (
              <div className="flex flex-col">
                <div
                  onClick={change5}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-8">
                    <CiSquareCheck className="text-4xl" />
                    <p className="text-xl">
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
          <h2 className="text-4xl">GET IN TOUCH</h2>
          <p className="text-xl">Any other questions ? Just send a message </p>
        </div>
        <div className="flex justify-center">
          <div className="w-[60%] bg-red-300 flex flex-col gap-4">
            <h3 className="text-2xl">Make an enquiery</h3>
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
      </div>
    </div>
  );
}

export default Faq;
