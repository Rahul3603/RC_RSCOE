import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import slide1 from "../../assets/img/slides/Slide1.jpg"
import slide2 from "../../assets/img/slides/Slide2.jpg"
import slide3 from "../../assets/img/slides/Slide3.jpg"

export default function IndexSlider() {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };


  const events = [
    {
      slide: slide1,
      name: "RTR. Samruddhi Parte",
      date: "17 Jan 2023",
    },
    {
      slide: slide2,
      name: "RTR. Samruddhi Parte",
      date: "18 Jan 2023",
    },
    {
      slide: slide3,
      name: "RTR. Samruddhi Parte",
      date: "19 Jan 2023",
    },
  ];
  return (
    <>
      <div className="w-full h-[95vh] overflow-hidden">
        <Slider {...settings}>
        {events.map((event, index) => (
          <div>
            <div>
            <img
                className="relative w-full h-[95vh] object-cover object-center"
                src={event.slide}
                alt={event.name}
              />
            <motion.h1
            initial={{opacity:0}}
            whileInView={{opacity:3}}
            transition={{
              duration:100
            }}
            className="relative bottom-24 left-10 font-extrabold font-[Montserrat] text-primary text-4xl">{event.name}</motion.h1>
            
            <motion.p
            initial={{opacity:0}}
            whileInView={{opacity:3}}
            transition={{
              duration:100
            }}
            className="relative bottom-24 left-10 font-bold font-[Montserrat] text-2xl">{event.date}</motion.p>
            </div>
          </div>
        ))}
        </Slider>
      </div>
    </>
  );
}

