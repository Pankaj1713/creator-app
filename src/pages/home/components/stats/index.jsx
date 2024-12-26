import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../router/routes";

const Community = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-community mt-10 bg-cover h-[500px] w-full z-[-1] flex items-center justify-center sm:flex-row  md:flex-row lg:flex-row xl:flex-row 2xl:flex-row ">
      <div className="text-center text-textWhite">
        <div className="text-[24px] md:text-[56px] md:w-[690px] md:leading-[60px] font-medium ">
          Join Our Community With Over 100K+ Influencers
        </div>
        <button
          onClick={() => navigate(ROUTES.SIGNUP)}
          className="uppercase bg-accent w-[330px] h-[55px] md:w-[200px] lg:h-[60px] md:text-[24px] rounded-full text-md text-[14px] text-textBlack font-lato mt-10"
        >
          Join now
        </button>
      </div>
    </div>
  );
};

export default Community;
