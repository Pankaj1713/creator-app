import React from "react";
import FormInput from "../../../../components/common/inputs/formInput";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button } from "../../../../components/common";
import { postAPI, putAPI } from "../../../../api/service";
import { APIS } from "../../../../api/enpoints";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import SocialFields from "../../../../components/common/socialFields";

const SocialMedia = ({ onSuccess }) => {
  const user = useSelector((state) => state?.auth);

  const handleSubmit = (values, { setSubmitting }) => {
    putAPI(`${APIS.UPDATE_SOCIAL_INFO}`, values)
      .then((res) => {
        onSuccess(res?.data);
      })
      .finally(() => setSubmitting(false));
  };
  return (
    <div className="px-[15px] flex flex-col items-center">
      <div className="text-lighttextBlack mb-6 pt-10   leading-10 md:text-center text-[32px] font-medium">
        Let's add your social accounts!
      </div>

      <Formik
        initialValues={{
          instagram: "",
          facebook: "",
          twitter: "",
          snapchat: "",
          linkedin: "",
          youtube: "",
        }}
        validationSchema={Yup.object().shape({
          instagram: Yup.string(),
          facebook: Yup.string(),
          twitter: Yup.string(),
          snapchat: Yup.string(),
          linkedin: Yup.string(),
          youtube: Yup.string(),
        })}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, values, setFieldValue, touched, errors }) => (
          <Form className="py-[10px] px-[15px] md:p-5">
            <div className="max-w-[600px] m-auto">
              <SocialFields
                values={values}
                setFieldValue={setFieldValue}
                touched={touched}
                errors={errors}
              />
              <div className="flex gap-5 items-center">
                <button className="bg-none" onClick={onSuccess}>
                  Skip
                </button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-accent w-full"
                >
                  Proceed
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SocialMedia;
