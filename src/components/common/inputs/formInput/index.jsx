import { ErrorMessage, Field } from "formik";
import { ErrorIcon } from "../../../helpers/icon";

const FormInput = ({
  label,
  type = "text",
  name,
  placeholder,
  isInvalid,
  className,
  inputContainerClass = "",
  ...rest
}) => {
  return (
    <>
      <label>{label}</label>
      <div className={`mb-4 ${inputContainerClass}`}>
        <Field
          type={type}
          autoComplete="off"
          name={name}
          placeholder={placeholder}
          className={`border-[2px] border-[#756e7e] text-[16px] my-2 rounded-lg w-full h-14 py-2 px-3 text-darkGray leading-tight focus:outline-none focus:shadow-outline bg-pink-light ${
            isInvalid ? "border-errorColor" : ""
          } ${className}`}
          {...rest}
        />
        <ErrorMessage
          name={name}
          render={(msg) => (
            <div className="flex gap-x-[5px] items-center">
              <ErrorIcon className="mr-2" />
              <p className="text-errorColor text-[16px]">{msg}</p>
            </div>
          )}
        />
      </div>
    </>
  );
};

export default FormInput;
