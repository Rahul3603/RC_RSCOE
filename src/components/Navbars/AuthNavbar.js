/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

// components

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-slate-800 text-lg font-bold leading-relaxed mr-4 whitespace-nowrap uppercase flex items-center"
              to="/"
            >
              <img
                className="w-10 h-10 mr-2 inline-block"
                src={require("../../assets/img/logo.png")}
                alt=""
              />
              Rotaract Club
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1  bg-transparent block lg:hidden outline-none text-slate-700 focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? (
                <i className="fa-solid fa-x"></i>
              ) : (
                <i className="fa-solid fa-bars"></i>
              )}
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <a
                  className="hover:text-slate-700 text-slate-400 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold"
                  href="#"
                  target="_blank"
                >
                  <i className="hover:text-slate-700 text-slate-400 fab fa-facebook text-xl leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Facebook</span>
                </a>
              </li>

              <li className="flex items-center">
              <a
                  className="hover:text-slate-700 text-slate-400 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold"
                  href="#"
                  target="_blank"
                >
                  <i className="hover:text-slate-700 text-slate-400 fab fa-twitter text-xl leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Twitter</span>
                </a>
              </li>

              <li className="flex items-center">
              <a
                  className="hover:text-slate-700 text-slate-400 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold"
                  href="#"
                  target="_blank"
                >
                  <i className="hover:text-slate-700 text-slate-400 fab fa-instagram text-xl leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Instagram</span>
                </a>
              </li>
              <li className="flex items-center">
              <a
                  className="hover:text-slate-700 text-slate-400 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold"
                  href="#"
                  target="_blank"
                >
                  <i className="hover:text-slate-700 text-slate-400 fab fa-linkedin text-xl leading-lg " />
                  <span className="lg:hidden inline-block ml-2">LinkedIn</span>
                </a>
              </li>
              <li className="flex items-center">
              <a
                  className="hover:text-slate-700 text-slate-400 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-bold"
                  href="#"
                  target="_blank"
                >
                  <i className="hover:text-slate-700 text-slate-400 fab fa-telegram text-xl leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Telegram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
