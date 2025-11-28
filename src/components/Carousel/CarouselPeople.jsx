/*import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { useState } from "react";
import "./CarouselPeople.css";
import { motion } from "framer-motion"

import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import people4 from "../../assets/images/people4.png";

// 🔹 FONDOS que querés mostrar detrás (podés agregar más)
import bg1 from "../../assets/images/paisaje1.jpg";
import bg2 from "../../assets/images/paisaje2.jpg";
import bg3 from "../../assets/images/paisaje3.jpg";
import bg4 from "../../assets/images/paisaje4.jpg";

export const CarouselPeople = () => {

  // Array que vincula PERSONA → BACKGROUND
  const backgrounds = [bg1, bg2, bg3, bg4];

  // Estado del fondo actual
  const [bg, setBg] = useState(backgrounds[0]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div
        className="people"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="mySwiper-people"
          onSlideChange={(swiper) => {
            // Cambia el fondo según el index del slide
            setBg(backgrounds[swiper.realIndex]);

          }}
          //effect-fade
          effect="fade"
          fadeEffect={{
            crossFade: true, // transición suave entre imágenes
          }}
        >
          <SwiperSlide>
            <img src={people1} alt="people 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={people2} alt="people 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={people3} alt="people 3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={people4} alt="people 4" />
          </SwiperSlide>
        </Swiper>
      </div>

    </motion.div>

  );
};*/

/*import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination, Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./CarouselPeople.css"

import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import people4 from "../../assets/images/people4.png";



export const CarouselPeople = () => {
  return (
  <div className="people">
      <Swiper
    modules={[Pagination, Autoplay]}
    pagination={{clickable:true}}
    autoplay={{delay:3000}}
    loop={true}
    className="mySwiper-people"
    >
      <SwiperSlide>
        <img src={people1} alt="people 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={people2} alt="people 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={people3} alt="people 3" />
      </SwiperSlide>
       <SwiperSlide>
        <img src={people4} alt="people 4" />
      </SwiperSlide>
  

    </Swiper>
  </div>
  )
}*/

/*
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { useState } from "react";
import "./CarouselPeople.css";
import { motion } from "framer-motion";

import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import people4 from "../../assets/images/people4.png";

import bg1 from "../../assets/images/paisaje1.jpg";
import bg2 from "../../assets/images/paisaje2.jpg";
import bg3 from "../../assets/images/paisaje3.jpg";
import bg4 from "../../assets/images/paisaje4.jpg";

export const CarouselPeople = () => {
  const backgrounds = [bg1, bg2, bg3, bg4];
  const people = [people1, people2, people3, people4];

  const [bg, setBg] = useState(backgrounds[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="people" style={{ backgroundImage: `url(${bg})` }}>
      
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="mySwiper-people"
          effect="fade"
          fadeEffect={{ crossFade: true }}
          onSlideChange={(swiper) => {
            setCurrentIndex(swiper.realIndex);
            setBg(backgrounds[swiper.realIndex]);
          }}
        >
          {people.map((img, i) => (
            <SwiperSlide key={i}>
              <motion.img
                src={img}
                alt={`people ${i + 1}`}

                // 🔥 animación de aparición
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: currentIndex === i ? 1 : 0,
                  scale: currentIndex === i ? 1 : 0.50, // shrink suave al irse
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
       
     
      </div>
    </motion.div>
  
  );
};*/
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { motion } from "framer-motion";
import { useState } from "react";

import "./CarouselPeople.css";

import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import people4 from "../../assets/images/people4.png";

import bg1 from "../../assets/images/paisaje1.jpg";
import bg2 from "../../assets/images/paisaje2.jpg";
import bg3 from "../../assets/images/paisaje3.jpg";
import bg4 from "../../assets/images/paisaje4.jpg";

export const CarouselPeople = () => {
  const backgrounds = [bg1, bg2, bg3, bg4];
  const [bg, setBg] = useState(backgrounds[0]);

  return (
    <div className="carousel-people-wrapper">
      {/* Fondo animado */}
      <motion.div
        key={bg}
        className="carousel-bg"
        style={{ backgroundImage: `url(${bg})` }}
        initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 1.1 }}
  transition={{
    duration: 0.8,   // Más lento
    ease: "easeInOut"
  }}
      />

      {/* Carrusel de personas */}
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        loop={true}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        className="mySwiper-people"
        onSlideChange={(swiper) => {
          setBg(backgrounds[swiper.realIndex]);
        }}
      >
        <SwiperSlide>
          <img src={people1} alt="people" className="person-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={people2} alt="people" className="person-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={people3} alt="people" className="person-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={people4} alt="people" className="person-img" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};




