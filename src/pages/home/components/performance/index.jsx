import React from "react";

const DATA = [
  { id: 1, heading: "120+", type: "pink", subHeading: "Brand & Partners" },
  { id: 2, heading: "5M+", type: "green", subHeading: "Monthly Visitors" },
  {
    id: 3,
    heading: "10K+",
    type: "pink",
    subHeading: "Creators & Influencers",
  },
];

const Performance = () => {
  return (
    <div>
      <div className="flex flex-col items-center w-full m-auto">
        <div className="font-bold text-[32px] md:text-[64px] pb-6 ">
          Why Choose CreatorAPP
        </div>
        <div className="flex flex-col  gap-y-6 md:gap-x-10 sm:flex-row  md:flex-row">
          {DATA.map((item) => (
            <div
              key={item.id}
              className={`flex justify-center items-center w-[330px] h-[140px] md:mb-[100px] xl:w-[380px] md:w-[200px] md:h-[140px] xl:h-[280px]lg:w-[265px] lg:h-[200px] rounded-[30px] ${
                item.type === "pink" ? "bg-light-pink" : "bg-light-green"
              }`}
            >
              <div className="text-center ">
                <div className="font-bold lg:text-[56px] md:text-[30px]">
                  {item.heading}
                </div>
                <div className="text-[24px] lg:text-[20px] ">
                  {item.subHeading}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Performance;
