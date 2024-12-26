import { Formik, Form, ErrorMessage } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import FormInput from "../../../components/common/inputs/formInput";
import Button from "../../../components/common/button";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { IMAGES } from "../../../components/constants/assets";
import { ErrorIcon } from "../../../components/helpers/icon";
import { APIS, postAPI } from "../../../api";
import { toast } from "react-toastify";
import { PublicHeader } from "../../../components/layout";
import Otp from "../otp";

const INITIAL_VALUES = {
  email: "",
  phoneNumber: "",
  username: "",
  // referralCode: "",
};

const VALIDATION_SCHEMA = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phoneNumber: Yup.string().required("Phone number is required"),
  username: Yup.string().required("username is required"),
  // referralCode: Yup.string().nullable(),
});

const SignUp = () => {
  const [id, setId] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [otpSent, setOtpSent] = useState(false);

  const handleSubmit = (values, { setSubmitting }) => {
    setPhoneNumber(values?.phoneNumber);

    postAPI(APIS.SIGNUP, values)
      .then((res) => {
        toast.success(res?.message);
        setId(res?.data?._id);
        setOtpSent(true);
      })
      .finally(() => setSubmitting(false));
  };

  return otpSent ? (
    <Otp id={id} phoneNumber={phoneNumber} />
  ) : (
    <>
      <PublicHeader showNavLinks={false} />
      <div className="flex justify-center items-center my-12">
        <div className="max-w-4xl w-full flex justify-center gap-x-6">
          <Formik
            onSubmit={handleSubmit}
            initialValues={INITIAL_VALUES}
            validationSchema={VALIDATION_SCHEMA}
          >
            {({ isSubmitting, touched, errors, values, setFieldValue }) => (
              <Form className="rounded-3xl md:border border-[#cdc9ce] px-5 pt-6 pb-8 w-full md:w-[55%] ">
                <h1 className="font-bold  text-4xl mb-2">Create An Account</h1>
                <p className="text-sm text-darkGray mb-4">
                  Join CreatorAPP Today. Unleash Your Potential.
                </p>
                <FormInput
                  name="email"
                  label="Email Address"
                  placeholder="Enter Email Address"
                  isInvalid={touched.email && errors.email}
                />
                <div className="flex mb-4">
                  <div style={{ width: "100%" }}>
                    <label
                      htmlFor="phoneNumber"
                      className="block text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <PhoneInput
                      id="phoneNumber"
                      international
                      defaultCountry="IN"
                      value={values?.phoneNumber}
                      onChange={(value) =>
                        setFieldValue("phoneNumber", value || "")
                      }
                      className={`mt-1 [&>*]:border-[1.5px] flex  w-full shadow-sm sm:text-sm rounded-md ${
                        touched.phoneNumber && errors.phoneNumber
                          ? "[&>*]:border-errorColor"
                          : "[&>*]:border-darkGray"
                      }`}
                    />
                    <ErrorMessage
                      name="phoneNumber"
                      component={({ children }) => (
                        <div className="flex gap-x-[5px] items-center mt-1">
                          <ErrorIcon />
                          <div className="text-errorColor">{children}</div>
                        </div>
                      )}
                    />
                  </div>
                </div>

                <FormInput
                  name="username"
                  label="Instagram Username"
                  placeholder="Enter Instagram Username"
                  isInvalid={touched.username && errors.username}
                />
                {/* <FormInput
                name="referralCode"
                label="Referral Code (Optional)"
                placeholder="Enter Referral Code"
              /> */}

                <div className="hidden md:text-[10px] mb-4">
                  *By clicking Sign Up, you agree to our
                  <Link to="#" className="text-textBlue-light">
                    Terms, Privacy Policy
                  </Link>
                  and
                  <Link to="#" className="text-textBlue-light">
                    Platform Guidelines.
                  </Link>
                </div>
                <div className="flex items-center justify-center">
                  <Button
                    type="submit"
                    className="bg-accent w-full"
                    disabled={isSubmitting}
                  >
                    CREATE ACCOUNT
                  </Button>
                </div>
                <div className="text-[16px] font-lato md:text-[20px] pt-[10px] text-center mb-4">
                  Have an account ?
                  <Link to="/login" className="text-textViolet pl-2">
                    Login
                  </Link>
                </div>
              </Form>
            )}
          </Formik>
          <div className="hidden h-[590px] md:flex">
            <img src={IMAGES.SIGNUPIMAGE} alt="Signup Image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
