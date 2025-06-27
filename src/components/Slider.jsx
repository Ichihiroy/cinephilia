import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../index.css";
import { Navigation } from "swiper/modules";
export default function Slider() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img src="public/img/slider1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="public/img/slider2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="public/img/slider3.png" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
