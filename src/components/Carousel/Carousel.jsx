import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Carousel.css"
import { motion } from "framer-motion"

import promo1 from "../../assets/images/promo1.jpg";
import promo2 from "../../assets/images/promo2.jpg";
import promo3 from "../../assets/images/promo3.jpg";
import promo4 from "../../assets/images/promo4.jpg";


export const Carousel = () => {
  return (
    <motion.div
     
    >
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={promo1} alt="promo 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={promo2} alt="promo 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={promo3} alt="promo 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={promo4} alt="promo 4" />
        </SwiperSlide>

      </Swiper>
    </motion.div>

  )
}