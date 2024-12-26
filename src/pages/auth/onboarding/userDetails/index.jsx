import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Button from "../../../../components/common/button";
import FormInput from "../../../../components/common/inputs/formInput";
import { APIS, putAPI } from "../../../../api";
import { ErrorIcon } from "../../../../components/helpers/icon";
import { useSelector } from "react-redux";

const INITIAL_VALUES = {
  fullName: "",
  gender: "MALE",
  dob: "",
};

const VALIDATION_SCHEMA = Yup.object({
  fullName: Yup.string().required("Full name is required"),
  gender: Yup.string().required("Gender is required"),
  dob: Yup.date()
    .required("Date of birth is required")
    .test("age", "Age must be at least 18 years old", function (value) {
      const dob = new Date(value);
      const now = new Date();
      const diff = now.getTime() - dob.getTime();
      const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));

      return age >= 18;
    }),
});

const UserDetails = ({ onSuccess }) => {
  const user = useSelector((state) => state?.auth);

  const onSubmit = (values, { setSubmitting }) => {
    putAPI(`${APIS.UPDATE_BASIC_INFO}`, values)
      .then((res) => {
        onSuccess(res?.data);
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={VALIDATION_SCHEMA}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, values, setFieldValue, touched, errors }) => (
        <Form className="py-[10px] px-[15px] md:p-5">
          <div className="text-lighttextBlack mb-6 leading-10 md:text-center text-[32px] font-medium">
            Help us know you better!
          </div>
          <div className="max-w-[600px] m-auto">
            <FormInput
              name="fullName"
              label="Full Name"
              placeholder="Enter Full Name"
              isInvalid={touched.fullName && errors.fullName}
            />
            <div className="mb-6">
              <label htmlFor="gender">Gender</label>
              <div className="flex mt-2 gap-x-[10px]">
                <Button
                  type="button"
                  className={`rounded-[5px] border py-[10px] flex items-center px-[30px] ${
                    values.gender === "MALE"
                      ? "bg-textViolet text-textWhite"
                      : "bg-textWhite text-darkGray"
                  }`}
                  onClick={() => setFieldValue("gender", "MALE")}
                >
                  Male
                </Button>
                <Button
                  type="button"
                  className={`rounded-[5px] border py-[10px] flex items-center px-[30px] ${
                    values.gender === "FEMALE"
                      ? "bg-textViolet text-textWhite"
                      : "bg-textWhite text-darkGray"
                  }`}
                  onClick={() => setFieldValue("gender", "FEMALE")}
                >
                  Female
                </Button>
                <Button
                  type="button"
                  className={`rounded-[5px] border py-[10px] flex items-center px-[30px] ${
                    values.gender === "OTHERS"
                      ? "bg-textViolet text-textWhite"
                      : "bg-textWhite text-darkGray"
                  }`}
                  onClick={() => setFieldValue("gender", "OTHERS")}
                >
                  Others
                </Button>
              </div>
              {touched.gender && errors.gender && (
                <div className="flex items-center gap-x-[5px]">
                  <ErrorIcon />
                  <div className="text-errorColor">{errors.gender}</div>
                </div>
              )}
            </div>

            <FormInput
              type="date"
              name="dob"
              label="Date of birth"
              isInvalid={touched.dob && errors.dob}
            />
          </div>
          <div className="flex justify-center relative">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="text-[14px] fixed bg-accent w-[94%] md:w-[40%] bottom-[20px] mt-1"
            >
              PROCEED
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default UserDetails;
