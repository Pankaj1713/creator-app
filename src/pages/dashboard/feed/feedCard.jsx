import React, { useEffect, useRef, useState } from "react";
import {
  BroadcastIcon,
  CloseIcon,
  CommentIcon,
  CopyLinkIcon,
  DeleteIcon,
  EditIcon,
  LikeIcon,
  OptionIcon,
  SendNotificationIcon,
} from "../../../components/helpers/icon";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";

import { useLocation } from "react-router-dom";
import { IMAGES } from "../../../components/constants/assets";

const COMMENTS_DATA = [
  {
    IMAGE: IMAGES.USERIMAGE,
    NAME: "Make zhao",
    USER_COMMENT: "Elegance never goes out of ",
    DELETE_USER: "Delete",
    BAN_USER: "Ban User ",
  },
  {
    IMAGE: IMAGES.USERIMAGE,
    NAME: "Make zhao",
    USER_COMMENT: "Elegance never goes out of ",
    DELETE_USER: "Delete",
    BAN_USER: "Ban User ",
  },
  {
    IMAGE: IMAGES.USERIMAGE,
    NAME: "Make zhao",
    USER_COMMENT: "Elegance never goes out of ",
    DELETE_USER: "Delete",
    BAN_USER: "Ban User ",
  },
];

const FeedCard = ({ post }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [menu, setMenu] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenu((prev) => !prev);
  const toggleModal = () => setModal((prev) => !prev);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div className="bg-white px-[15px] font-lato flex flex-col">
        <div className="flex text-[#2C2139] w-full justify-between items-start py-2">
          <div className="flex flex-col justify-between items-start">
            <div className="text-[14px]">{post?.caption || ""} </div>
            <div className="text-darkGray my-1 text-xs">
              {new Date(post?.createdAt).toDateString()}
            </div>
          </div>
          <div className="relative" ref={menuRef}>
            <OptionIcon
              onClick={toggleOptions}
              data-popover-target="profile-menu"
              className={`relative inline-block object-cover object-center rounded-full cursor-pointer`}
            />{" "}
            {showOptions && (
              <ul
                role="menu"
                data-popover="profile-menu"
                data-popover-placement="bottom"
                className="absolute bg-[#F7F1FF] !w-[350px] mr-3 text-textBlack right-0 z-10 flex min-w-[180px] flex-col gap-2 overflow-auto rounded-[15px] border border-blue-gray-50 p-3 font-sans text-sm font-normal shadow-lg shadow-blue-gray-500/10 focus:outline-none"
              >
                <button
                  role="menuitem"
                  className="flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                >
                  <EditIcon />
                  <p className="block font-roboto text-[16px] antialiased font-medium leading-normal text-inherit">
                    Edit
                  </p>
                </button>
                <button
                  role="menuitem"
                  className="flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                >
                  <CopyLinkIcon />
                  <p className="block font-roboto text-[16px] antialiased font-medium leading-normal text-inherit">
                    Copy Link
                  </p>
                </button>
                <button
                  role="menuitem"
                  className="flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                >
                  <SendNotificationIcon />
                  <p className="block whitespace-nowrap font-roboto text-[16px] antialiased font-medium leading-normal text-inherit">
                    Send Notifications
                  </p>
                </button>
                <button
                  role="menuitem"
                  className="flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                >
                  <BroadcastIcon />
                  <p className="block whitespace-nowrap font-roboto text-[16px] antialiased font-medium leading-normal text-inherit">
                    Broadcast Message
                  </p>
                </button>
                <button
                  role="menuitem"
                  className="flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                >
                  <DeleteIcon />
                  <p className="block font-roboto text-[16px] antialiased font-medium leading-normal text-inherit">
                    Delete
                  </p>
                </button>
              </ul>
            )}
          </div>
        </div>
        <div className="w-full h-[400px] object-contain ">
          <img
            className="w-full h-full"
            src={post?.post}
            height={100}
            width={400}
          />
        </div>
        <div className="text-[10px] mt-2 bg-bgColorViolet_300 w-[100px] h-5 flex items-center justify-center rounded-full text-primary">
          {post?.type}: ₹{post?.price || ""}
        </div>
        <div className="flex my-3 justify-between items-center">
          <div className="flex gap-x-[10px] text-md">
            <div className="flex gap-x-[5px] items-center">
              {" "}
              <LikeIcon /> 149{" "}
            </div>
            <div className="flex gap-x-[5px] items-center">
              {" "}
              <CommentIcon /> 0
            </div>
          </div>
          <div
            className="text-[#77717F] text-xs cursor-pointer"
            onClick={toggleMenu}
          >
            View All 0 Comments
          </div>
        </div>
        <input
          className="border-[1.5px] border-[#766F7E] text-[14px] my-2 rounded-full w-full h-[35px] py-2 px-3 text-[#77717F] leading-tight focus:outline-none focus:shadow-outline bg-pink-light"
          type="text"
          id="caption"
          name="name"
          placeholder="Type your comment..."
        />
      </div>
      <Drawer
        placement="bottom"
        open={menu}
        onClose={toggleMenu}
        className="p-4 font-lato rounded-t-[25px] mobileView left-auto h-auto"
        overlayProps={{ className: "mobileView" }}
      >
        <hr className="w-[10%] text-center h-1 m-auto border-none rounded  bg-borderColor mb-4" />
        <div className="mb-2  flex items-center justify-between">
          <Typography variant="h5" color="textBlue-gray">
            <div className="text-base font-lato">Comments (10)</div>
          </Typography>

          <IconButton variant="text" color="textBlue" onClick={toggleMenu}>
            <CloseIcon fill="textBlack" />
          </IconButton>
        </div>
        <div className="flex flex-col gap-y-5">
          {COMMENTS_DATA.map((user, index) => (
            <div key={index} className="">
              <div className="flex gap-x-2">
                <img
                  className="w-[30px] h-[30px]"
                  src={user.IMAGE}
                  alt="User"
                />
                <div className="flex flex-col gap-y-[5px] w-full">
                  <div className="text-[#77707F] text-[14px] ">
                    {user.NAME}{" "}
                  </div>
                  <div>{user.USER_COMMENT} </div>
                  <div className="flex gap-x-4">
                    <span className="text-xs cursor-pointer text-[#ED6054] ">
                      {user.DELETE_USER}{" "}
                    </span>
                    <span className="text-xs cursor-pointer text-[#564D5F]">
                      {" "}
                      {user.BAN_USER}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Drawer>
    </>
  );
};

export default FeedCard;
