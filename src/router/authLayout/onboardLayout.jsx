import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "../routes";
import { useSelector } from "react-redux";

const OnboardLayout = () => {
  const accessToken = useSelector((state) => state?.auth?.accessToken);

  if (accessToken) {
    return <Outlet />;
  }
  return <Navigate to={ROUTES.LOGIN} />;
};

export default OnboardLayout;
