import React from "react";
import { IMAGES } from "../../../../components/constants/assets";

const Monetization = () => {
  return (
    <div className="flex flex-col items-center my-[50px] bg-[#F7F4FA] px-[20px] md:my-[90px]">
      <div className="py-10 md:py-[90px] flex flex-col gap-y-5 ">
        <div className="text-textBlack text-[32px] md:text-[64px] font-semibold md:font-medium text-center">
          Your Path to Monetization
        </div>
        <div className="w-full flex flex-col gap-y-5">
          <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row items-center gap-y-[15px] gap-x-[35px] justify-center">
            <div className="w-full max-w-[500px]">
              {" "}
              <img
                src={IMAGES.LANDINGIMAGE}
                alt="Landing Image"
                className="object-scale-down w-full"
              />{" "}
            </div>
            <div className="max-w-[700px]">
              <div className="font-medium pb-1 leading-[30px] md:w-[680px] w-[300px] text-[24px] lg:text-[46px] xl:text-[56px] lg:leading-[56px] md:text-[28px] ">
                {" "}
                Create Your Personalized{" "}
                <span className="text-textBlue">Landing Page</span> in Seconds{" "}
              </div>
              <div className="text-[16px] md:text-[20px] font-lato text-darkGray">
                Register, fill in your details, and voila! Your personal fan app
                is ready to share with the world.
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row-reverse md:flex-row-reverse lg:flex-row-reverse xl:flex-row-reverse 2xl:flex-row-reverse items-center gap-y-[15px] gap-x-[35px] justify-center">
            <div className="w-full max-w-[500px]">
              {" "}
              <img
                src={IMAGES.REVENUEIMAGE}
                alt="Revenue Image"
                className="object-scale-down w-full"
              />{" "}
            </div>
            <div className="max-w-[700px]">
              <div className="font-medium pb-1 leading-[30px] md:w-[680px] w-[300px] text-[24px] lg:text-[46px] xl:text-[56px] lg:leading-[56px] md:text-[28px] ">
                {" "}
                Diverse <span className="text-textBlue">
                  Revenue Streams{" "}
                </span>{" "}
                at Your Fingertips{" "}
              </div>
              <div className="text-[16px] md:text-[20px] font-lato text-darkGray">
                Subscriptions, exclusive content, live streaming, and direct
                messaging. Your creativity, your revenue.
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row items-center gap-y-[15px] gap-x-[35px] justify-center">
            <div className="w-full max-w-[500px]">
              {" "}
              <img
                src={IMAGES.COMMUNITYIMAGE}
                alt="Community Image"
                className="object-scale-down w-full"
              />{" "}
            </div>
            <div className="max-w-[700px]">
              <div className="font-medium pb-1 leading-[30px] md:w-[680px] w-[300px] text-[24px] lg:text-[46px] xl:text-[56px] lg:leading-[56px] md:text-[28px] ">
                {" "}
                Build a <span className="text-textBlue">Community</span> That
                Celebrates You{" "}
              </div>
              <div className="text-[16px] md:text-[20px] font-lato text-darkGray">
                Connect deeply with your followers. Share your stories, your
                way, and foster a loyal fanbase eager to support you.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monetization;
