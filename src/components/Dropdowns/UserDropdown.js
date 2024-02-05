import React from "react";
import { createPopper } from "@popperjs/core";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const UserDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <a
        className="text-slate-500 block"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="items-center flex">
          <span className="w-12 h-12 text-xl text-slate-800 bg-slate-100 inline-flex items-center justify-center rounded-full">
            <i className="fa-solid fa-user"></i>
          </span>
        </div>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <span
          className="text-base py-2 px-4 block w-full whitespace-nowrap bg-transparent text-slate-700 font-semibold"
        >
          Rahul Arade
        </span>
        <Link
          to="/profile"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
        >
          My Profile
        </Link>
        <Link
          to="/changepass"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
        >
          Change Password
        </Link>
        <div className="h-0 my-2 border border-solid border-slate-100" />
        <Link
          to="/"
          className=
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"       
        >
         Sign Out <i class="fa-solid fa-right-to-bracket"></i>
        </Link>
      </div>
    </>
  );
};

export default UserDropdown;
