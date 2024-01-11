import React, { MouseEvent } from 'react';
import './Modal.scss';

interface ModalProps {
  children: React.ReactNode;
  onClose?: (event?: MouseEvent<HTMLButtonElement>) => void;
  classNames?: string[];
}

function Modal({ onClose, children, classNames }: ModalProps) {

  return (
    <div className={['modal', ...(classNames || [])].join(' ')}>
      <div className="modal-content">
        {children}

        {!!onClose && (
          <button
            type="button"
            className="modal-close"
            onClick={onClose}
          >
            X
          </button>
        )}
      </div>
    </div>
  );
}

export default Modal;