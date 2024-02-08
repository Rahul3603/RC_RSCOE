import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo1 from "../../assets/img/logo.png";
import logo2 from "../../assets/img/rscoe.png";
import { MotionConfig, motion } from "framer-motion";

export default function HomeSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };
  return (
    <>
      <div className="bg-sky-400 mx-auto mt-0 w-full h-full">
        <Slider {...settings}>
          <div className="h-[100vh] bg-background">
            <div className="flex flex-col h-full md:flex-row content-center items-center justify-evenly">
              <div
              
                className="w-full md:w-3/12 flex justify-center"
              >
                <img
                  className="w-36 h-36 md:w-44 md:h-44 mt-20 sm:mt-0"
                  src={logo1}
                  alt="Rotaract Club"
                />
              </div>
              <div className="text-center w-full md:w-6/12">
                <h1
                 className="text-[36px] md:text-6xl font-bold p-2 md:p-4 font-[Poppins] tracking-wider text-black pb-3">
                  ROTARACT CLUB
                </h1>
                <h1
                className="text-xl md:text-3xl">Of</h1>
                <h1 className="text-2xl md:text-4xl p-2 ">
                  Rajarshi Shahu College of Engineering
                </h1>
                <h1 className="text-lg md:text-2xl text-gray-700">
                  Sponsored by Rotary Club of Akurdi
                </h1>
                <h1
                 className="text-lg md:text-2xl text-gray-700">
                  Zone 03 | RID 3131
                </h1>
                <p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration:1.5,
                  delay:3,
                }}
                className="mx-4 sm:mx-0 text-sm md:text-base text-gray-700 text-center w-5/15 mt-4">
                  Rotaract clubs brings younger people together to exchange
                  ideas with leaders in the community, develop leadership and
                  professional skills, and have fun through service. In
                  communities worldwide, Rotary and Rotaract members work side
                  by side to take action through service.
                </p>
              </div>
              <div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 1.5,
                }}
                className="w-full md:w-3/12 flex justify-center"
              >
                <img
                  className="w-36 h-36 md:w-44 md:h-44"
                  src={logo2}
                  alt="Rotaract Club"
                />
              </div>
            </div>
          </div>
          {/* <div className=" h-[100vh] bg-white">
            <div className="flex flex-col h-full md:flex-row content-center items-center justify-evenly">
              <div className="w-full md:w-3/12 flex justify-center">
                <img
                  className="w-36 h-36 md:w-44 md:h-44"
                  src={logo1}
                  alt="Rotaract Club"
                />
              </div>
              <div className="text-center w-full md:w-6/12">
                <h1 className="text-[36px] md:text-6xl font-bold p-2 md:p-4 font-[Poppins] tracking-wider text-black">
                  ROTARACT CLUB
                </h1>
                <h1 className="text-xl md:text-3xl">Of</h1>
                <h1 className="text-2xl md:text-4xl p-2 ">
                  Rajarshi Shahu College of Engineering
                </h1>
                <h1 className="text-lg md:text-2xl text-gray-700">
                  Sponsored by Rotary Club of Akurdi
                </h1>
                <h1 className="text-lg md:text-2xl text-gray-700">
                  Zone 03 | RID 3131
                </h1>
                <p className="text-sm md:text-base text-gray-700 text-center w-5/15 mt-2">
                  Rotaract clubs brings younger people together to exchange
                  ideas with leaders in the community, develop leadership and
                  professional skills, and have fun through service. In
                  communities worldwide, Rotary and Rotaract members work side
                  by side to take action through service.
                </p>
              </div>
              <div className="w-full md:w-3/12 flex justify-center">
                <img
                  className="w-36 h-36 md:w-44 md:h-44"
                  src={logo2}
                  alt="Rotaract Club"
                />
              </div>
            </div>
          </div> */}
        </Slider>
      </div>
    </>
  );
}
