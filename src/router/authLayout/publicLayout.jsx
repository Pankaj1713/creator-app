import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { ROUTES } from "../routes";
import { PublicHeader, Footer } from "../../components/layout";

const PublicLayout = ({ showLayout = true }) => {
  const user = useSelector((state) => state?.auth);

  if (user?.accessToken && user?.profileCompleted) {
    return <Navigate to={ROUTES.DASHBOARD} />;
  }

  if (user?.accessToken && !user?.profileCompleted) {
    return <Navigate to={ROUTES.ONBOARD} />;
  }

  return (
    <div>
      {showLayout && <PublicHeader />}
      <Outlet />
      {showLayout && <Footer />}
    </div>
  );
};

export default PublicLayout;
