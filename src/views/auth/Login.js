import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [visible, setVisiblity] = useState(false);
  const Icon = visible ? "fa-solid fa-eye" : "fa-solid fa-eye-slash";
  const InputType = visible ? "text" : "password";

  const [user, setUser] = useState({
    email:"",
    password:"",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]:value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  }

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-5/12 md:w-6/12 px-3 md:px-6">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded-xl bg-white">
              <div className="rounded-t mb-0 px-6 py-3">
                <div className="text-center mb-3">
                  <div className="flex justify-center">
                    <img
                      alt=""
                      className="h-16 w-16"
                      src={require("../../assets/img/logo.png")}
                    />
                  </div>
                  <h2 className="mt-5 text-center text-[26px] md::text-3xl font-bold text-gray-900">
                    Login to your account
                  </h2>
                  <p className="mt-2 text-center text-sm text-gray-600">
                    Don't have an account yet? &nbsp;
                    <Link
                      to="/auth/register"
                      className="font-medium text-rose-900 hover:text-rose-800"
                    >
                       Register
                    </Link>
                  </p>
                </div>
              </div>
              <div className="flex-auto px-4 lg:px-10 py-6 pt-0">
                <form onSubmit={handleSubmit}>
                  <div className="relative w-full mb-3">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email address"
                      className="border-[1.5px] px-3 py-2 placeholder-slate-400 text-slate-600 bg-transparent outline-none border-slate-500 rounded text-base focus:border-rose-900 focus:ring-rose-900 active:border-slate-600 w-full ease-linear transition-all duration-150"
                      autoComplete="off"
                      required
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <input
                      type={InputType}
                      name="password"
                      id="password"
                      placeholder="Password"
                      className="border-[1.5px] px-3 py-2 placeholder-slate-400 text-slate-600 bg-transparent outline-none border-slate-500 rounded text-base focus:border-rose-900 focus:ring-rose-900 active:border-slate-600 w-full ease-linear transition-all duration-150"
                      autoComplete="off"
                      required
                      value={user.password}
                      onChange={handleInput}
                    />
                    <span className="absolute top-[9.5px] sm:top-2 right-3 z-50 cursor-pointer" onClick={() => setVisiblity(visiblity => !visiblity)}><i className={Icon}></i></span>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-rose-900 text-white hover:bg-rose-800 active:bg-rose-800 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="sumbit"
                    >
                      Log In
                    </button>
                  </div>
                  <div className="w-full text-center">
                    <a
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      className="text-slate-900 font-medium text-lg hover:text-rose-900"
                    >
                      <small>Forgot password?</small>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
