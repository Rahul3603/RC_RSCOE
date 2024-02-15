import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1,
        }}
        className="relative flex flex-col  break-words w-full lg:w-6/12 mb-6 shadow-lg rounded-lg bg-white border-0"
      >
        <div className="flex-auto px-4 lg:px-10 py-10">
          <form>
            <div className="flex flex-wrap">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 1,
                }}
                className="w-full lg:w-6/12 px-4"
              >
                <div className="relative w-full mb-3">
                  <label className="mb-3 block text-rc-black">Name</label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="border-[1.5px] px-4 py-3 placeholder-gray-500 text-rc-black bg-transparent outline-none border-gray-500 rounded-lg font-medium focus:border-primary focus:ring-primary active:border-primary w-full ease-linear transition-all duration-150"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 1,
                }}
                className="w-full lg:w-6/12 px-4"
              >
                <div className="relative w-full mb-3">
                  <label className="mb-3 block text-rc-black">Mobile</label>
                  <input
                    type="email"
                    placeholder="Mobile"
                    className="border-[1.5px] px-4 py-3 placeholder-gray-500 text-rc-black bg-transparent outline-none border-gray-500 rounded-lg font-medium focus:border-primary focus:ring-primary active:border-primary w-full ease-linear transition-all duration-150"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 1,
                }}
                className="w-full px-4"
              >
                <div className="relative w-full mb-3">
                  <label className="mb-3 block text-rc-black">Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="border-[1.5px] px-4 py-3 placeholder-gray-500 text-rc-black bg-transparent outline-none border-gray-500 rounded-lg font-medium focus:border-primary focus:ring-primary active:border-primary w-full ease-linear transition-all duration-150"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 1,
                }}
                className="w-full px-4"
              >
                <div className="relative w-full mb-3">
                  <label className="mb-3 block text-rc-black">Message</label>
                  <textarea
                    rows={6}
                    placeholder="Message"
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none border-gray-500  focus:border-primary focus:ring-primary active:border-primary ease-linear transition-all duration-150"
                  ></textarea>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 1,
              }}
              className="flex justify-center mt-1"
            >
              <button className="bg-primary text-primary-content hover:bg-primary-dark active:bg-primary-dark font-bold uppercase text-sm mt-3 px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none transition duration-700 ease-in-out text-center w-36">
                Send Message
              </button>
            </motion.div>
          </form>
        </div>
      </motion.div>
    </>
  );
}
