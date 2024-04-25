import React, { useState } from "react";
import foto1 from "../../../assets/home/figurlu.jpg";
import foto2 from "../../../assets/home/ikiboyut.jpeg";
import yazili from "../../../assets/home/yazili.jpeg";
import cake1 from "../../../assets/cakes/cake1.jpeg";
import cake2 from "../../../assets/cakes/cake2.jpeg";
import cake3 from "../../../assets/cakes/cake3.jpeg";
import cake4 from "../../../assets/cakes/cake4.jpeg";

import tasarim from "../../../assets/home/tasarim.jpeg";

import store from "../../../assets/outside.jpg";
import { Link } from "react-router-dom";
function InfoCards() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState([]);

  const redirectToLocation = () => {
    // Belirli bir koordinat veya adres bilgisi
    const destination = "37.0735141,37.3405707"; // Örnek: "37.7749,-122.4194"

    // Google Haritalar URL'sini oluştur
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;

    // Yeni pencerede Google Haritalar'ı açan kod
    window.open(mapsUrl, "_blank");
  };

  //TODO: img ler map ile yazdiriliacak
  return (
    <div className="flex flex-col w-4/5 bg-300 gap-20">
      <div className="hidden md:flex md:w-full  md:justify-center lg:flex lg:w-full  lg:justify-center xl:flex xl:w-full  xl:justify-center 2xl:flex 2xl:w-full  2xl:justify-center">
        <div className="w-3/5  flex justify-end items-center">
          <div className=" w-[90%] h-5/6 px-10 md:px-4 flex flex-col items-end gap-8 text-end">
            <h2 className="2xl:text-5xl xl:text-4xl lg:text-4xl md:text-2xl">
              Şeker Hamurlu Pastalar
            </h2>

            <p className=" 2xl:text-lg xl:text-lg lg:text-xl md:text-base ">
              Özel figürlerle süslenmiş ya da kişiselleştirilmiş yazılarla
              donatılmış şeker hamurlu pastalarımız, sizin isteğiniz
              doğrultusunda tasarlanıyor.
            </p>
            <p className="2xl:text-lg xl:text-lg lg:text-xl md:text-base">
              Opera Baker'ın kalitesi ve özeniyle hazırlanan bu pastalar, özel
              günlerinizi daha da unutulmaz kılacak.
            </p>
            <Link className="w-full" to="/weddings">
              <button className="border w-[26.5%] md:w-[56%] md:text-base py-1 text-lg shadow-md rounded-md border-blue-300">
                Daha Fazla
              </button>
            </Link>
          </div>
        </div>
        <div className="w-1/2 flex justify-end">
          <img
            className="2xl:w-[450px] xl:w-[400px]  rounded-md"
            src={foto1}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col gap-10 md:hidden lg:hidden xl:hidden 2xl:hidden">
        <div className="w-full ">
          <img className="rounded-md" src={foto1} alt="" />
        </div>
        <div className="w-full bg-yellow-100 flex  justify-center py-4">
          <div className="flex flex-col text-center w-[90%] bg-red-100 gap-6">
            <h2 className=" text-xl">Şeker Hamurlu Pastalar</h2>

            <p className="text-sm ">
              Özel figürlerle süslenmiş ya da kişiselleştirilmiş yazılarla
              donatılmış şeker hamurlu pastalarımız, sizin isteğiniz
              doğrultusunda tasarlanıyor.
            </p>
            <p className="text-sm">
              Opera Baker'ın kalitesi ve özeniyle hazırlanan bu pastalar, özel
              günlerinizi daha da unutulmaz kılacak.
            </p>
            <Link to="/weddings">
              <button className="border  w-full py-1 text-sm shadow-md rounded-md border-blue-300">
                Daha Fazla
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className=" md:flex md:items-center lg:flex lg:items-center xl:flex xl:items-center 2xl:flex 2xl:items-center hidden">
        <div className="w-[45%] h-full  flex ">
          <img className="h-full  md:w-[400px] rounded-md" src={foto2} alt="" />
        </div>
        <div className="w-[55%] h-4/5 px-10">
          <div className="flex flex-col gap-8">
            <h2 className="2xl:text-5xl xl:text-4xl lg:text-4xl md:text-2xl">
              Iki boyutlu pastalar
            </h2>
            <p className="2xl:text-lg xl:text-lg lg:text-xl md:text-base">
              Opera Baker, özel günlerinizi renklendirmek için 2 boyutlu
              pastalarıyla burada! <br /> İster doğum günleri için sevimli
              hayvan figürleri, ister düğünler için romantik temalar,
              pastalarımızı isteğinize göre tasarlayabiliriz.
            </p>

            <p className="2xl:text-lg xl:text-lg lg:text-xl md:text-base">
              Siz hayal edin, biz yapalım!
            </p>
            <Link className="w-full" to="/weddings">
              <button className="border w-[26.5%] md:w-[56%] md:text-base py-1 text-lg shadow-md rounded-md border-blue-300">
                Daha Fazla
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className=" md:hidden lg:hidden xl:hidden 2xl:hidden w-full flex flex-col gap-10 ">
        <div className="w-full">
          <img className=" rounded-md" src={foto2} alt="" />
        </div>
        <div className="w-full flex justify-center text-center ">
          <div className="flex flex-col w-[90%] items-center bg-indigo-100 gap-6">
            <h2 className="text-xl">Iki boyutlu pastalar</h2>
            <p className="text-sm">
              Opera Baker, özel günlerinizi renklendirmek için 2 boyutlu
              pastalarıyla burada! <br /> İster doğum günleri için sevimli
              hayvan figürleri, ister düğünler için romantik temalar,
              pastalarımızı isteğinize göre tasarlayabiliriz.
            </p>

            <p className="text-sm">Siz hayal edin, biz yapalım!</p>
            <Link className="w-full" to="/weddings">
              <button className="border w-full py-1 text-sm shadow-md rounded-md border-blue-300">
                Daha Fazla
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden md:flex md:w-full  md:justify-center lg:flex lg:w-full  lg:justify-center xl:flex xl:w-full  xl:justify-center 2xl:flex 2xl:w-full  2xl:justify-center">
        <div className="w-3/5  flex justify-end items-center">
          <div className=" w-[90%] h-5/6 px-10 md:px-4 flex flex-col items-end gap-8 text-end">
            <h2 className="2xl:text-5xl xl:text-4xl lg:text-4xl md:text-2xl">
              Yazılı Pastalar
            </h2>

            <p className=" 2xl:text-lg xl:text-lg lg:text-xl md:text-base ">
              Opera Baker'ın yazılı pastalarıyla özel günlerinize dokunuş katın!
            </p>
            <p className="2xl:text-lg xl:text-lg lg:text-xl md:text-base">
              İster sevdiklerinizin isimleriyle, ister unutulmaz bir mesajla
              kişiselleştirin. Pastanızın üzerine eklenecek yazılar tamamen
              sizin isteğinize bağlı. Ayrıca, renk seçimini de size bırakıyoruz!
            </p>
            <p className="2xl:text-lg xl:text-lg lg:text-xl md:text-base">
              En özel günleriniz için Opera Baker'da size özel bir lezzet
              deneyimi sizi bekliyor.
            </p>
            <Link className="w-full" to="/weddings">
              <button className="border w-[26.5%] md:w-[56%] md:text-base py-1 text-lg shadow-md rounded-md border-blue-300">
                Daha Fazla
              </button>
            </Link>
          </div>
        </div>
        <div className="w-1/2 flex justify-end">
          <img
            className="2xl:w-[450px] xl:w-[400px]  rounded-md"
            src={yazili}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col gap-10 md:hidden lg:hidden xl:hidden 2xl:hidden">
        <div className="w-full ">
          <img className="rounded-md" src={yazili} alt="" />
        </div>
        <div className="w-full bg-yellow-100 flex  justify-center ">
          <div className="flex flex-col text-center w-[90%] bg-red-100 gap-6 ">
            <h2 className="text-xl">Yazılı Pastalar </h2>
            <p className=" text-sm  ">
              Opera Baker'ın yazılı pastalarıyla özel günlerinize dokunuş katın!
            </p>
            <p className="text-sm ">
              İster sevdiklerinizin isimleriyle, ister unutulmaz bir mesajla
              kişiselleştirin. Pastanızın üzerine eklenecek yazılar tamamen
              sizin isteğinize bağlı. Ayrıca, renk seçimini de size bırakıyoruz!
            </p>
            <p className="text-sm">
              En özel günleriniz için Opera Baker'da size özel bir lezzet
              deneyimi sizi bekliyor.
            </p>
            <Link className="w-full" to="/weddings">
              <button className="border w-full py-1 text-sm shadow-md rounded-md border-blue-300">
                Daha Fazla
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className=" md:flex md:items-center lg:flex lg:items-center xl:flex xl:items-center 2xl:flex 2xl:items-center hidden">
        <div className="w-[45%] h-full  flex ">
          <img
            className="h-full  md:w-[400px] rounded-md"
            src={tasarim}
            alt=""
          />
        </div>
        <div className="w-[55%] h-4/5 px-10">
          <div className="flex flex-col gap-6">
            <h2 className="2xl:text-5xl xl:text-4xl lg:text-4xl md:text-2xl">
              Tasarım Pastalar
            </h2>
            <p className="2xl:text-lg xl:text-lg lg:text-xl md:text-base">
              Opera Baker'ın tasarım pastaları, modern estetiği ve sıradışı
              detaylarıyla özel günlerinizi unutulmaz kılıyor.
            </p>
            <p className="2xl:text-lg xl:text-lg lg:text-xl md:text-base">
              Her bir pasta, özenle seçilmiş malzemeler ve ustalıkla işlenmiş
              tasarımlarıyla göz dolduruyor. Opera Baker, her diliminde
              benzersiz bir lezzet ve estetik sunarak müşterilerine unutulmaz
              deneyimler yaşatmayı hedefliyor.
            </p>
            <p className="2xl:text-lg xl:text-lg lg:text-xl md:text-base">
              Sizin için özel tasarlanmış pastalarımızla, en özel günlerinizi
              renklendirin ve sıradışı bir lezzet yolculuğuna çıkın.
            </p>
            <Link className="w-full" to="/weddings">
              <button className="border w-[26.5%] md:w-[56%] md:text-base py-1 text-lg shadow-md rounded-md border-blue-300">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className=" md:hidden lg:hidden xl:hidden 2xl:hidden w-full flex flex-col gap-10 ">
        <div className="w-full">
          <img className=" rounded-md" src={tasarim} alt="" />
        </div>
        <div className="w-full flex justify-center text-center">
          <div className="flex flex-col w-[90%] items-center bg-indigo-100 gap-6">
            <h2 className="text-xl">Tasarım Pastalar </h2>
            <p className=" text-sm  ">
              Opera Baker'ın tasarım pastaları, modern estetiği ve sıradışı
              detaylarıyla özel günlerinizi unutulmaz kılıyor.
            </p>
            <p className="text-sm ">
              Her bir pasta, özenle seçilmiş malzemeler ve ustalıkla işlenmiş
              tasarımlarıyla göz dolduruyor. Opera Baker, her diliminde
              benzersiz bir lezzet ve estetik sunarak müşterilerine unutulmaz
              deneyimler yaşatmayı hedefliyor.
            </p>
            <p className="text-sm">
              Sizin için özel tasarlanmış pastalarımızla, en özel günlerinizi
              renklendirin ve sıradışı bir lezzet yolculuğuna çıkın.
            </p>
            <Link className="w-full" to="/weddings">
              <button className="border w-full py-1 text-sm shadow-md rounded-md border-blue-300">
                Daha Fazla
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="md:hidden lg:hidden xl:hidden 2xl:hidden w-full flex  ">
        <div className="w-full flex flex-col items-center gap-10">
          <div className="w-full ">
            <img className="rounded-md w-full" src={store} alt="" />
          </div>
          <div className=" w-[90%] flex flex-col items-center gap-4 text-center">
            <h2 className="2xl:text-5xl xl:text-4xl lg:text-4xl md:text-2xl text-2xl">
              Pastanemizi ziyaret edin
            </h2>
            <div className="flex text-lg md:text-base flex-col gap-2">
              <p>
                Batıkent Mah. Abdulkadir Aksu Blv. No:56/D Şehitkamil/Gaziantep
              </p>
              <p>Çalışma Saatlerimiz:</p>
              <p>Pazartesi 09:00 - 21:30</p>
              <p>Salı 09:00 - 21:30</p>
              <p>Çarşamba 09:00 - 21:30</p>
              <p>Perşembe 09:00 - 21:30</p>
              <p>Cuma 09:00 - 21:30</p>
              <p>Cumartesi 09:00 - 21:30</p>
              <p>Pazar 09:00 - 21:30</p>
            </div>
            <button
              onClick={redirectToLocation}
              className="border 2xl:text-lg xl:text-lg lg:text-lg md:text-base 2xl:w-1/3 xl:w-1/3 lg:w-1/3 md:w-[45%] w-full py-1.5 rounded-md shadow"
            >
              Yol Tarifi
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-10">
        <h3
          onClick={() =>
            window.open("https://www.instagram.com/operabaker/", "_blank")
          }
          className="2xl:text-3xl xl:text-2xl lg:text-2xl md:text-xl text-xl bg-red-400 text-center hover:cursor-pointer"
        >
          Instagram Hesabımızı Takip Edin
        </h3>
        <div className="flex w-full justify-between">
          <img
            className="md:w-[24%] lg:w-[24%] xl:w-[24%] 2xl:w-[24%] w-[33%] rounded-md hover:cursor-pointer hover:opacity-70"
            src={cake1}
            alt=""
            onClick={() =>
              window.open("https://www.instagram.com/operabaker/", "_blank")
            }
          />
          <img
            className="md:w-[24%] lg:w-[24%] xl:w-[24%] 2xl:w-[24%] w-[33%] rounded-md hover:cursor-pointer hover:opacity-70"
            src={cake2}
            alt=""
            onClick={() =>
              window.open("https://www.instagram.com/operabaker/", "_blank")
            }
          />
          <img
            className="md:w-[24%] lg:w-[24%] xl:w-[24%] 2xl:w-[24%] w-[33%] rounded-md hover:cursor-pointer hover:opacity-70"
            src={cake3}
            alt=""
            onClick={() =>
              window.open("https://www.instagram.com/operabaker/", "_blank")
            }
          />
          <img
            className="w-[24%] rounded-md md:block lg:block xl:block 2xl:block hidden hover:cursor-pointer hover:opacity-70"
            src={cake4}
            alt=""
            onClick={() =>
              window.open("https://www.instagram.com/operabaker/", "_blank")
            }
          />
        </div>
      </div>
    </div>
  );
}

export default InfoCards;
