import React from "react";
import { Link } from "react-router-dom";
import {
  FacebookIcon,
  LinkedinIcon,
  LogoIcon,
  TwitterIcon,
} from "../../helpers/icon";
import { ROUTES } from "../../../router/routes";

const Footer = () => {
  const getCurrentYear = () => new Date().getFullYear();
  return (
    <div className="bg-textBlack md:px-[70px] px-[20px] md:py-10">
      <div className="flex flex-col md:items-center sm:flex-row gap-x-[100px]">
        <div className="pt-8">
          <Link to="/" className="flex items-center gap-x-2 pb-5">
            <img src="/images/branding/logo.png" className="h-10" />
          </Link>
          <div className="text-sm text-textWhite pb-8 md:text-[20px] md:w-[70%] md:leading-7 leading-5">
            I believe in empowering others with the knowledge and skills I've
            gained. These courses are packed with real-world
          </div>
        </div>
        <div>
          <div className="text-textWhite text-[20px] pb-3">Quick Links </div>
          <div className="flex gap-x-5 pb-5 ">
            <Link
              className="text-textWhite text-[14px] md:text-[20px]"
              to={ROUTES.PRIVACY}
            >
              Privacy & Policy
            </Link>
            <Link
              className="text-textWhite text-[14px] md:text-[20px]"
              to={ROUTES.TERMS}
            >
              Terms & Condition
            </Link>
          </div>
        </div>
        <div className="pb-7">
          <div className="text-textWhite pb-3">Follow Us</div>
          <div className="flex gap-x-4">
            <Link>
              {" "}
              <LinkedinIcon />{" "}
            </Link>
            <Link>
              {" "}
              <FacebookIcon />{" "}
            </Link>
            <Link>
              {" "}
              <TwitterIcon />{" "}
            </Link>
          </div>
        </div>
      </div>
      <div>
        <hr className="text-textWhite" />
        <div className="text-textWhite pt-7 pb-3 md:text-[20px]">
          © {getCurrentYear()} CreatorAPP. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
