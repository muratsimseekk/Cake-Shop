import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import slider1 from "../../assets/cakes/cake1.jpeg";
import slider2 from "../../assets/cakes/cake2.jpeg";
import slider3 from "../../assets/cakes/cake3.jpeg";
import slider4 from "../../assets/cakes/cake4.jpeg";
import slider5 from "../../assets/cakes/cake5.jpeg";
import slider6 from "../../assets/cakes/cake6.jpeg";
import slider7 from "../../assets/cakes/cake7.jpeg";
import slider8 from "../../assets/cakes/cake8.jpeg";
import slider9 from "../../assets/cakes/cake9.jpeg";
import slider10 from "../../assets/cakes/cake10.jpeg";

function TopSlider() {
  return (
    <div className="pt-8 ">
      <Swiper
        style={{ height: 570 }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide className="2xl:h-full 2xl:w-1/3 xl:h-[90%] xl:w-1/3 lg:h-[85%] md:h-[80%] md:w-[42%] h-[75%] w-[70%]">
          <img className=" h-full rounded-lg" src={slider1} />
        </SwiperSlide>
        <SwiperSlide className="2xl:h-full 2xl:w-1/3 xl:h-[90%] xl:w-1/3 lg:h-[85%] md:h-[80%]  md:w-[42%] h-[75%] w-[70%]">
          <img className=" h-full rounded-lg" src={slider2} />
        </SwiperSlide>
        <SwiperSlide className="2xl:h-full 2xl:w-1/3 xl:h-[90%] xl:w-1/3 lg:h-[85%] md:h-[80%] md:w-[42%] h-[75%] w-[70%]">
          <img className="h-full rounded-lg" src={slider3} />
        </SwiperSlide>
        <SwiperSlide className="2xl:h-full 2xl:w-1/3 xl:h-[90%] xl:w-1/3 lg:h-[85%] md:h-[80%] md:w-[42%] h-[75%] w-[70%]">
          <img className="h-full rounded-lg" src={slider4} />
        </SwiperSlide>
        <SwiperSlide className="2xl:h-full 2xl:w-1/3 xl:h-[90%] xl:w-1/3 lg:h-[85%] md:h-[80%] md:w-[42%] h-[75%] w-[70%]">
          <img className="h-full rounded-lg" src={slider5} />
        </SwiperSlide>
        <SwiperSlide className="2xl:h-full 2xl:w-1/3 xl:h-[90%] xl:w-1/3 lg:h-[85%] md:h-[80%] md:w-[42%] h-[75%] w-[70%]">
          <img className="h-full rounded-lg" src={slider6} />
        </SwiperSlide>
        <SwiperSlide className="2xl:h-full 2xl:w-1/3 xl:h-[90%] xl:w-1/3 lg:h-[85%] md:h-[80%] md:w-[42%] h-[75%] w-[70%]">
          <img className="h-full rounded-lg" src={slider7} />
        </SwiperSlide>
        <SwiperSlide className="2xl:h-full 2xl:w-1/3 xl:h-[90%] xl:w-1/3 lg:h-[85%] md:h-[80%] md:w-[42%] h-[75%] w-[70%]">
          <img className="h-full rounded-lg" src={slider8} />
        </SwiperSlide>
        <SwiperSlide className="2xl:h-full 2xl:w-1/3 xl:h-[90%] xl:w-1/3 lg:h-[85%] md:h-[80%] md:w-[42%] h-[75%] w-[70%]">
          <img className="h-full rounded-lg" src={slider9} />
        </SwiperSlide>
        <SwiperSlide className="2xl:h-full 2xl:w-1/3 xl:h-[90%] xl:w-1/3 lg:h-[85%] md:h-[80%] md:w-[42%] h-[75%] w-[70%]">
          <img className="h-full rounded-lg" src={slider10} />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow ">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default TopSlider;
