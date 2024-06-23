import React, { useEffect } from "react";
import photo4 from "../assets/pastalar/pasta1.jpeg";
import photo5 from "../assets/pastalar/pasta2.jpeg";
import photo6 from "../assets/pastalar/pasta3.jpeg";
import photo7 from "../assets/pastalar/pasta4.jpeg";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div className="w-4/5 my-16 flex flex-col gap-16">
        <div className="flex flex-col gap-7 text-center">
          <h1 className="2xl:text-4xl xl:text-3xl lg:text-3xl md:text-2xl text-3xl">
            Bizimle İletişime Geçin
          </h1>
          <div className="flex flex-col gap-3 2xl:text-xl xl:text-lg lg:text-lg md:text-base">
            <p>Lütfen aşağıdaki bilgileri sorularınıza dahil edin..</p>
            <p>Bu, en kısa sürede bir fiyat teklifi almanızı sağlar:</p>
            <p>--Teslim almak istediğiniz tarih </p>
            <p>--Pasta boyutu veya ikramların miktarı </p>
            <p>--İçerik </p>
            <p>--Tasarım fikirleri </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="2xl:w-[60%] xl:w-[60%] lg:w-[65%] md:w-[80%] w-full flex flex-col gap-4">
            <h3 className="2xl:text-2xl xl:text-2xl lg:text-2xl md:text-lg text-lg text-center">
              Fiyat almak için formu doldurun
            </h3>
            <div className="hidden md:flex md:justify-between lg:flex lg:justify-between xl:flex xl:justify-between 2xl:flex 2xl:justify-between">
              <input
                className="border border-black w-[47%] py-2 pl-5"
                type="text"
                placeholder="İsim Soyisim *"
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
              placeholder="İsim Soyisim *"
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
              placeholder="Telefon Numarası *"
            />
            <textarea
              className="border border-black w-full pt-2 pl-5"
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Detaylar"
            ></textarea>
            <button className="max-w-max border border-black py-1 px-10 rounded-md">
              Gönder
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-center 2xl:text-lg xl:text-lg lg:text-lg md:text-base">
          <p>Batıkent Mahallesi Abdulkadir Aksu Bulvarı No : 56/D </p>
          <p>Şehitkamil/Gaziantep</p>
          <p>+90 538 320 77 97</p>
          <p>tugce_simsek2017@outlook.com</p>
        </div>
        <div className="w-full flex flex-col gap-10">
          <h3
            onClick={() =>
              window.open("https://www.instagram.com/operabaker/", "_blank")
            }
            className="2xl:text-3xl xl:text-2xl lg:text-2xl md:text-xl text-xl bg-white text-center hover:cursor-pointer"
          >
            Instagram Hesabımızı Takip Edin
          </h3>
          <div className="flex w-full justify-between">
            <img
              className="md:w-[24%] lg:w-[24%] xl:w-[24%] 2xl:w-[24%] w-[33%] rounded-md hover:cursor-pointer hover:opacity-70"
              src={photo4}
              alt=""
              onClick={() =>
                window.open("https://www.instagram.com/operabaker/", "_blank")
              }
            />
            <img
              className="md:w-[24%] lg:w-[24%] xl:w-[24%] 2xl:w-[24%] w-[33%] rounded-md hover:cursor-pointer hover:opacity-70"
              src={photo5}
              alt=""
              onClick={() =>
                window.open("https://www.instagram.com/operabaker/", "_blank")
              }
            />
            <img
              className="md:w-[24%] lg:w-[24%] xl:w-[24%] 2xl:w-[24%] w-[33%] rounded-md hover:cursor-pointer hover:opacity-70"
              src={photo6}
              alt=""
              onClick={() =>
                window.open("https://www.instagram.com/operabaker/", "_blank")
              }
            />
            <img
              className="w-[24%] rounded-md md:block lg:block xl:block 2xl:block hidden hover:cursor-pointer hover:opacity-70"
              src={photo7}
              alt=""
              onClick={() =>
                window.open("https://www.instagram.com/operabaker/", "_blank")
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
