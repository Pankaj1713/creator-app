import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className=" w-full bg-gradient-to-r from-[#4C0099] to-[#330066] ">
      <div className="flex flex-col items-center py-20 px-5 ">
        <div className="text-textWhite text-[40px] leading-[55px] mb-7 md:text-[26px] font-medium lg:text-[80px]  md:leading-[90px] text-center max-w-[1020px] w-full">
          <span className="text-accent">Monetize </span>
          Your Passion, Build Your Career
        </div>
        <div className="text-textWhite text-[20px] mb-6  lg:text-[24px] max-w-[900px] w-full text-center font-lato">
          Join CreatorAPP, where influencers and educator monetize their passion
          and connect with their audience like never before.
        </div>
        <div className="flex text-[14px] pb-[90px] lg:flex-row h-[55px]  flex-col gap-y-5 md:gap-x-[20px] md:text-center md:mt-5 md:text-[24px] ">
          <Link
            to="/signup"
            className="uppercase bg-accent flex items-center justify-center w-[330px] h-[55px] md:w-[330px] md:h-[80px] py-4 rounded-full text-md"
          >
            signup for free
          </Link>
          <button className="uppercase bg-primary flex items-center justify-center  border-2 w-[330px] h-[55px] md:w-[330px] md:h-[80px] border-accent py-4 rounded-full text-md">
            explore more
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
