import * as Layout from '../../Layouts';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from "swiper";
import "swiper/css/effect-cards";
import 'swiper/css';
import './index.css';

function Achievement() {
  return (
    <div style={{ height: "1000px" }}>
      <Layout.Navbar />
      <div className='bg-red-500 w-full h-24 pt-56'>
      <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
      >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      </div>
    </div>
  )
}

export default Achievement;