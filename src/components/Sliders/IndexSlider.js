import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import slide1 from "../../assets/img/slides/Slide1.jpg";
import slide2 from "../../assets/img/slides/Slide2.jpg";
import slide3 from "../../assets/img/slides/Slide3.jpg";

export default function IndexSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
      name: "CSD & CMD EVENT at ISKCON Temple",
      date: "7 Aug 2023",
    },
    {
      slide: slide3,
      name: "RTR. Samruddhi Parte",
      date: "19 Jan 2023",
    },
  ];
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay:0.5
        }}
        className="w-full h-[35vh] md:h-[95vh] overflow-hidden"
      >
        <Slider {...settings}>
          {events.map((event, index) => (
            <div>
              <div>
                <img
                  className="relative w-full h-[35vh] md:h-[95vh] object-cover object-center"
                  src={event.slide}
                  alt={event.name}
                />
                <motion.h1
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 3 }}
                  transition={{
                    duration: 1,
                    delay: 0.5,
                  }}
                  className="relative bottom-12 left-2 md:bottom-24 md:left-10 font-extrabold font-[Montserrat] text-primary text-lg md:text-3xl"
                >
                  {event.name}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 3 }}
                  transition={{
                    duration: 1,
                    delay: 0.5,
                  }}
                  className="relative bottom-14 left-2 md:bottom-24 md:left-10 font-bold font-[Montserrat] text-base md:text-2xl"
                >
                  {event.date}
                </motion.p>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </>
  );
}
