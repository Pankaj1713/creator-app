import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "../routes";
import { useSelector } from "react-redux";

const PrivateLayout = () => {
  const user = useSelector((state) => state?.auth);

  if (user?.accessToken && user?.profileCompleted) {
    return (
      <div className="mobileView">
        <Outlet />
      </div>
    );
  }
  return <Navigate to={ROUTES.LOGIN} />;
};

export default PrivateLayout;
