import React from "react";
import logo1 from "../../assets/img/logo.png";
import logo2 from "../../assets/img/rscoe.png";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <>
      <div className=" mx-auto mt-0 w-full h-full bg-black">
        <motion.div 
        initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.7,
            }}
        className="h-[100vh] bg-left lg:bg-center bg-cover bg-no-repeat w-full bg-[url('../../assets/img/herobackground.png')]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 1.5,
              delay: 0.5,
            }}
            className="flex flex-col h-full lg:flex-row content-center items-center justify-evenly"
          >
            <div className="w-full md:w-3/12 flex justify-center lg:justify-end">
              <img
                className="w-32 h-32 md:w-44 md:h-44 mt-10 lg:-mt-44 lg:mr-8"
                src={logo1}
                alt="Rotaract Club"
              />
              <img
                className="w-36 h-36 md:w-48 md:h-48 mt-10 visible lg:hidden"
                src={logo2}
                alt="Rotaract Club"
              />
            </div>
            <div className="text-center w-full lg:w-6/12">
              <h1 className="text-[36px] sm:text-5xl md:text-6xl font-[Montserrat] p-2 md:p-4  tracking-wider text-white pb-3 -mt-12 lg:mt-16">
                ROTARACT CLUB
              </h1>
              <h1 className="text-xl md:text-3xl text-white font-[Montserrat]">Of</h1>
              <h1 className="text-2xl md:text-4xl p-2 text-white font-[Montserrat]">
                Rajarshi Shahu College of Engineering
              </h1>
              <p className="mx-4 md:mx-8 lg:mx-0 text-sm md:text-base text-[#FFD6E1] text-center w-5/15 mt-4 font-[Montserrat]">
                Rotaract clubs brings young people together to exchange ideas
                with leaders in the community, develop leadership and
                professional skills, and have fun through service. In
                communities worldwide, Rotary and Rotaract members work side by
                side to take action through service.
              </p>
              <div className="bg-transparent p-4 font-[Montserrat] mt-4">
                <span className="border-[2.5px] border-[#FFD6E1] hover:border-none delay-700  py-2 hover:delay-0"><DrawOutlineButton>JOIN NOW</DrawOutlineButton></span>
              </div>
            </div>
            <div className="w-full md:w-3/12 flex justify-start">
              <img
                className="w-40 h-40 md:w-48 md:h-48 -mt-44 hidden lg:visible lg:flex lg:ml-8 "
                src={logo2}
                alt="Rotaract Club"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

const DrawOutlineButton = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="group relative px-4 py-2 font-medium text-[#FFD6E1] transition-colors duration-[400ms] hover:text-[#FFD6E1]"
    >
      <span>{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-[#FFD6E1] transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-[#FFD6E1] transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-[#FFD6E1] transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-[#FFD6E1] transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};
