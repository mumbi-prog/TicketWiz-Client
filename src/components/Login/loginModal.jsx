import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50" />

      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">{children}</div>

        <div className="text-right mt-5 mr-5 mb-2">
          <button
            className="text-blue-500 hover:text-blue-700"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
