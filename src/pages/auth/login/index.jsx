import { Formik, Form } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import FormInput from "../../../components/common/inputs/formInput";
import Button from "../../../components/common/button";
import { IMAGES } from "../../../components/constants/assets";
import { APIS, postAPI } from "../../../api";
import Otp from "../otp";
import { PublicHeader } from "../../../components/layout";
import { toast } from "react-toastify";

const INITAIL_VALUES = {
  username: "",
};

const VALIDATION_SCHEMA = Yup.object().shape({
  username: Yup.string().required("Username is required"),
});

const Login = () => {
  const [id, setId] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [otpSent, setOtpSent] = useState(false);

  const handleSubmit = (values, { setSubmitting }) => {
    postAPI(APIS.LOGIN, values)
      .then((res) => {
        toast.success(res?.message);
        setId(res?.data?._id);
        setPhoneNumber(res?.data?.phoneNumber);
        setOtpSent(true);
      })
      .finally(() => setSubmitting(false));
  };

  return otpSent ? (
    <Otp phoneNumber={phoneNumber} id={id} />
  ) : (
    <>
      <PublicHeader showNavLinks={false} />
      <div className="flex justify-center items-center my-12">
        <div className="max-w-4xl w-full flex justify-center gap-x-6">
          <Formik
            initialValues={INITAIL_VALUES}
            onSubmit={handleSubmit}
            validationSchema={VALIDATION_SCHEMA}
          >
            {({ isSubmitting, touched, errors }) => (
              <Form className="w-full md:border border-[#cdc9ce] md:rounded-3xl px-5 md:px-8 pt-6 pb-8  md:w-[55%] ">
                <h1 className="font-bold text-4xl mb-2">Log In</h1>
                <p className="text-sm text-darkGray mb-4">
                  Welcome Back! Ready to Inspire?
                </p>
                <FormInput
                  name="username"
                  label="Enter Username"
                  placeholder="Enter Username"
                  isInvalid={touched.username && errors.username}
                  disabled={isSubmitting}
                />
                <div className="flex items-center justify-center">
                  <Button
                    className={"text-[16px] bg-accent w-full"}
                    disabled={isSubmitting}
                  >
                    LOGIN VIA OTP
                  </Button>
                </div>
                <div className="text-[16px] font-normal font-lato pt-[10px] text-center mb-4 ">
                  <span className="text-textBlack">New to Renown?</span>
                  <Link to="/signup" className="text-textViolet pl-2">
                    Signup
                  </Link>
                </div>
              </Form>
            )}
          </Formik>
          <div className="hidden md:w-[40%] md:flex">
            <img src={IMAGES.LOGINIMAGE} alt="Login Image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
