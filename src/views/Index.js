/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import IndexNavbar from "../components/Navbars/IndexNavbar.js";
import Footer from "../components/Footers/Footer.js";

import pattern from "../assets/img/pattern_react.png";
import Team from "../components/Cards/Team.js";
import HeroSection from "../components/Sliders/HeroSection.js";
import IndexSlider from "../components/Sliders/IndexSlider.js";
import Contact from "../components/Cards/Contact.js";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <div className="w-full p-0 m-0 h-[100vh] bg-black" id="hero">
        <HeroSection />
      </div>
      <div className="w-full p-4 md:p-8 h-full bg-foreground" id="team">
        <div className="mb-7 md:mb-3">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1,
              delay: 0.25,
            }}
            className="text-3xl md:text-5xl text-gray-700 font-medium font-[Montserrat] border-b-4 pb-1 border-primary w-fit md:ml-10 -mb-20 md:-mb-14 mt-6 mb:mt-12"
          >
            Our Team
          </motion.h1>
        </div>
        <div className="h-full flex items-center w-full mt-20 py-10">
          <Team />
        </div>
      </div>
      <div className="w-full p-0 h-[40vh] md:h-[95vh] bg-white" id="events">
        <IndexSlider />
      </div>
      <div className="w-full p-4 md:p-8 h-full bg-foreground" id="contact">
        <div className="mb-7 md:mb-3">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1,
              delay: 0.25,
            }}
            className="text-3xl md:text-5xl text-gray-700 font-medium font-[Montserrat] border-b-4 pb-1 border-primary w-fit md:ml-10 -mb-24 md:-mb-28 mt-6 mb:mt-12"
          >
            Contact Us
          </motion.h1>
        </div>
        <div className="h-full flex items-center justify-center w-full mt-20 py-10">
          <Contact />
        </div>
      </div>
      <div className="w-full p-0 h-[93vh] overflow-hidden bg-black flex justify-center items-center" id="about">
        <Footer />
      </div>
    </>
  );
}
