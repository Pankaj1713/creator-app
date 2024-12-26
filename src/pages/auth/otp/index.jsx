import React, { useState, useEffect } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "../../../components/common";
import OtpInput from "react-otp-input";
import { APIS, getAPI } from "../../../api";
import { PageHeader } from "../../../components/layout";
import { useDispatch } from "react-redux";
import { signupSuccess } from "../../../store/auth/actions";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../router/routes";
import { ErrorIcon } from "../../../components/helpers/icon";

const INITIAL_VALUES = {
  otp: "",
};

const VALIDATION_SCHEMA = Yup.object({
  otp: Yup.string()
    .min(4, "Must be at least 4 characters")
    .required("OTP is Required"),
});

const Otp = ({ id, phoneNumber }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [resendTimer, setResendTimer] = useState(30);

  useEffect(() => {
    let interval;
    if (resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [resendTimer]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  const onOtpSubmit = (payload, { setSubmitting }) => {
    getAPI(`${APIS.VERIFY_OTP}/${id}`, payload)
      .then((res) => {
        dispatch(signupSuccess(res?.data));
        if (res?.data?.profileCompleted) {
          navigate(ROUTES.DASHBOARD);
        } else {
          navigate(ROUTES.ONBOARD);
        }
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <>
      <PageHeader title="OTP Verification" />
      <div className="my-12">
        <div className="px-[15px]">
          <div className="md:flex text-left mt-10 mb-8 md:flex-col md:items-center">
            <div className="text-lighttextBlack text-[32px] font-medium">
              Verify OTP
            </div>
            <div className="font-lato">
              We've sent a 4 digit verification code to{" "}
              <b className="text-textBlack">{phoneNumber}</b>
            </div>
          </div>
          <Formik
            initialValues={INITIAL_VALUES}
            validationSchema={VALIDATION_SCHEMA}
            onSubmit={onOtpSubmit}
          >
            {({ values, setFieldValue, errors }) => (
              <Form>
                <div className="flex justify-center mt-4">
                  <OtpInput
                    value={values.otp}
                    onChange={(value) => setFieldValue("otp", value)}
                    numInputs={4}
                    inputType="tel"
                    shouldAutoFocus
                    renderInput={(props) => (
                      <input
                        {...props}
                        className={`text-xl w-16 h-16 border rounded-xl px-3 py-2 mr-2 text-center`}
                      />
                    )}
                  />
                </div>

                <ErrorMessage
                  name={"otp"}
                  render={(msg) => (
                    <div className="flex items-center justify-center gap-x-2 text-errorColor mt-1">
                      <ErrorIcon className="mr-2" />
                      <p className="text-errorColor text-sm">{msg}</p>
                    </div>
                  )}
                />
                <div className="font-lato flex text-[12px] mb-5 justify-center mt-2 text-gray-600">
                  {`Didn't receive code? ${
                    resendTimer > 0
                      ? `Resend in ${formatTime(resendTimer)}`
                      : ""
                  }`}
                  {resendTimer === 0 && (
                    <button
                      type="button"
                      className="ml-2 underline text-textViolet cursor-pointer"
                    >
                      Resend
                    </button>
                  )}
                </div>
                <div className="flex items-center justify-center">
                  <Button
                    className="bg-accent w-full xl:m-auto xl:w-[30%] md:w-[40%] "
                    type="submit"
                  >
                    Verify
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Otp;
