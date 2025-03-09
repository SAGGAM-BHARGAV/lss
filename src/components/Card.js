import React from "react";

const Card = ({ children, className }) => {
  return (
    <div className={`shadow-lg rounded-2xl bg-white p-6 text-center ${className}`}>
      {children}
    </div>
  );
};

export default Card;
