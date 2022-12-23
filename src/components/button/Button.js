import React from "react";
import "./button.css";

const Button = ({ text }) => {
  return (
    <a href='/' className='btn'>
      {text}
    </a>
  );
};

export default Button;
