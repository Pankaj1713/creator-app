import React, { useEffect, useState } from "react";
import { BottomMenu, PrivateHeader } from "../../../components/layout";
import { getAPI } from "../../../api/service";
import { APIS } from "../../../api/enpoints";
import FeedCard from "./feedCard";
import {
  GreenThemeIcon1,
  GreenThemeIcon2,
} from "../../../components/helpers/icon";
import Button from "../../../components/common/button";

const FEED_BUTTONS = [
  "All",
  "Exclusives",
  "Bronze subs",
  "Gold subs",
  "Video Call",
  "Silver subs",
];

const Feed = () => {
  const [posts, setPosts] = useState();
  const [selectedButton, setSelectedButton] = useState("All");

  useEffect(() => {
    getAPI(APIS.GET_POSTS, { limit: 10, page: 0 }).then((res) => {
      setPosts(res?.data);
    });
  }, []);
  const count = posts?.count;
  const postData = posts?.data;

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  return (
    <div className="bg-backgroundColor">
      <PrivateHeader />
      <div className="bg-white p-[15px] no-scrollbar gap-2 flex flex-nowrap whitespace-nowrap overflow-scroll">
        {FEED_BUTTONS.map((data, index) => (
          <Button
            key={index}
            className={`bg-none border-[1.5px] text-xs border-[#77707F] ${
              selectedButton === data ? "bg-primary text-white" : ""
            }`}
            onClick={() => handleButtonClick(data)}
          >
            {data}
          </Button>
        ))}
      </div>
      <div className="bg-white text-[#564D5F] px-4 flex items-center justify-between text-xs pb-[15px] mb-5">
        {count} Posts
        <div className="flex gap-x-2 items-center p-1 rounded-[2px] bg-greenThemeBgColor ">
          <GreenThemeIcon1 className={"cursor-pointer"} />
          <GreenThemeIcon2 className={"cursor-pointer"} />
        </div>
      </div>

      <div className="flex flex-col gap-y-5">
        {postData?.map((post, index) => (
          <FeedCard key={index} post={post} count={count} />
        ))}
      </div>
      <BottomMenu />
    </div>
  );
};

export default Feed;
