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
    <div className="pt-8">
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
        <SwiperSlide className="h-full w-1/3">
          <img className=" h-full" src={slider1} />
        </SwiperSlide>
        <SwiperSlide className="h-full w-1/3">
          <img className=" h-full" src={slider2} />
        </SwiperSlide>
        <SwiperSlide className="h-full w-1/3">
          <img className="h-full" src={slider3} />
        </SwiperSlide>
        <SwiperSlide className="h-full w-1/3">
          <img className="h-full" src={slider4} />
        </SwiperSlide>
        <SwiperSlide className="h-full w-1/3">
          <img className="h-full" src={slider5} />
        </SwiperSlide>
        <SwiperSlide className="h-full w-1/3">
          <img className="h-full" src={slider6} />
        </SwiperSlide>
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default TopSlider;
