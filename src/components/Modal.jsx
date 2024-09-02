import React from 'react';

const Modal = ({ isOpen, onClose }) => {
    return (
        <div className={`modal ${isOpen ? 'modal--active' : ''}`}>
            <div className="modal__content">
                <div className="modal__title">✅ Success !</div>
                <div className="modal__body">
                    The employee was successfully created.
                </div>
                <button type="submit" className="button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal;
