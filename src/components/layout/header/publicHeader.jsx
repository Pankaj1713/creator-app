import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuIcon } from "../../helpers/icon";
import { ROUTES } from "../../../router/routes";
import { IMAGES } from "../../constants/assets";

const MENU = [
  { label: "Home", route: ROUTES.HOME },
  { label: "Quote", route: ROUTES.QUOTE },
  { label: "Benefits", route: ROUTES.BENEFITS },
  { label: "FAQs", route: ROUTES.FAQS },
];

const PublicHeader = ({ showNavLinks = true }) => {
  const location = useLocation();

  return (
    <div className="flex justify-between items-center py-5 px-5 w-full bg-[#190033]">
      <Link to="/" className="flex items-center gap-x-2">
        <img src={IMAGES.LOGO} className="h-10" />
      </Link>
      {showNavLinks && (
        <div className="hidden gap-x-5  md:flex xl:gap-x-16 text-[20px] font-extralight lg:gap-x-5">
          {MENU.map((menu, index) => (
            <Link
              className={`text-${
                location.pathname === menu.route ? "accent" : "textWhite"
              } text-md`}
              to={menu.route}
            >
              {menu.label}
            </Link>
          ))}
        </div>
      )}
      <div className="flex gap-x-[10px] items-center text-[24px] lg:text-[20px] ">
        <Link className="hidden md:block text-textWhite " to={ROUTES.LOGIN}>
          Login
        </Link>
        <Link
          to={ROUTES.SIGNUP}
          className="font-lato fontt-medium md:block uppercase bg-accent font-semibold md:text-[16px] py-2 md:py-[10px] px-3 md:px-5 rounded-full text-sm"
        >
          Signup for free
        </Link>
        {/* <div className="md:hidden fill-textWhite cursor-pointer">
          {MenuIcon({ width: 30, height: 30 })}{" "}
        </div> */}
      </div>
    </div>
  );
};

export default PublicHeader;
