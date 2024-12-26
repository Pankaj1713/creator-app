import React, { useState } from "react";
import {
  ListIcon,
  MenuIcon,
  CloseIcon,
  NotificationIcon,
} from "../../helpers/icon";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOutSuccess } from "../../../store/auth/actions";
import { Drawer } from "@material-tailwind/react";
import { IMAGES } from "../../constants/assets";

const PrivateHeader = () => {
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="pb-[38px]">
      <div className="mobileView bg-textBlack fixed w-full flex justify-between py-3 px-[15px]">
        <div className="cursor-pointer" onClick={openMenu}>
          <MenuIcon />
        </div>
        <div className="cursor-pointer">
          <NotificationIcon />
        </div>
      </div>
      <Drawer
        className="cursor-pointer"
        open={menuOpen}
        onClose={closeMenu}
        overlayProps={{ className: "mobileView" }}
      >
        <div className={" bg-textBlack p-[15px]"}>
          <CloseIcon onClick={closeMenu} />
          <img src={IMAGES.LOGO} className="h-10 mt-6" />
        </div>
        <div className="bg-textWhite px-[15px] flex flex-col">
          <Link to="#" className="gap-x-2 py-3 flex items-center">
            <ListIcon /> Manage Orders
          </Link>
          <hr className="text-white" />
          <Link to="#" className="gap-x-2 py-3 flex items-center">
            <ListIcon /> Order History
          </Link>
          <hr className="text-white" />
          <Link to="#" className="gap-x-2 py-3 flex items-center">
            <ListIcon /> Payout Settings
          </Link>
          <hr className="text-white" />
          <Link to="#" className="gap-x-2 py-3 flex items-center">
            <ListIcon /> Insights
          </Link>
          <hr className="text-white" />
          <Link to="#" className="gap-x-2 py-3 flex items-center">
            <ListIcon /> Send Notifications
          </Link>
          <hr className="text-white" />
          <Link to="#" className="gap-x-2 py-3 flex items-center">
            <ListIcon /> Terms of Service
          </Link>
          <hr className="text-white" />
          <Link to="#" className="gap-x-2 py-3 flex items-center">
            <ListIcon /> Support
          </Link>
          <hr className="text-white" />
          <div
            className="gap-x-2 py-3 flex items-center cursor-pointer"
            onClick={() => dispatch(logOutSuccess())}
          >
            <ListIcon /> Logout
          </div>
          <hr className="text-white" />
        </div>
      </Drawer>
    </div>
  );
};

export default PrivateHeader;
