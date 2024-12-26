import React from "react";

const DATA = [
  "Artists",
  "Educator",
  "Vloggers",
  "Fashion Influencers",
  "Educators",
  "Musicians",
  "Fitness Coaches",
  "Educator",
  "Musicians",
  "Vloggers",
  "Musicians",
  "Fashion Influencers",
  "Musicians",
  "Fitness Coaches",
];

const Platform = () => {
  return (
    <div className="pt-[40px] overflow-hidden md:pt-[100px]">
      <div className=" text-textBlack text-center md:mb-14">
        <div className="md:text-[64px] leading-10 md:leading-[78px] text-[32px] px-[50px] font-semibold">
          Your Passion, Your Platform
        </div>
        <div className="md:text-[24px]  text-[20px] pl-[10px]">
          CreatorAPP is the go-to platform for a vast array of creators and
          influencers
        </div>
      </div>
      <div className="flex gap-4  textWhitespace-nowrap mt-5 -mx-20">
        {DATA.map((item, index) => (
          <div
            className={`md:text-[24px] md:px-10 text-[20px] ${
              index % 2 === 0 ? "bg-light-green" : "bg-light-pink"
            } px-3 py-2 rounded-full`}
            key={item}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="flex gap-4 overflow-hidden textWhitespace-nowrap -mx-10 mt-5 md:mt-10">
        {DATA.map((item, index) => (
          <div
            className={`md:text-[24px] md:px-10 text-[20px] ${
              index % 2 === 0 ? "bg-light-pink" : "bg-light-green"
            } px-3 py-2 rounded-full`}
            key={item}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Platform;
