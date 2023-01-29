import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primaryy bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Submit
  </button>
);

export default Button;