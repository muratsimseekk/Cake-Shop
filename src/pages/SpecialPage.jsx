import React, { useEffect } from "react";

import topPhoto from "../assets/cikolata/cikolata9.jpg";
import cikolata1 from "../assets/cikolata/cikolata1.jpg";
import cikolata2 from "../assets/cikolata/cikolata2.jpg";
import cikolata3 from "../assets/cikolata/cikolata3.jpg";
import cikolata4 from "../assets/cikolata/cikolata4.jpg";
import cikolata5 from "../assets/cikolata/cikolata5.jpg";
import cikolata6 from "../assets/cikolata/cikolata6.jpg";
import cikolata7 from "../assets/cikolata/cikolata7.jpg";
import cikolata8 from "../assets/cikolata/cikolata8.jpg";

import store from "../assets/outside.jpg";
import { GiCupcake } from "react-icons/gi";

function SpecialPage() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);
  //TODO: Adres ve calisma saatleri icin bir component yap .

  const redirectToLocation = () => {
    // Belirli bir koordinat veya adres bilgisi
    const destination = "37.0735141,37.3405707"; // Örnek: "37.7749,-122.4194"

    // Google Haritalar URL'sini oluştur
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;

    // Yeni pencerede Google Haritalar'ı açan kod
    window.open(mapsUrl, "_blank");
  };
  return (
    <div className="w-full flex justify-center my-5">
      <div className="w-4/5 flex flex-col items-center gap-10">
        <div className=" w-full flex flex-col gap-8 md:flex md:flex-row md:gap-0 lg:flex lg:flex-row lg:gap-0 xl:flex xl:flex-row xl:gap-0 2xl:flex 2xl:flex-row 2xl:gap-0 ">
          <div className="md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 w-full flex flex-col gap-4  pt-10 2xl:text-start xl:text-start lg:text-start md:text-start text-center">
            <h2 className=" 2xl:text-4xl xl:text-3xl lg:text-3xl md:text-2xl text-3xl">
              Orjinal 1.Sınıf Belçika Çikolataları
            </h2>
            <div className="flex flex-col gap-3 text-lg">
              <p>
                Ramazan Bayramı'nın tatlı coşkusunu Opera'nın spesiyal
                çikolatalarıyla kutlamaya ne dersiniz?{" "}
              </p>
              <p>
                Her biri özenle hazırlanmış bitter, beyaz, normal ve enfes
                fıstıklı, fındıklı çeşitlerimizle sevdiklerinize muhteşem bir
                lezzet şöleni sunuyoruz. Bu bayram, sevdiklerinizle bir araya
                gelirken, en kaliteli çikolatalarımızı ikram ederek tatlı anılar
                biriktirmeye davetlisiniz.
              </p>
              <p>
                Ayrıcalıklı tatların adresi olan Belçika çikolatalarımız,
                Ramazan Bayramı'nın huzur dolu atmosferine lezzet katarak
                sofralarınıza renk getiriyor.
              </p>
              <p>
                Sevdiklerinizle paylaşmak için özenle hazırladığımız çeşit çeşit
                çikolatalarımızla, bu bayramı unutulmaz kılın. İyi bayramlar
                dileriz, tatlı anılarla dolu bir bayram geçirmeniz dileğiyle!
              </p>
            </div>
          </div>
          <div className="md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 h-full">
            <img className="w-full h-full " src={topPhoto} alt="" />
          </div>
        </div>
        <div className=" w-full flex flex-col md:text-center 2xl:text-start xl:text-start lg:text-start ">
          <div className="flex items-center justify-center 2xl:gap-4 xl:gap-4 lg:gap-4 md:gap-4 gap-1">
            <GiCupcake className="w-[30px] " />
            <p className="2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl text-xl  text-center py-5 ">
              Opera'nın Lezzetli mi Lezzetli Spesiyal Çikolataları
            </p>
            <GiCupcake className="w-[30px]" />
          </div>
          <div className="flex md:flex md:flex-row md:gap-y-5 md:py-5 lg:flex lg:flex-row lg:gap-y-5 lg:py-5 xl:flex xl:flex-row xl:gap-y-5 xl:py-5 2xl:flex 2xl:flex-row 2xl:gap-y-5 2xl:py-5   justify-between flex-wrap text-center">
            <div className="md:w-[23%] lg:w-[23%] xl:w-[23%] 2xl:w-[23%] w-[49%] flex flex-col gap-2">
              <img className="w-full rounded-md" src={cikolata7} />
              <div className="flex flex-col gap-1">
                <h3 className="2xl:text-xl xl:text-lg lg:text-base md:text-base  text-lg">
                  Bitter Çikolatalar
                </h3>
                <p className="2xl:text-lg xl:text-base lg:text-sm md:text-sm text-sm">
                  Fıstıklı ve Bademli{" "}
                </p>
                <p className="text-sm 2xl:text-lg xl:text-lg lg:text-sm md:text-sm">
                  1200₺
                </p>
              </div>
            </div>
            <div className="md:w-[23%] lg:w-[23%] xl:w-[23%] 2xl:w-[23%] w-[49%] flex flex-col gap-2">
              <img className="w-full rounded-md" src={cikolata8} />
              <div className="flex flex-col gap-1">
                <h3 className="2xl:text-xl xl:text-lg lg:text-base md:text-base  text-lg">
                  Damla Motifli Çikolatalar
                </h3>
                <p className="2xl:text-lg xl:text-base lg:text-sm md:text-sm text-sm">
                  Beyaz ve Sütlü{" "}
                </p>
                <p className="text-sm 2xl:text-lg xl:text-lg lg:text-sm md:text-sm">
                  1200₺
                </p>
              </div>
            </div>
            <div className="md:w-[23%] lg:w-[23%] xl:w-[23%] 2xl:w-[23%] w-[49%]  flex flex-col gap-2">
              <img className="w-full rounded-md" src={cikolata3} />
              <div className="flex flex-col gap-1">
                <h3 className="2xl:text-xl xl:text-lg lg:text-base md:text-base  text-lg">
                  Beyaz Çikolatalar
                </h3>
                <p className="2xl:text-lg xl:text-base lg:text-sm md:text-sm text-sm">
                  Fıstıklı Beyaz{" "}
                </p>
                <p className="text-sm 2xl:text-lg xl:text-lg lg:text-sm md:text-sm">
                  1200₺
                </p>
              </div>
            </div>
            <div className="md:w-[23%] lg:w-[23%] xl:w-[23%] 2xl:w-[23%] w-[49%]  flex flex-col gap-2">
              <img className="w-full rounded-md" src={cikolata4} />
              <div className="flex flex-col gap-1">
                <h3 className="2xl:text-xl xl:text-lg lg:text-base md:text-base  text-lg">
                  Sütlü Çikolatalar
                </h3>
                <p className="2xl:text-lg xl:text-base lg:text-sm md:text-sm text-sm">
                  Fıstıklı ve Bademli{" "}
                </p>
                <p className="text-sm 2xl:text-lg xl:text-lg lg:text-sm md:text-sm">
                  1200₺
                </p>
              </div>
            </div>
            <div className="md:w-[23%] lg:w-[23%] xl:w-[23%] 2xl:w-[23%] w-[49%]  flex flex-col gap-2">
              <img className="w-full rounded-md" src={cikolata5} />
              <div className="flex flex-col gap-1">
                <h3 className="2xl:text-xl xl:text-lg lg:text-base md:text-base  text-lg">
                  Sütlü Çikolatalar
                </h3>
                <p className="2xl:text-lg xl:text-base lg:text-sm md:text-sm text-sm">
                  Sade Beyaz
                </p>
                <p className="text-sm 2xl:text-lg xl:text-lg lg:text-sm md:text-sm">
                  1200₺
                </p>
              </div>
            </div>
            <div className="md:w-[23%] lg:w-[23%] xl:w-[23%] 2xl:w-[23%] w-[49%]  flex flex-col gap-2">
              <img className="w-full rounded-md" src={cikolata6} />
              <div className="flex flex-col gap-1">
                <h3 className="2xl:text-xl xl:text-lg lg:text-base md:text-base  text-lg">
                  Bitter Çikolatalar
                </h3>
                <p className="2xl:text-lg xl:text-base lg:text-sm md:text-sm text-sm">
                  Fındıklı Bitter{" "}
                </p>
                <p className="text-sm 2xl:text-lg xl:text-lg lg:text-sm md:text-sm">
                  1200₺
                </p>
              </div>
            </div>
            <div className="md:w-[23%] lg:w-[23%] xl:w-[23%] 2xl:w-[23%] w-[49%]  flex flex-col gap-2">
              <img className="w-full rounded-md" src={cikolata2} />
              <div className="flex flex-col gap-1">
                <h3 className="2xl:text-xl xl:text-lg lg:text-base md:text-base  text-lg">
                  Beyaz Çikolatalar
                </h3>
                <p className="2xl:text-lg xl:text-base lg:text-sm md:text-sm text-sm">
                  Özel Motifli Beyaz{" "}
                </p>
                <p className="text-sm 2xl:text-lg xl:text-lg lg:text-sm md:text-sm">
                  1200₺
                </p>
              </div>
            </div>
            <div className="md:w-[23%] lg:w-[23%] xl:w-[23%] 2xl:w-[23%] w-[49%]  flex flex-col gap-2">
              <img className="w-full rounded-md" src={cikolata1} />
              <div className="flex flex-col gap-1">
                <h3 className="2xl:text-xl xl:text-lg lg:text-base md:text-base  text-lg">
                  Beyaz Çikolatalar
                </h3>
                <p className="2xl:text-lg xl:text-base lg:text-sm md:text-sm text-sm">
                  Sade Beyaz
                </p>
                <p className="text-sm 2xl:text-lg xl:text-lg lg:text-sm md:text-sm">
                  1200₺
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-8 w-full md:flex md:flex-row md:justify-end md:text-end lg:flex lg:flex-row lg:justify-end lg:text-end xl:flex xl:justify-end xl:text-end 2xl:flex 2xl:justify-end 2xl:text-end">
          <div className="2xl:w-3/5 xl:w-3/5 lg:w-3/5 md:w-[55%] w-full flex flex-col md:flex md:flex-row md:justify-between md:items-center lg:flex lg:flex-row lg:justify-between lg:items-center xl:flex xl:flex-row xl:justify-between xl:items-center 2xl:flex 2xl:flex-row 2xl:justify-between 2xl:items-center ">
            <div className=" md:w-[90%] md:px-10 lg:w-[90%] lg:px-12 xl:w-[90%] xl:px-20 2xl:w-[90%] 2xl:px-10 2xl:text-start xl:text-start lg:text-start md:text-start text-center flex flex-col gap-4 md:items-start lg:items-start xl:items-start 2xl:items-end">
              <h2 className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-xl  text-xl ">
                Pastanemizi ziyaret edin
              </h2>
              <div className="flex text-sm lg:text-lg xl:text-lg 2xl:text-lg flex-col gap-2 md:text-base ">
                <p>
                  Batıkent Mah. Abdulkadir Aksu Blv. No:56/D
                  Şehitkamil/Gaziantep
                </p>
                <p>Opening hours:</p>
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
                className=" 2xl:text-lg xl:text-lg lg:text-lg md:text-base text-sm 2xl:w-1/3 xl:w-1/3 lg:w-1/3 md:w-[45%] w-full py-1.5 rounded-md button-css"
              >
                Yol Tarifi
              </button>
            </div>
          </div>
          <div className="2xl:w-2/5 xl:w-2/5 lg:w-2/5 md:w-[45%] flex justify-end">
            <img className="w-full h-full" src={store} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialPage;
