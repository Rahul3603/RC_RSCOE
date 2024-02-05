import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
      <div className="container mx-auto h-full -mt-24 md:-mt-12">
        <div className="flex justify-center h-full">
          <div className="w-full">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-slate-800 text-xl font-semibold uppercase">
                    Registration
                  </h6>
                </div>
                <hr className="mt-6 border-b-1 border-slate-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 lg:gap-x-10">
                    <div className="mb-3 mx-5 md:mx-0 lg:mx-0">
                      <label
                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        className="border-[1.5px] px-3 py-3 placeholder-slate-300 text-slate-600 bg-transparent outline-none border-slate-300 rounded text-sm focus:border-slate-600 focus:ring-0 active:border-slate-600 w-full ease-linear transition-all duration-150"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="mb-3 mx-5 md:mx-0 lg:mx-0">
                      <label
                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="border-[1.5px] px-3 py-3 placeholder-slate-300 text-slate-600 bg-transparent outline-none border-slate-300 rounded text-sm focus:border-slate-600 focus:ring-0 active:border-slate-600 w-full ease-linear transition-all duration-150"
                        placeholder="Last Name"
                      />
                    </div>
                    <div className="mb-3 mx-5 md:mx-0 lg:mx-0">
                      <label
                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Mobile No
                      </label>
                      <input
                        type="tel" maxLength="10"
                        className="border-[1.5px] px-3 py-3 placeholder-slate-300 text-slate-600 bg-transparent outline-none border-slate-300 rounded text-sm focus:border-slate-600 focus:ring-0 active:border-slate-600 w-full ease-linear transition-all duration-150"
                        placeholder="Mobile No"
                      />
                    </div>
                    <div className="mb-3 mx-5 md:mx-0 lg:mx-0">
                      <label
                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-[1.5px] px-3 py-3 placeholder-slate-300 text-slate-600 bg-transparent outline-none border-slate-300 rounded text-sm focus:border-slate-600 focus:ring-0 active:border-slate-600 w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                      />
                    </div>
                    <div className="mb-3 mx-5 md:mx-0 lg:mx-0">
                      <label
                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Class
                      </label>
                      <select
                        type="text"
                        className="border-[1.5px] px-3 py-3 placeholder-slate-300 text-slate-600 bg-transparent outline-none border-slate-300 rounded text-sm focus:border-slate-600 focus:ring-0 active:border-slate-600 w-full ease-linear transition-all duration-150"
                        placeholder="Class"
                      >
                          <option>Select Class...</option>
                          <option>FY</option>
                          <option>SY</option>
                          <option>TY</option>
                          <option>B.Tech</option>
                      </select>
                    </div>
                    <div className="mb-3 mx-5 md:mx-0 lg:mx-0">
                      <label
                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Division
                      </label>
                      <select
                        type="text"
                        className="border-[1.5px] px-3 py-3 placeholder-slate-300 text-slate-600 bg-transparent outline-none border-slate-300 rounded text-sm focus:border-slate-600 focus:ring-0 active:border-slate-600 w-full ease-linear transition-all duration-150"
                        placeholder="Class"
                      >
                          <option>Select Division...</option>
                          <option>A</option>
                          <option>B</option>
                          <option>C</option>
                          <option>D</option>
                      </select>
                    </div>
                    <div className="mb-3 mx-5 md:mx-0 lg:mx-0">
                      <label
                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-[1.5px] px-3 py-3 placeholder-slate-300 text-slate-600 bg-transparent outline-none border-slate-300 rounded text-sm focus:border-slate-600 focus:ring-0 active:border-slate-600 w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                      />
                    </div>
                    <div className="mb-3 mx-5 md:mx-0 lg:mx-0">
                      <label
                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-[1.5px] px-3 py-3 placeholder-slate-300 text-slate-600 bg-transparent outline-none border-slate-300 rounded text-sm focus:border-slate-600 focus:ring-0 active:border-slate-600 w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                      />
                    </div>
                    <div className="mb-3 mx-5 md:mx-0 lg:mx-0">
                      <label
                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-[1.5px] px-3 py-3 placeholder-slate-300 text-slate-600 bg-transparent outline-none border-slate-300 rounded text-sm focus:border-slate-600 focus:ring-0 active:border-slate-600 w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                      />
                    </div>
                    <div className="mb-3 mx-5 md:mx-0 lg:mx-0">
                      <label
                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="border-[1.5px] px-3 py-3 placeholder-slate-300 text-slate-600 bg-transparent outline-none border-slate-300 rounded text-sm focus:border-slate-600 focus:ring-0 active:border-slate-600 w-full ease-linear transition-all duration-150"
                        placeholder="Password"
                      />
                    </div>
                    <div className="mb-3 mx-5 md:mx-0 lg:mx-0">
                      <label
                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="border-[1.5px] px-3 py-3 placeholder-slate-300 text-slate-600 bg-transparent outline-none border-slate-300 rounded text-sm focus:border-slate-600 focus:ring-0 active:border-slate-600 w-full ease-linear transition-all duration-150"
                        placeholder="Password"
                      />
                    </div>
                    <div className="mb-3 mx-5 md:mx-0 lg:mx-0">
                      <label
                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="border-[1.5px] px-3 py-3 placeholder-slate-300 text-slate-600 bg-transparent outline-none border-slate-300 rounded text-sm focus:border-slate-600 focus:ring-0 active:border-slate-600 w-full ease-linear transition-all duration-150"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                    <div className="text-center mt-6 mx-5 md:mx-0 lg:mx-0">
                      <button
                        className="bg-slate-800 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full md:w-4/12 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Create Account
                      </button>
                    </div>
                </form>
            <div className="flex flex-wrap relative mt-2">
              <div className="w-full text-center">
                <Link to="/auth/login" className="text-slate-800">
                  <small>
                    Already have an account?
                    <span className="text-blue-500"> Log In</span>
                  </small>
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
