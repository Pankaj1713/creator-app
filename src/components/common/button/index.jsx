import React from "react";

const Button = ({ children, className = "bg-accent", ...rest }) => {
  return (
    <button
      className={`px-6 py-2 rounded-[20px] text-textBlack disabled:bg-disabledColor ${className} font-lato`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
