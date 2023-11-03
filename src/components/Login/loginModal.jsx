import React from "react";
import { AiOutlineCloseCircle } from 'react-icons/ai'

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50" />

      <div className="modal-container bg-white w-[300px] md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto items-center">
          <div className="text-right mt-[10px] mr-5 mb-2">
            <button
              className="text-blue-500 hover:text-blue-700 px-[3px] py-[5px] rounded-md text-2xl"
              onClick={onClose}
            >
              <AiOutlineCloseCircle />
            </button>
          </div>
        <div className="modal-content pb-[15px] font-medium text-center px-6">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
