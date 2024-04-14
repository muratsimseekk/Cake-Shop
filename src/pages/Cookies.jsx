import React, { useEffect } from "react";

import cookies1 from "../assets/cookies/cookies1.jpg";
import cookies2 from "../assets/cookies/cookies2.jpg";
import cookies3 from "../assets/cookies/cookies3.jpg";
import cookies4 from "../assets/cookies/cookies4.jpg";
import cookies5 from "../assets/cookies/cookies5.jpg";
import cookies6 from "../assets/cookies/cookies6.jpg";
import cookies7 from "../assets/cookies/cookies7.jpg";
import cookies8 from "../assets/cookies/cookies8.jpeg";
import store from "../assets/outside.jpg";

function Cookies() {
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
            Kurabiyeler
          </h2>
          <p className="leading-7 2xl:text-xl xl:text-lg lg:text-lg md:text-base text-sm">
            Opera Baker'ın kurabiye koleksiyonu, tatlı ve tuzlu lezzetlerle
            dolu! Her biri özenle hazırlanmış, enfes tatlarla dolu
            kurabiyelerimizle her anınızı tatlandırabilirsiniz. İster çikolatalı
            ve şekerli tatlarla dolu tatlı kurabiyeleri tercih edin, ister tuzlu
            kurabiyelerimizin çıtır lezzetini deneyin. Opera Baker'ın
            kurabiyeleri, her damak zevkine hitap ediyor ve size benzersiz bir
            tat deneyimi sunuyor.
          </p>
        </div>
        <div className=" w-full flex flex-col ">
          <div>
            <p className="2xl:text-3xl xl:text-2xl lg:text-2xl md:text-xl text-2xl text-center py-5">
              Tatlı ve Tuzlu Kurabiyeler
            </p>
          </div>
          <div className="flex md:flex  md:flex-row md:gap-y-5 md:py-5 lg:flex lg:flex-row lg:gap-y-5 lg:py-5 xl:flex xl:flex-row xl:gap-y-5 xl:py-5 2xl:flex 2xl:flex-row 2xl:gap-y-5 2xl:py-5  text-center justify-between flex-wrap gap-y-5">
            <div className="md:w-[23%] lg:w-[23%] xl:w-[23%] 2xl:w-[23%] w-[49%] flex flex-col gap-2">
              <img className="w-full rounded-md" src={cookies1} />
              <div className="flex flex-col gap-1">
                <h3 className="2xl:text-xl  text-lg">Valentines Treat Box</h3>
                <p className="2xl:text-lg text-sm">Cake By Opera Baker</p>
                <p className="text-sm 2xl:text-lg">$12</p>
              </div>
            </div>
            <div className="md:w-[23%] lg:w-[23%] xl:w-[23%] 2xl:w-[23%] w-[49%] flex flex-col gap-2">
              <img className="w-full rounded-md" src={cookies2} />
              <div className="flex flex-col gap-1">
                <h3 className="2xl:text-xl  text-lg">Valentines Treat Box</h3>
                <p className="2xl:text-lg text-sm">Cake By Opera Baker</p>
                <p className="text-sm 2xl:text-lg">$12</p>
              </div>
            </div>
            <div className="md:w-[23%] lg:w-[23%] xl:w-[23%] 2xl:w-[23%] w-[49%]  flex flex-col gap-2">
              <img className="w-full rounded-md" src={cookies3} />
              <div className="flex flex-col gap-1">
                <h3 className="2xl:text-xl  text-lg">Valentines Treat Box</h3>
                <p className="2xl:text-lg text-sm">Cake By Opera Baker</p>
                <p className="text-sm 2xl:text-lg">$12</p>
              </div>
            </div>
            <div className="md:w-[23%] lg:w-[23%] xl:w-[23%] 2xl:w-[23%] w-[49%]  flex flex-col gap-2">
              <img className="w-full rounded-md" src={cookies4} />
              <div className="flex flex-col gap-1">
                <h3 className="2xl:text-xl  text-lg">Valentines Treat Box</h3>
                <p className="2xl:text-lg text-sm">Cake By Opera Baker</p>
                <p className="text-sm 2xl:text-lg">$12</p>
              </div>
            </div>
            <div className="md:w-[23%] lg:w-[23%] xl:w-[23%] 2xl:w-[23%] w-[49%]  flex flex-col gap-2">
              <img className="w-full rounded-md" src={cookies5} />
              <div className="flex flex-col gap-1">
                <h3 className="2xl:text-xl  text-lg">Valentines Treat Box</h3>
                <p className="2xl:text-lg text-sm">Cake By Opera Baker</p>
                <p className="text-sm 2xl:text-lg">$12</p>
              </div>
            </div>
            <div className="md:w-[23%] lg:w-[23%] xl:w-[23%] 2xl:w-[23%] w-[49%]  flex flex-col gap-2">
              <img className="w-full rounded-md" src={cookies6} />
              <div className="flex flex-col gap-1">
                <h3 className="2xl:text-xl  text-lg">Valentines Treat Box</h3>
                <p className="2xl:text-lg text-sm">Cake By Opera Baker</p>
                <p className="text-sm 2xl:text-lg">$12</p>
              </div>
            </div>
            <div className="md:w-[23%] lg:w-[23%] xl:w-[23%] 2xl:w-[23%] w-[49%]  flex flex-col gap-2">
              <img className="w-full rounded-md" src={cookies7} />
              <div className="flex flex-col gap-1">
                <h3 className="2xl:text-xl  text-lg">Valentines Treat Box</h3>
                <p className="2xl:text-lg text-sm">Cake By Opera Baker</p>
                <p className="text-sm 2xl:text-lg">$12</p>
              </div>
            </div>
            <div className="md:w-[23%] lg:w-[23%] xl:w-[23%] 2xl:w-[23%] w-[49%] min-h-min flex flex-col gap-2">
              <img className="w-full rounded-md h-full" src={cookies8} />
              <div className="flex flex-col gap-1">
                <h3 className="2xl:text-xl  text-lg">Valentines Treat Box</h3>
                <p className="2xl:text-lg text-sm">Cake By Opera Baker</p>
                <p className="text-sm 2xl:text-lg">$12</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-red-50 flex flex-col gap-8 w-full md:flex md:flex-row md:justify-end md:text-end lg:flex lg:justify-end lg:text-end xl:flex xl:justify-end xl:text-end 2xl:flex 2xl:justify-end 2xl:text-end">
          <div className="2xl:w-2/5 xl:w-2/5 lg:w-2/5 md:w-[45%] flex justify-end">
            <img className="w-full h-full" src={store} alt="" />
          </div>
          <div className="2xl:w-3/5 xl:w-3/5 lg:w-3/5 md:w-[55%] w-full flex flex-col md:flex md:flex-row md:justify-between md:items-center lg:flex lg:flex-row lg:justify-between lg:items-center xl:flex xl:flex-row xl:justify-between xl:items-center 2xl:flex 2xl:flex-row 2xl:justify-between 2xl:items-center ">
            <div className=" md:w-[90%] md:px-10 lg:w-[90%] lg:px-12 xl:w-[90%] xl:px-20 2xl:w-[90%] 2xl:px-10 2xl:text-start xl:text-start lg:text-start md:text-start text-center flex flex-col gap-4 md:items-start lg:items-start xl:items-start 2xl:items-end bg-red-200">
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
                className="border 2xl:text-lg xl:text-lg lg:text-lg md:text-base text-sm 2xl:w-1/3 xl:w-1/3 lg:w-1/3 md:w-[45%] w-full py-1.5 rounded-md shadow"
              >
                Directions
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cookies;
