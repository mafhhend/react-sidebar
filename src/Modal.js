import React from "react";
import { FaTimes } from "react-icons/fa";
import { AppContext, useGlobalContext } from "./Context";

export default function Modal() {
  var { isModalOpen, closeModal } = useGlobalContext(); //hello

  return (
    <>
      <div className={`${isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay' }`}>
        <div className="modal-container">
          <h3>modal content</h3>
          <button className="close-modal-btn">
            <FaTimes />
          </button>
        </div>
      </div>
    </>
  );
}
