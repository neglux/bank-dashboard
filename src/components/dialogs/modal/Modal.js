import React from "react";
import Overlay from "./Overlay";

const Modal = ({ form }) => {
  return (
    <>
      <section className="absolute flex w-screen h-screen justify-center items-center">
        <div className="relative bg-gray-50 z-10 w-fit h-fit rounded-2xl shadow-lg">
          {form}
        </div>
      </section>
      <Overlay />
    </>
  );
};

export default Modal;
