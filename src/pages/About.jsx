import React, { useEffect } from "react";
import photo1 from "../assets/about/about1.png";
import profil from "../assets/profil.jpg";

import photo4 from "../assets/pastalar/pasta2.jpeg";
import photo5 from "../assets/pastalar/pasta3.jpeg";
import photo6 from "../assets/pastalar/pasta4.jpeg";
import photo7 from "../assets/pastalar/pasta5.jpeg";

import store from "../assets/outside.jpg";
function About() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);
  const redirectToLocation = () => {
    // Belirli bir koordinat veya adres bilgisi
    const destination = "37.0735141,37.3405707"; // Örnek: "37.7749,-122.4194"

    // Google Haritalar URL'sini oluştur
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;

    // Yeni pencerede Google Haritalar'ı açan kod
    window.open(mapsUrl, "_blank");
  };
  return (
    <div className="w-full flex justify-center">
      <div className="w-4/5 flex flex-col gap-12 my-14">
        <h1 className="2xl:text-4xl xl:text-3xl lg:text-3xl md:text-2xl text-3xl  text-center ">
          Hakkında
        </h1>
        <div className="flex flex-col gap-16">
          <div className=" md:flex md:flex-row md:justify-between lg:flex lg:flex-row lg:justify-between xl:flex xl:flex-row xl:justify-between 2xl:flex 2xl:flex-row 2xl:justify-between">
            <div className=" w-full md:flex md:flex-row md:w-[55%] lg:flex lg:flex-row lg:w-[55%] xl:flex xl:flex-row xl:w-[55%] 2xl:flex 2xl:flex-row 2xl:w-[55%]">
              <img className="w-full" src={profil} />
            </div>
            <div className="md:w-[45%] lg:w-[45%] xl:w-[45%] 2xl:w-[45%] w-[85%]  m-auto md:flex md:flex-row md:justify-between md:items-center ">
              <div className="flex flex-col gap-5 2xl:px-8 xl:px-8 lg:px-8 md:px-4 py-5 text-center">
                <h2 className="2xl:text-3xl xl:text-2xl lg:text-2xl md:text-xl text-3xl">
                  Tuğçe Şimşek
                </h2>
                <p className="2xl:text-lg xl:text-lg lg:text-lg md:text-[15px]">
                  Ben, çocukluğundan beri kendi kendini yetiştirmiş ve yetişkin
                  olduktan sonra akademik eğitimini tamamlamış bir çikolata ve
                  pasta tasarımcısıyım! Pişirme tutkum, ailem ve arkadaşlarım
                  için kekler ve ikramlıklar hazırlamakla başladı ve bu süreç,
                  bugünkü Opera Baker'ın temellerini attı .
                </p>
                <p className="2xl:text-lg xl:text-lg lg:text-lg md:text-[15px]">
                  Kişilerin zevklerine ve hayal dünyalarındaki renkli fikirlere
                  göre tasarım pastaları yapmayı çok seviyorum. Her pastayı
                  yaparken ufkum daha da genişliyor ve her geçen gün kendimi
                  geliştirme fırsatı buluyorum.
                </p>

                <p className="2xl:text-lg xl:text-lg lg:text-lg md:text-[15px]">
                  Butik pastalar, tuzlu ve şekerli kurabiyeler, tatlılar gibi
                  özel lezzetlerle dolu bir menü sunuyoruz. Ayrıca, paket servis
                  tezgahımızda ikramlar, içecekler ve hediyeler de
                  bulunmaktadır. Her türlü özel durum için güzel tasarlanmış
                  kekler ve ikramlar için ısmarlama kek hizmetimiz de mevcuttur.
                </p>
                <p className="2xl:text-lg xl:text-lg lg:text-lg md:text-[15px]">
                  Lezzetleri tatmak için davetlisiniz :)
                </p>
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-8 w-full md:flex md:flex-row md:justify-end md:text-end lg:flex lg:flex-row lg:justify-end lg:text-end xl:flex xl:justify-end xl:text-end 2xl:flex 2xl:justify-end 2xl:text-end">
            <div className="2xl:w-3/5 xl:w-3/5 lg:w-3/5 md:w-[55%] w-full flex flex-col md:flex md:flex-row md:justify-between md:items-center lg:flex lg:flex-row lg:justify-between lg:items-center xl:flex xl:flex-row xl:justify-between xl:items-center 2xl:flex 2xl:flex-row 2xl:justify-between 2xl:items-center ">
              <div className=" md:w-[90%] md:px-10 lg:w-[90%] lg:px-12 xl:w-[90%] xl:px-20 2xl:w-[90%] 2xl:px-10 2xl:text-start xl:text-start lg:text-start md:text-start text-center flex flex-col gap-4 md:items-start lg:items-start xl:items-start 2xl:items-end">
                <h2 className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-xl  text-xl ">
                  Pastanemizi ziyaret edin
                </h2>
                <div className="flex  lg:text-lg xl:text-lg 2xl:text-lg flex-col gap-2 md:text-base ">
                  <p>Çalışma Saatlerimiz:</p>
                  <p>Pazartesi 09:30 - 21:30</p>
                  <p>Salı 09:30 - 21:30</p>
                  <p>Çarşamba 09:30 - 21:30</p>
                  <p>Perşembe 09:30 - 21:30</p>
                  <p>Cuma 09:30 - 21:30</p>
                  <p>Cumartesi 09:30 - 21:30</p>
                  <p>Pazar Kapalı</p>
                </div>
                <button
                  onClick={redirectToLocation}
                  className=" 2xl:text-lg xl:text-lg lg:text-lg md:text-base  2xl:w-1/3 xl:w-1/3 lg:w-1/3 md:w-[45%] w-full py-1.5 rounded-md button-css"
                >
                  Yol Tarifi
                </button>
              </div>
            </div>
            <div className="2xl:w-2/5 xl:w-2/5 lg:w-2/5 md:w-[45%] flex justify-end">
              <img className="w-full h-full" src={store} alt="" />
            </div>
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
    </div>
  );
}

export default About;
