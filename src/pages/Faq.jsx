import React, { useEffect } from "react";

import tatli1 from "../assets/tatlilar/tatli1.jpg";
import tatli2 from "../assets/tatlilar/tatli2.jpg";
import tatli3 from "../assets/tatlilar/tatli3.jpg";
import tatli4 from "../assets/tatlilar/tatli4.jpg";
import tatli5 from "../assets/tatlilar/tatli5.jpg";
import tatli6 from "../assets/tatlilar/tatli6.jpg";
import tatli7 from "../assets/tatlilar/tatli7.jpg";
import tatli8 from "../assets/tatlilar/tatli8.jpg";
import store from "../assets/outside.jpg";

function Faq() {
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
    <div className="w-full flex justify-center items-center">
      <div className="w-4/5  my-14 flex flex-col gap-16">
        <div className=" flex flex-col gap-5 md:w-4/5 lg:w-4/5 xl:w-4/5 2xl:w-4/5 2xl:text-start xl:text-start lg:text-start md:text-start text-center w-full">
          <h2 className="2xl:text-4xl xl:text-3xl lg:text-3xl md:text-2xl text-3xl">
            Tatlılar
          </h2>
          <p className="leading-7 2xl:text-xl xl:text-lg lg:text-lg md:text-base ">
            Opera Baker'ın tatlılar bölümü, tatlı düşkünlerini büyüleyen bir
            lezzet cümbüşü sunuyor.
          </p>
          <p className="leading-7 2xl:text-xl xl:text-lg lg:text-lg md:text-base ">
            {" "}
            Çikolatalı, fıstıklı, kremalı ve daha birçok nefis tatlı seçeneğiyle
            damakları şenlendiriyoruz. CheeseCake'in kremsi dokusu, Magnolya'nın
            hafif ve ferah tadı, Tiramisu'nun yoğun kahve aroması, Profiterolün
            çıtır dışı ve kremalı içi, San Sebastian'ın ise eşsiz lezzetiyle
            damağınızda unutulmaz bir tat bırakacak.
          </p>
          <p className="leading-7 2xl:text-xl xl:text-lg lg:text-lg md:text-base ">
            Opera Baker'ın ustaları, en kaliteli malzemeleri kullanarak her bir
            tatlıyı özenle hazırlıyor ve sizlere sunuyor. Tatlı tutkunlarının
            vazgeçilmez adresi Opera Baker, özel günlerinizi tatlandırmak için
            burada!
          </p>
        </div>
        <div className=" w-full flex flex-col ">
          <div>
            <p className="2xl:text-3xl xl:text-2xl lg:text-2xl md:text-xl text-2xl text-center py-5">
              Enfes Tatlılar
            </p>
          </div>
          <div className="flex md:flex  md:flex-row md:gap-y-5 md:py-5 lg:flex lg:flex-row lg:gap-y-5 lg:py-5 xl:flex xl:flex-row xl:gap-y-5 xl:py-5 2xl:flex 2xl:flex-row 2xl:gap-y-5 2xl:py-5  text-center justify-between flex-wrap gap-y-5">
            <div className="md:w-[23%] lg:w-[23%] xl:w-[23%] 2xl:w-[23%] w-[49%] flex flex-col gap-2">
              <img className="w-full rounded-md" src={tatli1} />
              <div className="flex flex-col gap-1">
                <h3 className="2xl:text-xl xl:text-lg lg:text-base md:text-base  text-lg">
                  Orman Meyveli CheeseCake
                </h3>
                <p className="2xl:text-lg xl:text-base lg:text-sm md:text-sm text-sm">
                  Opera Baker El Yapımı
                </p>
                <p className="text-sm 2xl:text-lg xl:text-lg lg:text-sm md:text-sm">
                  190₺
                </p>
              </div>
            </div>
            <div className="md:w-[23%] lg:w-[23%] xl:w-[23%] 2xl:w-[23%] w-[49%] flex flex-col gap-2">
              <img className="w-full rounded-md" src={tatli2} />
              <div className="flex flex-col gap-1">
                <h3 className="2xl:text-xl xl:text-lg lg:text-base md:text-base  text-lg">
                  Oreolu Muzlu Magnolya
                </h3>
                <p className="2xl:text-lg xl:text-base lg:text-sm md:text-sm text-sm">
                  Opera Baker El Yapımı
                </p>
                <p className="text-sm 2xl:text-lg xl:text-lg lg:text-sm md:text-sm">
                  130₺
                </p>
              </div>
            </div>
            <div className="md:w-[23%] lg:w-[23%] xl:w-[23%] 2xl:w-[23%] w-[49%] flex flex-col gap-2">
              <img className="w-full rounded-md" src={tatli3} />
              <div className="flex flex-col gap-1">
                <h3 className="2xl:text-xl xl:text-lg lg:text-base md:text-base  text-lg">
                  Fıstıklı Magnolya
                </h3>
                <p className="2xl:text-lg xl:text-base lg:text-sm md:text-sm text-sm">
                  Opera Baker El Yapımı
                </p>
                <p className="text-sm 2xl:text-lg xl:text-lg lg:text-sm md:text-sm">
                  175₺
                </p>
              </div>
            </div>
            <div className="md:w-[23%] lg:w-[23%] xl:w-[23%] 2xl:w-[23%] w-[49%] flex flex-col gap-2">
              <img className="w-full rounded-md" src={tatli4} />
              <div className="flex flex-col gap-1">
                <h3 className="2xl:text-xl xl:text-lg lg:text-base md:text-base  text-lg">
                  Çilekli Magnolya
                </h3>
                <p className="2xl:text-lg xl:text-base lg:text-sm md:text-sm text-sm">
                  Opera Baker El Yapımı
                </p>
                <p className="text-sm 2xl:text-lg xl:text-lg lg:text-sm md:text-sm">
                  130₺
                </p>
              </div>
            </div>
            <div className="md:w-[23%] lg:w-[23%] xl:w-[23%] 2xl:w-[23%] w-[49%] flex flex-col gap-2">
              <img className="w-full rounded-md" src={tatli5} />
              <div className="flex flex-col gap-1">
                <h3 className="2xl:text-xl xl:text-lg lg:text-base md:text-base  text-lg">
                  Bihter
                </h3>
                <p className="2xl:text-lg xl:text-base lg:text-sm md:text-sm text-sm">
                  Opera Baker El Yapımı
                </p>
                <p className="text-sm 2xl:text-lg xl:text-lg lg:text-sm md:text-sm">
                  150₺
                </p>
              </div>
            </div>
            <div className="md:w-[23%] lg:w-[23%] xl:w-[23%] 2xl:w-[23%] w-[49%] flex flex-col gap-2">
              <img className="w-full rounded-md" src={tatli6} />
              <div className="flex flex-col gap-1">
                <h3 className="2xl:text-xl xl:text-lg lg:text-base md:text-base  text-lg">
                  Muzaffer
                </h3>
                <p className="2xl:text-lg xl:text-base lg:text-sm md:text-sm text-sm">
                  Opera Baker El Yapımı
                </p>
                <p className="text-sm 2xl:text-lg xl:text-lg lg:text-sm md:text-sm">
                  130₺
                </p>
              </div>
            </div>
            <div className="md:w-[23%] lg:w-[23%] xl:w-[23%] 2xl:w-[23%] w-[49%] flex flex-col gap-2">
              <img className="w-full rounded-md" src={tatli7} />
              <div className="flex flex-col gap-1">
                <h3 className="2xl:text-xl xl:text-lg lg:text-base md:text-base  text-lg">
                  Tiramisu
                </h3>
                <p className="2xl:text-lg xl:text-base lg:text-sm md:text-sm text-sm">
                  Opera Baker El Yapımı
                </p>
                <p className="text-sm 2xl:text-lg xl:text-lg lg:text-sm md:text-sm">
                  150₺
                </p>
              </div>
            </div>
            <div className="md:w-[23%] lg:w-[23%] xl:w-[23%] 2xl:w-[23%] w-[49%] flex flex-col gap-2">
              <img className="w-full rounded-md" src={tatli8} />
              <div className="flex flex-col gap-1">
                <h3 className="2xl:text-xl xl:text-lg lg:text-base md:text-base  text-lg">
                  Supangle
                </h3>
                <p className="2xl:text-lg xl:text-base lg:text-sm md:text-sm text-sm">
                  Opera Baker El Yapımı
                </p>
                <p className="text-sm 2xl:text-lg xl:text-lg lg:text-sm md:text-sm">
                  130₺
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex flex-col gap-8 w-full md:flex md:flex-row md:justify-end md:text-end lg:flex lg:justify-end lg:text-end xl:flex xl:justify-end xl:text-end 2xl:flex 2xl:justify-end 2xl:text-end">
          <div className="2xl:w-2/5 xl:w-2/5 lg:w-2/5 md:w-[45%] flex justify-end">
            <img className="w-full h-full" src={store} alt="" />
          </div>
          <div className="2xl:w-3/5 xl:w-3/5 lg:w-3/5 md:w-[55%] w-full flex flex-col md:flex md:flex-row md:justify-between md:items-center lg:flex lg:flex-row lg:justify-between lg:items-center xl:flex xl:flex-row xl:justify-between xl:items-center 2xl:flex 2xl:flex-row 2xl:justify-between 2xl:items-center ">
            <div className=" md:w-[90%] md:px-10 lg:w-[90%] lg:px-12 xl:w-[90%] xl:px-20 2xl:w-[90%] 2xl:px-10 2xl:text-start xl:text-start lg:text-start md:text-start text-center flex flex-col gap-4 md:items-start lg:items-start xl:items-start 2xl:items-end">
              <h2 className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-xl  text-xl ">
                Pastanemizi ziyaret edin
              </h2>
              <div className="flex lg:text-lg xl:text-lg 2xl:text-lg flex-col gap-2 md:text-base ">
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
                className=" 2xl:text-lg xl:text-lg lg:text-lg md:text-base 2xl:w-1/3 xl:w-1/3 lg:w-1/3 md:w-[45%] w-full py-1.5 rounded-md button-css"
              >
                Yol Tarifi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
