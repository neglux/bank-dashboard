import React from "react";

const Button = ({ text, clickHandler = () => {} }) => {
  return (
    <button
      className=" bg-green-500 text-gray-50 px-10 py-1 rounded hover:bg-green-600 shadow-md"
      onClick={clickHandler}
    >
      {text}
    </button>
  );
};

export default Button;
