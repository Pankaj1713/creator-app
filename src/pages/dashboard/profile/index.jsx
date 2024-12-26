import React, { useState } from "react";
import { IMAGES } from "../../../components/constants/assets";
import { Button } from "../../../components/common";
import { CrownIcon, InstagramIcon } from "../../../components/helpers/icon";
import { Link, useNavigate } from "react-router-dom";
import { BottomMenu, PrivateHeader } from "../../../components/layout";
import { useSelector } from "react-redux";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { ROUTES } from "../../../router/routes";

const TABS = ["MEDIA", "COLLABS"];

const Profile = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state?.auth);
  const [activeTab, setActiveTab] = useState(TABS[0]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className=" bg-backgroundColor">
      <PrivateHeader />
      <div className="max-w-[640px] flex flex-col gap-y-[20px] m-auto ">
        <div className=" py-[30px] bg-[#F1E8FA] px-5 ">
          <div>
            <div>
              <img src={IMAGES.PROFILECOVERIMAGE} alt="Cover Image" />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <div className="mt-[-35px] pl-3">
                <img
                  className="md:w-[72px] w-[72px]"
                  src={IMAGES.PROFILEIMAGE}
                  alt="Profile Image"
                />
              </div>
              <div className="flex justify-center mt-4 gap-x-3">
                <Button className="border-[1px] px-6 py-[3px]">Chat</Button>
                <Button
                  className="bg-primary px-6 py-[3px] text-textWhite"
                  onClick={() => navigate(ROUTES.EDIT_PROFILE)}
                >
                  Edit Profile
                </Button>
              </div>
            </div>
            <div className="py-[10px]">
              <div className="text-[20px] font-lato">
                {user?.fullName || "User Name"}
              </div>
              <div className="text-[12px] font-lato text-textGray">
                {user?.intro || ""}
              </div>
              <div className="pt-[10px]">
                <InstagramIcon />
              </div>
            </div>
          </div>
          <div className="flex justify-between mb-[15px] gap-x-3 items-center bg-[#DFC4FB] p-2 border rounded-[10px] border-greenThemeBorderColor">
            <div className="w-full">
              <div className="text-[16px] leading-5 font-semibold">
                Check my house tour vlog
              </div>
              <div className="text-[10px] text-darkGray">
                https://youtu.be/Ad24fdsd1...
              </div>
            </div>
            <div>
              <img className="" src={IMAGES.textVioletTHEMEIMAGE} alt="Image" />
            </div>
          </div>
          <div className="flex rounded-full  h-[30px] overflow-hidden">
            <div className="bg-textBlack  flex-1 flex items-center px-2 py-1 gap-x-1">
              <CrownIcon />
              <span className="text-[14px] text-textWhite">
                Get full access to the content
              </span>
            </div>
            <span className="bg-gradient-to-r from-[#FEE9BA] to-[#C6984B] cursor-pointer py-1 px-2">
              Subscribe
            </span>
          </div>
        </div>
        <div className="bg-white">
          <Tabs value={activeTab}>
            <TabsHeader
              className="rounded-none border-textBlue bg-transparent p-3"
              indicatorProps={{
                className:
                  "bg-transparent mt-3 border-b-4 border-darkGray shadow-none rounded-none",
              }}
            >
              {TABS.map((tab, index) => (
                <Tab
                  key={index}
                  value={tab}
                  onClick={() => setActiveTab(tab)}
                  className={activeTab === tab ? "text-darkGray" : ""}
                >
                  {tab}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody>
              <TabPanel value={TABS[0]} className="z-0 p-0">
                <div className="flex flex-col bg-backgroundColor py-8 font-lato items-center">
                  <div>
                    <img
                      className="w-[175px]"
                      src={IMAGES.NOIMAGE}
                      alt="Image"
                    />
                  </div>
                  <div className="text-center">
                    <div className="text-[20px]">No Media!</div>
                    <div className="text-[12px] py-3 text-textGray">
                      You have not posted anything yet!
                    </div>
                  </div>
                  <Button className="bg-primary font-semibold text-textWhite text-[14px]">
                    Post Now
                  </Button>
                </div>
              </TabPanel>
              <TabPanel value={TABS[1]} className="z-0 p-0">
                <div className="flex font-lato flex-col bg-backgroundColor py-8 items-center ">
                  <div>
                    <img
                      className="w-[175px]"
                      src={IMAGES.NODOCUMENT}
                      alt="Image"
                    />
                  </div>
                  <div className="text-center">
                    <div className="text-[20px]">No Services!</div>
                    <div className="text-[12px] py-3 text-textGray">
                      You’ve not added any services yet!
                    </div>
                  </div>
                  <Button className="bg-primary font-semibold text-textWhite text-[14px]">
                    Add a Service
                  </Button>
                </div>
              </TabPanel>
            </TabsBody>
          </Tabs>
        </div>
      </div>
      <BottomMenu />
    </div>
  );
};

export default Profile;
