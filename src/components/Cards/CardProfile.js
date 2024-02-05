import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

// components

export default function CardProfile() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-rc-white w-full md:w-10/12 lg:w-full xl:w-10/12 h-full mb-6 shadow-2xl rounded-xl mt-10">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="flex items-center w-full px-1 text-center mt-1">
              <div className="flex justify-center h-4/6 lg:pt-0">
                <img src={require("../../assets/img/team-2-800x800.jpg")} alt=""  className="rounded-full border-4 border-rc-black"/>
              </div>
            </div>
          </div>
          <div className="text-center -mt-1">
            <h3 className="text-xl font-semibold leading-normal mb-2 text-rc-black">
              Jenna Stones
            </h3>
            <div className="text-sm leading-normal mb-2 text-rc-black font-bold uppercase">
              Los Angeles, California
            </div>
            <div className="mt-5 mb-9">
            <Link to="#">
              <button
                  className="bg-rc-white text-rc-blue active:bg-rc-blue hover:bg-rc-blue hover:text-rc-white text-sm font-semibold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150 tracking-wider border-[1.5px] border-rc-blue"
                  type="button"
                >
                  <i className="fa-solid fa-pen-to-square mr-0 text-base"></i> EDIT
                </button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
