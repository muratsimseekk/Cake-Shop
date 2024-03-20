import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import slider1 from "./../../assets/img1.jpg";
import slider2 from "./../../assets/img2.jpg";
import slider3 from "./../../assets/img1.jpg";
import slider4 from "./../../assets/img2.jpg";
import slider5 from "./../../assets/img1.jpg";
import slider6 from "./../../assets/img2.jpg";

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
        // breakpoints={{
        //   390: {
        //     slidesPerView: 2,
        //     height: 400,
        //   },
        //   768: {
        //     slidesPerView: 1,
        //   },
        // }}
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
        <SwiperSlide className="2xl:h-full 2xl:w-1/3 xl:h-[90%] lg:h-[85%] md:h-[80%] md:w-[42%] h-[70%] w-[60%]">
          <img className=" h-full" src={slider1} />
        </SwiperSlide>
        <SwiperSlide className="2xl:h-full 2xl:w-1/3 xl:h-[90%] lg:h-[85%] md:h-[80%]  md:w-[42%] h-[70%] w-[60%]">
          <img className=" h-full" src={slider2} />
        </SwiperSlide>
        <SwiperSlide className="2xl:h-full 2xl:w-1/3 xl:h-[90%] lg:h-[85%] md:h-[80%] md:w-[42%] h-[70%] w-[60%]">
          <img className="h-full" src={slider3} />
        </SwiperSlide>
        <SwiperSlide className="2xl:h-full 2xl:w-1/3 xl:h-[90%] lg:h-[85%] md:h-[80%] md:w-[42%] h-[70%] w-[60%]">
          <img className="h-full" src={slider4} />
        </SwiperSlide>
        <SwiperSlide className="2xl:h-full 2xl:w-1/3 xl:h-[90%] lg:h-[85%] md:h-[80%] md:w-[42%] h-[70%] w-[60%]">
          <img className="h-full" src={slider5} />
        </SwiperSlide>
        <SwiperSlide className="2xl:h-full 2xl:w-1/3 xl:h-[90%] lg:h-[85%] md:h-[80%] md:w-[42%] h-[70%] w-[60%]">
          <img className="h-full" src={slider6} />
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
