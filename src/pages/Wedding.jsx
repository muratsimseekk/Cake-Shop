import React, { useEffect } from "react";

import photo1 from "../assets/home/tasarim.jpeg";
import photo2 from "../assets/home/figurlu.jpg";
import photo3 from "../assets/home/cicekli.jpeg";

import pasta1 from "../assets/pastalar/pasta1.jpeg";
import pasta2 from "../assets/pastalar/pasta2.jpeg";
import pasta3 from "../assets/pastalar/pasta3.jpeg";
import pasta4 from "../assets/pastalar/pasta4.jpeg";
import pasta5 from "../assets/pastalar/pasta5.jpeg";
import pasta6 from "../assets/pastalar/pasta6.jpeg";
import pasta7 from "../assets/pastalar/pasta7.jpeg";
import pasta8 from "../assets/pastalar/pasta8.jpeg";

function Wedding() {
  // useEffect(() => {
  //   window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  // }, []);
  return (
    <div className="w-full flex justify-center">
      <div className="w-4/5 bg-yellow-300 my-14 flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <h2 className="2xl:text-4xl xl:text-3xl lg:text-3xl md:text-2xl text-3xl text-center">
            Pastalar
          </h2>
          <p className="2xl:text-2xl xl:text-xl lg:text-xl md:text-base text-center">
            Opera Baker'da en kaliteli malzemelerden üretilen, her dilime ayrı
            bir lezzet katan 1. sınıf butik pastaları keşfedin ve özel
            günlerinizi unutulmaz kılın!
          </p>
        </div>
        <div className="flex flex-col  md:flex md:flex-row md:justify-between md:h-[900px] lg:flex lg:flex-row lg:justify-between lg:h-[900px] xl:flex xl:flex-row xl:justify-between xl:h-[900px] 2xl:flex 2xl:flex-row 2xl:justify-between 2xl:h-[900px]">
          <div className="w-full md:w-[65%] lg:w-[65%] xl:w-[65%] 2xl:w-[65%] ">
            <img
              className="w-full h-full object-fill rounded-md"
              src={photo1}
            />
          </div>
          <div className=" flex  md:w-[34%] lg:w-[34%] xl:w-[34%] 2xl:w-[34%] md:flex  md:flex-col md:justify-between lg:flex lg:flex-col lg:justify-between xl:flex  xl:flex-col xl:justify-between 2xl:flex  2xl:flex-col 2xl:justify-between">
            <img
              className="w-1/2 md:w-full lg:w-full xl:w-full 2xl:w-full md:h-[49%] lg:h-[49%] xl:h-[49%] 2xl:h-[49%] object-fill rounded-md"
              src={photo2}
            />
            <img
              className="w-1/2 md:w-full lg:w-full xl:w-full 2xl:w-full md:h-[49%] lg:h-[49%] xl:h-[49%] 2xl:h-[49%] object-fill rounded-md"
              src={photo3}
            />
          </div>
        </div>
        <div className="flex flex-col gap-5 text-center items-center ">
          <h3 className="2xl:text-3xl xl:text-2xl lg:text-2xl md:text-xl text-2xl">
            Zevkinize ozel butik pastalari birlikte tasarlayalım.
          </h3>
          <p className="2xl:text-2xl xl:text-xl lg:text-base md:text-[15px]">
            Pasta Fiyatlarımız :
          </p>
          <p className="2xl:text-2xl xl:text-xl lg:text-base md:text-[15px]">
            Tek Kişilik : 180₺
          </p>
          <p className="2xl:text-2xl xl:text-xl lg:text-base md:text-[15px]">
            2 Kişilik : 370₺
          </p>
          <p className="2xl:text-2xl xl:text-xl lg:text-base md:text-[15px]">
            6 Kişilik : 650₺
          </p>
          <p className="2xl:text-2xl xl:text-xl lg:text-base md:text-[15px]">
            Figurlu Pastalar için lütfen bize ulaşın .
          </p>
        </div>
        <div className="2xl:flex 2xl:h-[757px] xl:h-[634px] lg:h-[511px] md:h-[388px]  2xl:flex-row 2xl:justify-between 2xl:flex-wrap xl:flex xl:flex-row xl:justify-between xl:flex-wrap lg:flex lg:flex-row lg:justify-between lg:flex-wrap md:flex md:flex-row md:justify-between md:flex-wrap flex flex-col items-center gap-y-5">
          <div className="w-full 2xl:h-[368px] xl:h-[307px] lg:h-[245px] md:h-[184px] h-[425px] rounded-md md:w-[24%] lg:w-[24%] xl:w-[24%] 2xl:w-[24%]">
            <img
              className="w-full h-full rounded-md object-fill"
              src={pasta1}
            />
          </div>
          <div className="w-full 2xl:h-[368px] xl:h-[307px] lg:h-[245px] md:h-[184px] h-[425px] rounded-md md:w-[24%] lg:w-[24%] xl:w-[24%] 2xl:w-[24%]">
            <img
              className="w-full 2xl:h-full rounded-md object-fill"
              src={pasta2}
            />
          </div>
          <div className="w-full 2xl:h-[368px] xl:h-[307px] lg:h-[245px] md:h-[184px] h-[425px] bg-red-300  md:w-[24%] lg:w-[24%] xl:w-[24%] 2xl:w-[24%]">
            <img
              className="w-full h-full rounded-md object-fill"
              src={pasta3}
            />
          </div>
          <div className="w-full 2xl:h-[368px] xl:h-[307px] lg:h-[245px] md:h-[184px] h-[425px] md:block lg:block xl:block 2xl:block md:w-[24%] lg:w-[24%] xl:w-[24%] 2xl:w-[24%]">
            <img
              className="w-full h-full rounded-md object-fill"
              src={pasta4}
            />
          </div>
          <div className="hidden 2xl:h-[368px] xl:h-[307px] lg:h-[245px] md:h-[184px] h-[425px] md:block lg:block xl:block 2xl:block md:w-[24%] lg:w-[24%] xl:w-[24%] 2xl:w-[24%]">
            <img className="w-full h-full rounded-md" src={pasta5} />
          </div>
          <div className="hidden 2xl:h-[368px] xl:h-[307px] lg:h-[245px] md:h-[184px] h-[425px] md:block lg:block xl:block 2xl:block md:w-[24%] lg:w-[24%] xl:w-[24%] 2xl:w-[24%]">
            <img className="w-full h-full rounded-md" src={pasta6} />
          </div>
          <div className="hidden 2xl:h-[368px] xl:h-[307px] lg:h-[245px] md:h-[184px] h-[425px] md:block lg:block xl:block 2xl:block md:w-[24%] lg:w-[24%] xl:w-[24%] 2xl:w-[24%]">
            <img className="w-full h-full rounded-md" src={pasta7} />
          </div>
          <div className="hidden 2xl:h-[368px] xl:h-[307px] lg:h-[245px] md:h-[184px] h-[425px] md:block lg:block xl:block 2xl:block md:w-[24%] lg:w-[24%] xl:w-[24%] 2xl:w-[24%]">
            <img className="w-full h-full rounded-md" src={pasta8} />
          </div>
        </div>
        <div className="flex flex-col gap-8  md:flex md:flex-row md:justify-between lg:flex lg:flex-row lg:justify-between xl:flex xl:flex-row xl:justify-between 2xl:flex 2xl:flex-row 2xl:justify-between">
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 ">
            <img className="w-full rounded-md" src={pasta8} />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 text-center md:text-start lg:text-start xl:text-start 2xl:text-start flex justify-center items-center ">
            <div className="bg-red-300 w-4/5 flex flex-col gap-8">
              <h2 className="2xl:text-4xl xl:text-3xl lg:text-3xl md:text-2xl text-2xl text-center">
                Bir sonraki pastanızı beraber tasarlayalım...
              </h2>
              <div className="flex flex-col gap-4">
                <p className="2xl:text-lg xl:text-lg lg:text-lg md:text-[15px] text-center">
                  Opera Baker'da, pastalarınızı kişiselleştirmenin keyfini
                  çıkarabilirsiniz. Her bir pasta, renk, yazı, figür gibi
                  çeşitli opsiyonları kullanarak tamamen size özel hale
                  getirilebilir. Sevdiklerinizin isimleriyle veya özel bir
                  mesajla donatılmış pastalarımızı tercih edebilir, istediğiniz
                  renkleri seçebilir ve üzerine hayal ettiğiniz figürleri
                  ekleyebilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-400 hidden md:flex md:flex-col lg:flex lg:flex-col xl:flex xl:flex-col 2xl:flex 2xl:flex-col gap-2 text-center mt-9 text-lg">
          <p>Abdulkadir Aksu Bulvarı,No:56/D Şehitkamil/Gaziantep</p>
          <p>Opera Baker</p>
        </div>
        <div className="w-full hidden md:flex md:flex-col lg:flex lg:flex-col xl:flex xl:flex-col 2xl:flex 2xl:flex-col gap-10">
          <h3
            onClick={() =>
              window.open("https://www.instagram.com/operabaker/", "_blank")
            }
            className="2xl:text-3xl xl:text-2xl lg:text-2xl md:text-xl text-xl bg-red-400 text-center hover:cursor-pointer"
          >
            Instagram hesabımızı Takip Edin
          </h3>
          <div
            onClick={() =>
              window.open("https://www.instagram.com/operabaker/", "_blank")
            }
            className="flex w-full justify-between"
          >
            <img
              className="md:w-[24%] lg:w-[24%] xl:w-[24%] 2xl:w-[24%] w-[33%] rounded-md hover:cursor-pointer hover:opacity-70"
              src={pasta1}
              alt=""
            />
            <img
              className="md:w-[24%] lg:w-[24%] xl:w-[24%] 2xl:w-[24%] w-[33%] rounded-md hover:cursor-pointer hover:opacity-70"
              src={pasta2}
              alt=""
            />
            <img
              className="md:w-[24%] lg:w-[24%] xl:w-[24%] 2xl:w-[24%] w-[33%] rounded-md hover:cursor-pointer hover:opacity-70"
              src={pasta3}
              alt=""
            />
            <img
              className="md:w-[24%] lg:w-[24%] xl:w-[24%] 2xl:w-[24%] w-[33%] rounded-md hover:cursor-pointer hover:opacity-70"
              src={pasta4}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wedding;
