import React from "react";
import { Link } from "react-router-dom";
// components

export default function CardEvent() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-16 shadow-lg rounded-xl bg-rc-white border-0">
        {/* <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-slate-700 text-xl font-bold">Event</h6>
            <button
              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
            >
              Settings
            </button>
          </div>
        </div> */}
        <div className="flex-auto px-3 lg:px-5 py-5">
          <div className="flex flex-wrap items-center justify-center">
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative w-full">
                <div className="w-full">
                  <img
                    src={require("../../assets/img/Event3.png")}
                    alt=""
                    className="rounded-lg hover:scale-110 transition-all ease-in-out duration-500"
                  />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-8/12 px-4 md:px-8">
              <div className="relative w-full mb-3">
                <div >
                  <h1 className="uppercase font-semibold text-2xl md:text-4xl py-5 pb-1 md:py-3 text-rc-black border-b-8 border-rc-red w-fit">
                    prakriti marg avhan
                  </h1>
                  <p className="text-justify text-base md:text-lg py-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptas qui placeat enim ratione voluptatibus nihil, est
                    sint debitis animi odit unde in? Cumque natus earum fuga
                    distinctio! Cumque, consequuntur in? Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio corrupti eos provident aperiam. Eius cumque quam nesciunt tempora. Esse dignissimos voluptas, cum aut eaque quas veniam officia incidunt architecto sed!
                  </p>
                  <p className="text-lg pb-3 font-medium">Date : 05/02/2024</p>
                  <p className="text-lg pb-3 font-medium">Fees : $30</p>
                  <div className="bg-rc-red-500 text-white hover:bg-rc-red-400 active:bg-rc-red-400 font-bold uppercase text-sm mt-3 px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none transition duration-700 ease-in-out text-center w-36">
                    <Link to="#">
                      <i className="fa-solid fa-pen-to-square"></i> Edit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
