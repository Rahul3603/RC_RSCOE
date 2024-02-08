/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// components

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between py-3 navbar-expand-lg bg-white shadow"
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <motion.div
              initial={{ x: -700 }}
              animate={{ x: 0 }}
              transition={{
                duration: 1.5,
                delay: 0.7,
                ease: "easeInOut",
              }}
            >
              <Link
                to="/"
                className="text-slate-700 text-lg font-bold leading-relaxed mr-4 whitespace-nowrap uppercase  flex items-center"
              >
                <img
                  className="w-10 h-10 mr-2 inline-block"
                  src={require("../../assets/img/logo.png")}
                  alt=""
                />
                Rotaract Club
              </Link>
            </motion.div>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1.5,
                delay: 1.5,
              }}
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? (
                <i className="fa-solid fa-x"></i>
              ) : (
                <i className="fa-solid fa-bars"></i>
              )}
            </motion.button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <motion.ul
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{
                duration: 1.5,
                delay: 1.5,
              }}
              className="flex flex-col lg:flex-row list-none lg:ml-auto"
            >
              <li className="flex items-center">
                <Link>
                  <a
                    className="hover:text-slate-500 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-semibold"
                    href="#pablo"
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-slate-500 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-semibold"
                  href="#"
                >
                  Events
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-slate-500 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-semibold"
                  href="#"
                >
                  Our Team
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-slate-500 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-sm uppercase font-semibold"
                  href=""
                >
                  Contact
                </a>
              </li>

              {/* <li className="flex items-center">
                <Link to="/auth/login">
                  <button
                    className="bg-primary text-primary-content active:bg-primary-dark hover:bg-primary-dark text-sm font-semibold uppercase px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <i className="fa-solid fa-right-to-bracket"></i> Log In
                  </button>
                </Link>
              </li> */}
            </motion.ul>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
