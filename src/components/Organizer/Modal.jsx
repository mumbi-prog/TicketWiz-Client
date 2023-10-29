import React from 'react';

function Modal({ onClose, children }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="modal-close-button" onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
