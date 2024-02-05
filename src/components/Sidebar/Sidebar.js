/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

// import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
import UserDropdown from "../../components/Dropdowns/UserDropdown.js";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 md:py-4 px-6 no-scrollbar">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-60 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          {/* Brand */}
          <Link
            className="md:block text-left md:pb-2 text-slate-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            to="/admin/dashboard"
          >
            <img
                className="w-10 h-10 mr-2 inline-block"
                src={require("../../assets/img/logo.png")}
                alt=""
              />
              Rotaract Club
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-hidden overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4">
              <div className="flex flex-wrap">
                <div className="w-full flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-60 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fa-solid fa-x"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="px-3 py-2 h-12 border-1  border-slate-500 placeholder-slate-300 text-slate-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal focus:border-rose-900 focus:ring-rose-900"
                />
              </div>
            </form>
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/dashboard") !== -1
                      ? "text-rose-700 hover:text-rose-800"
                      : "text-slate-700 hover:text-slate-500")
                  }
                  to="/admin/dashboard"
                >
                  <i
                    className={
                      "fa-solid fa-tv mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/dashboard") !== -1
                        ? "opacity-75"
                        : "text-slate-300")
                    }
                  ></i>{" "}
                  Dashboard
                </Link>
              </li>
            </ul>
            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Site Settings
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/settings") !== -1
                      ? "text-rose-700 hover:text-rose-800"
                      : "text-slate-700 hover:text-slate-500")
                  }
                  to="/admin/settings"
                >
                  <i
                    className={
                      "fa-regular fa-calendar mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/settings") !== -1
                        ? "opacity-75"
                        : "text-slate-300")
                    }
                  ></i>{" "}
                  Events
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/settings") !== -1
                      ? "text-rose-700 hover:text-rose-800"
                      : "text-slate-700 hover:text-slate-500")
                  }
                  to="/admin/settings"
                >
                  <i
                    className={
                      "fa-solid fa-trophy mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/settings") !== -1
                        ? "opacity-75"
                        : "text-slate-300")
                    }
                  ></i>{" "}
                  Achievements
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/team") !== -1
                      ? "text-rose-700 hover:text-rose-800"
                      : "text-slate-700 hover:text-slate-500")
                  }
                  to="/admin/team"
                >
                  <i
                    className={
                      "fa-solid fa-users mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/team") !== -1
                        ? "opacity-75"
                        : "text-slate-300")
                    }
                  ></i>{" "}
                  Team
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/tables") !== -1
                      ? "text-rose-700 hover:text-rose-800"
                      : "text-slate-700 hover:text-slate-500")
                  }
                  to="/admin/tables"
                >
                  <i
                    className={
                      "fa-solid fa-message mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/tables") !== -1
                        ? "opacity-75"
                        : "text-slate-300")
                    }
                  ></i>{" "}
                  Contact Messages
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Rotaractors
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link
                  className={"text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/xyz") !== -1
                      ? "text-rose-700 hover:text-rose-800"
                      : "text-slate-700 hover:text-slate-500")
                  }
                  to="/admin/dashboard"
                >
                  <i className={"fa-regular fa-rectangle-list mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/xyz") !== -1
                        ? "opacity-75"
                        : "text-slate-300")
                    }
                  ></i>{" "}
                  Rotaractors List
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={"text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/xyz") !== -1
                      ? "text-rose-700 hover:text-rose-800"
                      : "text-slate-700 hover:text-slate-500")
                  }
                  to="/admin/dashboard"
                >
                  <i className={"fa-solid fa-user-plus mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/xyz") !== -1
                        ? "opacity-75"
                        : "text-slate-300")
                    }
                  ></i>{" "}
                  New Rotaractors
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Alumni
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link
                  className={"text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/xyz") !== -1
                      ? "text-rose-700 hover:text-rose-800"
                      : "text-slate-700 hover:text-slate-500")
                  }
                  to="/admin/dashboard"
                >
                  <i className={"fa-regular fa-rectangle-list mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/xyz") !== -1
                        ? "opacity-75"
                        : "text-slate-300")
                    }
                  ></i>{" "}
                  Alumni List
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={"text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/xyz") !== -1
                      ? "text-rose-700 hover:text-rose-800"
                      : "text-slate-700 hover:text-slate-500")
                  }
                  to="/admin/dashboard"
                >
                  <i className={"fa-solid fa-user-plus mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/xyz") !== -1
                        ? "opacity-75"
                        : "text-slate-300")
                    }
                  ></i>{" "}
                  New Alumni
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
