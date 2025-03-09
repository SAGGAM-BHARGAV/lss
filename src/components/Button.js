import React from "react";

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`bg-blue-600 text-white px-6 py-3 text-lg rounded-lg shadow-md hover:bg-blue-700 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
