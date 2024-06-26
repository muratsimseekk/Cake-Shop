import React from "react";

import ciko1 from "../../../assets/cikolata/ciko1.jpg";
import ciko2 from "../../../assets/cikolata/ciko2.jpg";
import ciko3 from "../../../assets/cikolata/ciko3.jpg";
import ciko4 from "../../../assets/cikolata/ciko4.jpg";
import { Link, useNavigate } from "react-router-dom";

function Cards() {
  const navigate = useNavigate();
  const redirectToLocation = () => {
    // Belirli bir koordinat veya adres bilgisi
    const destination = "37.0735141,37.3405707"; // Örnek: "37.7749,-122.4194"

    // Google Haritalar URL'sini oluştur
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;

    // Yeni pencerede Google Haritalar'ı açan kod
    window.open(mapsUrl, "_blank");
  };

  const viewButton = (e) => {
    e.preventDefault();
    console.log("tiklandi");
    navigate("/specialday");
  };
  return (
    <>
      <div className="w-4/5 md:block lg:block xl:block 2xl:block hidden ">
        <div>
          <h3 className="  tracking tracking-wider 2xl:text-2xl 2xl:py-10 xl:text-2xl xl:py-7 lg:text-xl md:text-xl py-5 text-center">
            El Yapımı Belçika Çikolataları
          </h3>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="flex flex-col gap-4 w-[24%]">
            <div className=" w-full">
              <img src={ciko1} alt="" />
            </div>
            <div className="flex flex-col gap-2 2xl:text-xl xl:text-lg text-center">
              <h3>4x4 Spesiyal Çikolata Kutusu</h3>
              <p>350₺</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-[24%]">
            <div className=" w-full">
              <img src={ciko2} alt="" />
            </div>
            <div className="flex flex-col gap-2 2xl:text-xl xl:text-lg text-center">
              <h3>4x4 Spesiyal Çikolata Kutusu</h3>
              <p>350₺</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-[24%]">
            <div className=" w-full">
              <img src={ciko3} alt="" />
            </div>
            <div className="flex flex-col gap-2 2xl:text-xl xl:text-lg text-center">
              <h3>4x6 Spesiyal Çikolata Kutusu</h3>
              <p>500₺</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-[24%]">
            <div className=" w-full">
              <img src={ciko4} alt="" />
            </div>
            <div className="flex flex-col gap-2 2xl:text-xl xl:text-lg text-center">
              <h3>4x4 Spesiyal Çikolata Kutusu</h3>
              <p>350₺</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-4 mt-10">
          <button
            type="button"
            onClick={(e) => viewButton(e)}
            className="button-css 2xl:py-[2px] 2xl:px-5 xl:py-[2px] xl:px-14 lg:py-[2px] lg:px-6 md:px-6 md:py-[2px]  text-lg rounded-md shadow-md cursor-pointer "
          >
            Hepsini Gör
          </button>
        </div>
        <div className="py-10 flex flex-col gap-4">
          <div className="flex justify-center gap-2">
            <button
              onClick={redirectToLocation}
              className="button-css text-center text-lg py-[2px] w-52 rounded-md shadow-md cursor-pointer"
            >
              Yol Tarifi
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="button-css text-center text-lg py-[2px] w-52 rounded-md shadow-md cursor-pointer"
            >
              İletişim
            </button>
          </div>
          <div className="flex justify-center">
            <p className="">
              Opera Baker pastanesi olarak 1.sınıf malzemeler kullanarak
              hazırladığımız butik lezzetlerimizi tatmaya , sizleri davet
              ediyoruz .
            </p>
          </div>
        </div>
      </div>
      <div className="w-4/5 md:hidden lg:hidden xl:hidden 2xl:hidden text-center flex flex-col items-center gap-6">
        <h2 className="text-3xl ">Sipariş oluştur</h2>
        <p>
          Online platformlar üzerinden pastanemizden alışveriş yapabilirsiniz .
        </p>
        <div className="w-full flex flex-col gap-3 mt-6">
          <a
            href="https://www.yemeksepeti.com/restaurant/ucdg/opera-baker"
            target="_blank"
          >
            <button className="border w-full py-2 rounded-md">
              Yemek Sepeti
            </button>
          </a>
          <Link to="/contact">
            <button className="border w-full py-2 rounded-md">İletişim</button>
          </Link>
        </div>
        <p>
          Yemek Sepeti ve Trendyol Yemek üzerinden pastanemizden alışveriş
          yapabilirsiniz . Özel tasarım pastalar için lütfen iletişime geçiniz .
        </p>
        <p>İletişim bölümünden irtibat bilgilerine ulaşabilirsiniz . </p>
      </div>
    </>
  );
}

export default Cards;
