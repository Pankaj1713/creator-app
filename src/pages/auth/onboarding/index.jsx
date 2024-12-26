import React, { useState } from "react";
import Categories from "./userCategory";
import SocialMedia from "./socialMedia";
import { useDispatch, useSelector } from "react-redux";
import { signupSuccess } from "../../../store/auth/actions";
import { useNavigate } from "react-router-dom";
import UserDetails from "./userDetails";
import PageHeader from "../../../components/layout/header/pageHeader";
import { ROUTES } from "../../../router/routes";
import { IMAGES } from "../../../components/constants/assets";

const STEPS = {
  USER_DETAILS: 2,
  USER_CATEGORY: 3,
  SOCIAL_MEDIA: 4,
};

const Onboarding = () => {
  const user = useSelector((state) => state?.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [step, setStep] = useState(user?.stepToFill || STEPS.USER_DETAILS);
  const [loading, setLoading] = useState(false);

  const onSignupSuccess = (data) => {
    setLoading(true);
    setTimeout(() => {
      dispatch(signupSuccess(data || user));
      navigate(ROUTES.DASHBOARD);
      setLoading(false);
    }, 2000);
  };

  return loading ? (
    <div className="h-[100vh] flex flex-col items-center justify-center">
      <img src={IMAGES.STAR_LOGO} height={200} />
      <span className="mt-6">Creating your profile....</span>
    </div>
  ) : (
    <div>
      <PageHeader title="Create Profile" />
      {step === STEPS.USER_DETAILS && (
        <UserDetails
          onSuccess={(data) => {
            dispatch(signupSuccess(data));
            setStep(STEPS.USER_CATEGORY);
          }}
        />
      )}
      {step === STEPS.USER_CATEGORY && (
        <Categories
          onSuccess={(data) => {
            dispatch(signupSuccess(data));
            setStep(STEPS.SOCIAL_MEDIA);
          }}
        />
      )}
      {step === STEPS.SOCIAL_MEDIA && (
        <SocialMedia onSuccess={onSignupSuccess} />
      )}
    </div>
  );
};

export default Onboarding;
