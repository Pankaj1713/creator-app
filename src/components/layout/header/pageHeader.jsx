import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuIcon, LeftArrowIcon } from "../../helpers/icon";
import { ROUTES } from "../../../router/routes";
import { IMAGES } from "../../constants/assets";

const PageHeader = ({ title = "" }) => {
  const location = useLocation();

  return (
    <div className="flex justify-between items-center py-7 px-5 w-full bg-[#190033]">
      <div className="flex items-center">
        {/* <div className="cursor-pointer"><LeftArrowIcon/></div> */}
        <span className="text-textWhite text-xl font-semibold">{title}</span>
      </div>
      {/* <div className="flex gap-x-[10px] items-center text-[24px] lg:text-[20px] ">
        <Link className="hidden md:block text-textWhite " to={ROUTES.LOGIN}>
          Login
        </Link>
      </div> */}
    </div>
  );
};

export default PageHeader;
