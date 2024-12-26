import React, { useMemo, useRef, useState } from "react";
import { LeftArrowIcon } from "../../../../components/helpers/icon";
import Button from "../../../../components/common/button";
import { IMAGES } from "../../../../components/constants/assets";
import { useDispatch, useSelector } from "react-redux";
import FormInput from "../../../../components/common/inputs/formInput";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import SocialFields from "../../../../components/common/socialFields";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../router/routes";
import { APIS, putAPI } from "../../../../api";
import { toast } from "react-toastify";
import { signupSuccess } from "../../../../store/auth/actions";

const THEME_COLORS = [
  {
    value: "#9933FF",
    color: "bg-[#9933FF]",
  },
  {
    value: "#FF3358",
    color: "bg-[#FF3358]",
  },
  {
    value: "#3391FF",
    color: "bg-[#3391FF]",
  },
  {
    value: "#FFA133",
    color: "bg-[#FFA133]",
  },
];

const VALIDATION_SCHEMA = Yup.object().shape({
  fullName: Yup.string().required("Fullname is required"),
});

const EditProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formRef = useRef();
  const user = useSelector((state) => state?.auth);

  const initialValues = useMemo(() => {
    return {
      themeColor: user?.themeColor || "",
      fullName: user?.fullName || "",
      intro: user?.intro || "",
      facebook: user?.socialId?.fb || "",
      instagram: user?.socialId?.instagram || "",
      twitter: user?.socialId?.twitter || "",
    };
  }, [user]);

  const handleSubmit = (values) => {
    const payload = {
      fullName: values?.fullName,
      intro: values?.intro,
      gender: user?.gender,
      themeColor: values?.themeColor,
      highLights: [
        // {
        //   type: "Add type of highlights",
        //   value: "Value of highlights according to type should be added",
        // },
      ],
      socials: {
        instagram: values?.instagram,
        fb: values?.facebook,
        twitter: values?.twitter,
        // snapchat: "Add your snapchat username",
        // linkedIn: "Add your linkedin username",
        // youtube: "Add your youtube username",
      },
    };

    putAPI(APIS.EDIT_PROFILE, payload).then((res) => {
      dispatch(
        signupSuccess({ ...res?.data, subscription: user?.subscription })
      );
      toast.success(res?.message);
      navigate(ROUTES.PROFILE);
    });
  };

  const saveHandler = () => {
    if (formRef.current) {
      formRef.current.handleSubmit();
    }
  };

  return (
    <div className="relative">
      <div className="mobileView fixed top-0 flex justify-between items-center py-4 px-2 w-full bg-[#190033]">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => navigate(ROUTES.PROFILE)}
        >
          <LeftArrowIcon />
          <span className="text-textWhite text-xl font-semibold">
            Edit Profile
          </span>
        </div>
        <Button
          className="bg-accent text-textBlack rounded-full text-[14px]"
          onClick={saveHandler}
          type="submit"
        >
          Save
        </Button>
      </div>
      <div className="p-4 px-[15px] max-w-[640px] m-auto mt-20">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={VALIDATION_SCHEMA}
          enableReinitialize
          innerRef={formRef}
        >
          {({ touched, errors, values, setFieldValue, handleChange }) => (
            <Form>
              <div>
                <div>
                  <img src={IMAGES.EDITPROFILECOVERIMAGE} alt="Cover Image" />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <div className="mt-[-35px] pl-3">
                    <img
                      className="md:w-[72px] w-[72px]"
                      src={IMAGES.EDITPROFILEIMAGE}
                      alt="Profile Image"
                    />
                  </div>
                  <div className="text-darkGray flex gap-x-3 mt-5 items-center">
                    <span>Theme:</span>
                    {THEME_COLORS.map((theme, index) => (
                      <div
                        key={index}
                        className={`border rounded-full p-1 ${
                          values.themeColor === theme.value
                            ? "border-textBlack"
                            : "border-borderColor"
                        } `}
                        onClick={() => setFieldValue("themeColor", theme.value)}
                      >
                        <div className={`${theme.color} p-2 rounded-full`} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="py-[10px]">
                  <div className="text-[20px] flex flex-col font-lato">
                    <label className="text-darkGray text-[16px]" htmlFor="#">
                      Full Name
                    </label>
                    <FormInput
                      name="fullName"
                      className={`w-full border-borderColor`}
                      value={values.fullName}
                      isInvalid={touched.fullName && errors.fullName}
                    />
                    <div className="flex flex-col gap-y-3">
                      <label className="text-darkGray text-[16px]" htmlFor="#">
                        Your Intro
                      </label>
                      <textarea
                        name="intro"
                        className="border-2 text-[16px] p-3 w-full h-[110px] rounded-[10px] border-borderColor resize-none"
                        placeholder="Tell us more about yourself..."
                        value={values.intro}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex justify-between my-[20px] items-center bg-backgroundColortextViolet p-3 border rounded-[10px] border-borderColor">
                      <div>
                        <div className="text-[16px] font-semibold">
                          Add Highlights
                        </div>
                        <div className="text-[10px] text-darkGray">
                          Add a web link, Media or donation pledge.
                        </div>
                      </div>
                      <div>
                        <Button className="bg-primary px-6 py-[3px] text-textWhite ">
                          Add
                        </Button>
                      </div>
                    </div>
                    <div className="text-[16px] py-5">Social Links</div>
                    <SocialFields
                      values={values}
                      setFieldValue={setFieldValue}
                      touched={touched}
                      errors={errors}
                    />
                    <div className="flex justify-between my-[20px] items-center bg-gradient-to-b from-[#4C0099] to-[#330066] p-3 border rounded-[10px] border-borderColor">
                      <div>
                        <div className="text-[16px] text-textWhite font-semibold">
                          Add Subscriptions
                        </div>
                        <div className="text-[10px] text-[#C2AFD6]">
                          Add a web link, Media or donation pledge.
                        </div>
                      </div>
                      <div>
                        <Button className="bg-gradient-to-r from-[#FEE9BA] to-[#C6984B] px-6 py-[3px] text-textBlack ">
                          Add
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default EditProfile;
