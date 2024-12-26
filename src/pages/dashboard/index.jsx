import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOutSuccess } from "../../store/auth/actions";
import { BottomMenu, PrivateHeader } from "../../components/layout";
import {
  BalanceIcon,
  TextBlackIcon,
  CopyIcon,
  DangerIcon,
  EarningIcon,
  ForwardArrowIcon,
  OrderIcon,
  PageVisitIcon,
  RupeesIcon,
  SendIcon,
  SubscribersIcon,
} from "../../components/helpers/icon";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { toast } from "react-toastify";
import { copyToClipboard } from "../../utils/helper";

const TABS = ["Updates", "Analytics"];

const Dashboard = () => {
  const user = useSelector((state) => state?.auth);
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const copyUrl = () => {
    copyToClipboard(user?.publishedUrl);
    toast.success("Url copied!");
  };

  return (
    <div>
      <PrivateHeader />
      <div className="font-lato mt-5">
        <div className="flex justify-between px-5 pb-4">
          <div className="font-semibold">Your App Link</div>
          <div className="flex items-center gap-x-[5px]">
            <span className="text-primary text-[14px]">How It Works?</span>
            <span>
              {" "}
              <TextBlackIcon />{" "}
            </span>
          </div>
        </div>
        <div className="flex justify-between px-5 pb-5">
          <input
            className="border-dashed border-gray-300 border-2 text-black text-[14px] h-10 w-[60%] rounded-[10px] px-3"
            type="text"
            disabled
            value={user?.publishedUrl || "https://url.com"}
          />
          <div className="flex gap-x-3">
            <CopyIcon className="cursor-pointer" onClick={copyUrl} />
            <SendIcon className="cursor-pointer" />
          </div>
        </div>
        <div className="px-5">
          <div className="pb-3">Overview</div>
          <div className="bg-light-pink rounded-[10px] p-[10px] ">
            <div className="flex justify-between pb-2">
              <div className="flex items-center gap-x-[10px]">
                <div>
                  {" "}
                  <BalanceIcon />{" "}
                </div>
                <div className="">
                  <span className="text-[10px] text-darkGray">
                    Available Balance
                  </span>
                  <span className="flex items-center gap-x-[5px]">
                    {" "}
                    <RupeesIcon /> 2.1k
                  </span>
                </div>
              </div>
              <div className="flex items-center cursor-pointer gap-x-[5px]">
                <span className="text-[14px] text-primary">History</span>
                <span>
                  <ForwardArrowIcon />
                </span>
              </div>
            </div>
            <div className="flex items-center text-[10px] gap-x-[5px] bg-light-green rounded-[5px] border border-solid border-borderColor py-[5px] px-3">
              <span className="bg-accent rounded-[100%] flex items-center justify-center w-5 h-5">
                <RupeesIcon />
              </span>
              <span className="text-darkGray">Next payout will be on:</span>
              <span className="text-textBlack">28th Mar 2024</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 mt-[10px] px-5 gap-[10px]">
          <div className="flex items-center gap-x-[10px] border border-solid border-borderColor rounded-[10px] p-[10px]">
            <div>
              <PageVisitIcon />
            </div>
            <div className="flex flex-col">
              <span className=" ">3.2k</span>
              <span className="text-[10px] text-darkGray">Page Visits</span>
            </div>
          </div>
          <div className="flex items-center gap-x-[10px] border border-solid border-borderColor rounded-[10px] p-[10px]">
            <div>
              <SubscribersIcon />
            </div>
            <div className="flex flex-col">
              <span className=""> 10</span>
              <span className="text-[10px] text-darkGray">Subscribers</span>
            </div>
          </div>
          <div className="flex items-center gap-x-[10px] border border-solid border-borderColor rounded-[10px] p-[10px]">
            <div>
              <OrderIcon />
            </div>
            <div className="flex flex-col">
              <span className="">51</span>
              <span className="text-[10px] text-darkGray">Orders</span>
            </div>
          </div>
          <div className="flex items-center gap-x-[10px] border border-solid border-borderColor rounded-[10px] p-[10px]">
            <div>
              <EarningIcon />
            </div>
            <div className="flex flex-col">
              <span className="flex items-center gap-x-[3px]">
                {" "}
                <RupeesIcon /> 5.1k
              </span>
              <span className="text-[10px] text-darkGray">Total Earning</span>
            </div>
          </div>
        </div>
        <div className="w-full h-10 bg-backgroundColor my-5"></div>

        <Tabs value={activeTab}>
          <TabsHeader
            className="rounded-none border-textBlue bg-transparent px-5"
            indicatorProps={{
              className:
                "bg-transparent border-b-4 border-darkGray shadow-none rounded-none",
            }}
          >
            {TABS.map((tab, index) => (
              <Tab
                key={index}
                value={tab}
                onClick={() => setActiveTab(tab)}
                className={`[&>div]:z-0 ${
                  activeTab === tab ? "" : "text-darkGray"
                }`}
              >
                {tab}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            <TabPanel value={TABS[0]} className="z-0 ">
              <div className="">
                <div className="pb-3">
                  <span className="flex text-[14px] gap-[5px] items-center">
                    <DangerIcon /> Incomplete Profile
                  </span>
                  <div className="text-[12px] text-darkGray">
                    Your profile is 80% complete. Fill in the missing details to
                    enhance your visibility!
                  </div>
                  <Link className="text-primary cursor-pointer text-[14px] flex items-center gap-x-[5px] justify-end">
                    Complete Profile
                    <span>
                      <ForwardArrowIcon />
                    </span>
                  </Link>
                </div>
                <hr className="text-borderColor" />
                <div className="py-3">
                  <span className="flex text-[14px] gap-[5px] items-center">
                    <DangerIcon /> Pending Order
                  </span>
                  <div className="text-[12px] text-darkGray">
                    You have 1 pending order awaiting your action. Complete the
                    order now.
                  </div>
                  <Link className="text-primary cursor-pointer text-[14px] flex items-center gap-x-[5px] justify-end">
                    Review Order
                    <span>
                      <ForwardArrowIcon />
                    </span>
                  </Link>
                </div>
                <hr className="text-borderColor" />
                <div className="pb-3 mt-3">
                  <span className="flex text-[14px] gap-[5px] items-center">
                    <DangerIcon /> Livestream Reminder
                  </span>
                  <div className="text-[12px] text-darkGray">
                    Your live stream starts in 24 hours. Last check to ensure
                    everything is set!
                  </div>
                  <Link className="text-primary cursor-pointer text-[14px] flex items-center gap-x-[5px] justify-end">
                    Prep Now
                    <span>
                      <ForwardArrowIcon />
                    </span>
                  </Link>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={TABS[1]} className="z-0">
              <div className=""></div>
            </TabPanel>
          </TabsBody>
        </Tabs>
      </div>
      <BottomMenu />
    </div>
  );
};

export default Dashboard;
