import React, { useEffect, useRef, FunctionComponent } from "react";
import { createPortal } from "react-dom";

//I will be creating mark up with the modal, so i need to make sure i destroy it so that i dont get memory leakage due to modal upon modal events creating markup without destroying it. useRef will take care of that for me by assigning the created element to a variable

//for modals to be accessible they need to be able to "trap focus". this example doesnt have that.

const modalRoot = document.getElementById("modal");

const Modal: FunctionComponent = ({ children }) => {
  //elRef.current will always point towards that specific div. if it doesnt exists, it creates it once and is assigned to elRef.
  const elRef = useRef(document.createElement("div"));

  useEffect(() => {
    if (!modalRoot) {
      return;
    }
    modalRoot.appendChild(elRef.current);
    return () => {
      modalRoot.removeChild(elRef.current);
    };
  }, []);
  //the [] ensures it only runs once

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
