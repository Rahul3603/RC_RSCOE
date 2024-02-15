import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <footer className="bg-black pb-[30px] text-sm text-white w-full">
      <div className="pt-[60px] pb-[30px]">
        <div className="container px-3 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 m-auto">
            <div className="m-auto">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                }}
                className="mb-4 bg-black border-t-4 border-solid border-primary text-center px-5 py-7"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0.5,
                  }}
                >
                  <h3 className="text-2xl py-1 font-bold text-primary">
                    Rotaract Club of RSCOE
                  </h3>
                  <p className="text-base mb-2 font-semibold">
                    Sponsored by Rotary Club of Akurdi
                    <br />
                    Zone 03 | RID 3131
                    <br />
                  </p>
                  <p className="text-sm mb-0">
                    JSPM's Rajarshi Shahu College of Engineering
                    <br />
                    Ashok Nagar, Tathawade, Pimpri-Chinchwad,
                    <br />
                    Maharashtra 411033
                    <br />
                    <br />
                    <strong>Email:</strong>
                    <a href="mailto:rscoerotaract@gmail.com">
                      <p className="text-primary">rscoerotaract@gmail.com</p>
                    </a>
                    <br />
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0.7,
                  }}
                  className="mt-3 text-2xl"
                >
                  <a
                    href="https://m.facebook.com/rcrscoe"
                    className="inline-block mx-2 hover:text-primary"
                  >
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                  <a
                    href="https://instagram.com/rc_rscoe?igshid=MzRlODBiNWFlZA=="
                    className="inline-block mx-2 hover:text-primary"
                  >
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/rotaract-club-of-rscoe/"
                    className="inline-block mx-2 hover:text-primary"
                  >
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                  <a
                    href="https://twitter.com/rc_rscoe?t=EFP2HzitjSsWTs1nciyWYA&s=09"
                    className="inline-block mx-2 hover:text-primary"
                  >
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                  <a
                    href="https://t.me/rc_rscoe"
                    className="inline-block mx-2 hover:text-primary"
                  >
                    <i class="fa-brands fa-telegram"></i>
                  </a>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: 1,
              }}
              className="m-auto"
            >
              <h4 className="text-lg font-medium pb-3">Useful Links</h4>
              <ul>
                <li className="py-2">
                  <i className="fa-solid fa-chevron-right inline-block text-primary"></i>{" "}
                  <Link
                    to="hero"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    className="text-sm font-normal hover:text-primary"
                  >
                    Home
                  </Link>
                </li>
                <li className="py-2">
                  <i className="fa-solid fa-chevron-right inline-block text-primary"></i>{" "}
                  <Link
                    to="team"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    className="text-sm font-normal hover:text-primary"
                  >
                    Our Team
                  </Link>
                </li>
                <li className="py-2">
                  <i className="fa-solid fa-chevron-right inline-block text-primary"></i>{" "}
                  <Link
                    to="events"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    className="text-sm font-normal hover:text-primary"
                  >
                    Events
                  </Link>
                </li>
                <li className="py-2">
                  <i className="fa-solid fa-chevron-right inline-block text-primary"></i>{" "}
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-40}
                    duration={500}
                    className="text-sm font-normal hover:text-primary"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1,
        }}
        className="w-full"
      >
        <div className="border-t-[1px] border-solid border-primary text-center pt-8 text-base">
          &copy; Copyright{" "}
          <strong>
            <span>Rotaract Club</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="pt-2 text-center text-sm">
          Designed by{" "}
          <a href="hgfvfh" className="text-primary">
            Rahul, Sumit, Gaurav
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
