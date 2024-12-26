import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  ChatIcon,
  CloseIcon,
  FeedIcon,
  HomeIcon,
  PostIcon,
  ProfileIcon,
} from "../../helpers/icon";
import { ROUTES } from "../../../router/routes";
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

import { IMAGES } from "../../constants/assets";
import { APIS, postAPI } from "../../../api";
import { toast } from "react-toastify";

const UPLOAD_POSTS = [
  {
    images: IMAGES.POSTIMAGE,
    heading: "Create a post",
    sub_heading: "Upload photos/videos",
  },
  // {
  //   images: IMAGES.UPLOADIMAGE,
  //   heading: "Upload an Image",
  //   sub_heading: "Choose from your gallery",
  // },
  {
    images: IMAGES.LIVESTREAMIMAGE,
    heading: "Live Stream",
    sub_heading: "Go live or schedule for later",
  },
];

const MenuItem = ({ active, to, label, Icon }) => (
  <Link
    to={to}
    className={`cursor-pointer w-[60px] md:w-[100px] md:h-[70px] pt-2 md:pt-[20px] flex flex-col items-center gap-y-2 ${
      active === to
        ? "bg-gradient-to-b from-linearColor2 to-linearColor1 text-textBlack font-medium border-textBlack border-b-2"
        : ""
    }`}
  >
    <div className="flex flex-col items-center">
      <Icon />
      <span>{label}</span>
    </div>
  </Link>
);

const BottomMenu = () => {
  const [menu, setMenu] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setMenu((prev) => !prev);
  const toggleModal = () => setModal((prev) => !prev);

  return (
    <>
      <div className="relative bg-textWhite z-20 pt-[80px]">
        <div className="mobileView bg-textWhite text-lightGray text-[12px] flex justify-between items-center fixed bottom-0 px-5">
          <MenuItem
            active={pathname}
            label="Home"
            to={ROUTES.DASHBOARD}
            Icon={HomeIcon}
          />
          <MenuItem
            active={pathname}
            label="Feed"
            to={ROUTES.FEED}
            Icon={FeedIcon}
          />
          <li className="cursor-pointer flex flex-col items-center gap-y-2">
            <div
              className="flex absolute bottom-[20px] flex-col items-center"
              onClick={toggleMenu}
            >
              <span>{PostIcon({})}</span>
            </div>
          </li>
          <MenuItem
            active={pathname}
            label="Chat"
            to={ROUTES.CHAT}
            Icon={ChatIcon}
          />
          <MenuItem
            active={pathname}
            label="Profile"
            to={ROUTES.PROFILE}
            Icon={ProfileIcon}
          />
        </div>
      </div>
      <Drawer
        placement="bottom"
        open={menu}
        onClose={toggleMenu}
        className="p-4 font-lato rounded-t-[25px] mobileView left-auto h-auto"
        overlayProps={{ className: "mobileView" }}
      >
        <hr className="w-[10%] text-center h-1 m-auto border-none rounded  bg-borderColor mb-4" />
        {/* <div className="mb-2 flex items-center justify-between">
          <Typography variant="h5" color="textBlue-gray">
            <div className="text-base font-lato">Create</div>
          </Typography>

          <IconButton variant="text" color="textBlue" onClick={toggleMenu}>
            <CloseIcon fill="textBlack" />
          </IconButton>
        </div> */}
        <div className="flex flex-col gap-y-[15px]">
          {UPLOAD_POSTS.map((data, index) => (
            <div
              onClick={() => navigate(ROUTES.UPLOAD_POST)}
              key={index}
              className="flex w-full cursor-pointer items-center p-[10px] rounded-[8px] border-borderColor gap-x-[10px] border gap-y-3 hover:bg-bgColorViolet_300"
            >
              <div>
                <img className="w-10 h-10" src={data.images} alt="" />
              </div>
              <div>
                <div className="text-sm font-semibold">{data.heading}</div>
                <div className="text-xs text-gray-600">{data.sub_heading}</div>
              </div>
            </div>
          ))}
        </div>
      </Drawer>
    </>
  );
};

export default BottomMenu;
