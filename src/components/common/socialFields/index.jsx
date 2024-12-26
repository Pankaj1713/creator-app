import React from "react";
import FormInput from "../inputs/formInput";

const SOCIALMEDIA = [
  {
    image: "/images/socialMedia/instagram.png",
    placeholder: "@username",
    title: "instagram",
  },
  {
    image: "/images/socialMedia/facebook.png",
    placeholder: "@username",
    title: "facebook",
  },
  {
    image: "/images/socialMedia/twitter.png",
    placeholder: "@username",
    title: "twitter",
  },
  {
    image: "/images/socialMedia/snapchat.png",
    placeholder: "@username",
    title: "snapchat",
  },
  {
    image: "/images/socialMedia/linkedin.png",
    placeholder: "@username",
    title: "linkedin",
  },
  {
    image: "/images/socialMedia/youtube.png",
    placeholder: "@username",
    title: "youtube",
  },
];

const SocialFields = ({ values, touched, errors, setFieldValue }) => {
  return (
    <div>
      {SOCIALMEDIA.map((data, index) => (
        <div key={index} className="flex gap-2">
          <img
            className="w-[55px] h-[55px] mt-2"
            src={data.image}
            alt="Image"
          />
          <FormInput
            inputContainerClass="flex-1"
            className="h-[55px] w-[100%] rounded-[10px] px-4 border-borderColor"
            name={data.title}
            placeholder={data.placeholder}
            onChange={(e) => {
              setFieldValue(data.title, e.target.value);
            }}
            onBlur={() => {
              setFieldValue(data.title, values[data.title].trim());
            }}
            isInvalid={
              touched[data.title] &&
              errors[data.title] &&
              values[data.title].trim().length === 0
            }
          />
        </div>
      ))}
    </div>
  );
};

export default SocialFields;
