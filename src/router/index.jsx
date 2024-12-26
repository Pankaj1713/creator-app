import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home";
import Quote from "../pages/quote";
import Benefits from "../pages/benefits";
import Faqs from "../pages/faqs";
import Login from "../pages/auth/login";
import Signup from "../pages/auth/signup";
import Privacy from "../pages/privacy";
import Terms from "../pages/terms";
import { ROUTES } from "./routes";
import Onboarding from "../pages/auth/onboarding";
import Feed from "../pages/dashboard/feed";
import Chat from "../pages/dashboard/chat";
import Profile from "../pages/dashboard/profile";
import { PublicLayout, PrivateLayout, OnboardLayout } from "./authLayout";
import Dashboard from "../pages/dashboard";
import EditProfile from "../pages/dashboard/profile/editProfile";
import Post from "../pages/dashboard/post";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.QUOTE} element={<Quote />} />
          <Route path={ROUTES.BENEFITS} element={<Benefits />} />
          <Route path={ROUTES.FAQS} element={<Faqs />} />
          <Route path={ROUTES.PRIVACY} element={<Privacy />} />
          <Route path={ROUTES.TERMS} element={<Terms />} />
        </Route>

        <Route path="/" element={<PublicLayout showLayout={false} />}>
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.SIGNUP} element={<Signup />} />
        </Route>

        <Route path="/" element={<OnboardLayout />}>
          <Route path={ROUTES.ONBOARD} element={<Onboarding />} />
        </Route>

        <Route path="/" element={<PrivateLayout />}>
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
          <Route path={ROUTES.FEED} element={<Feed />} />
          <Route path={ROUTES.CHAT} element={<Chat />} />
          <Route path={ROUTES.PROFILE} element={<Profile />} />
          <Route path={ROUTES.EDIT_PROFILE} element={<EditProfile />} />
          <Route path={ROUTES.UPLOAD_POST} element={<Post />} />
        </Route>

        <Route path="*" element={<Navigate to={ROUTES.LOGIN} />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
