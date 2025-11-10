import { useRef } from 'react';

function Modal({ btnLabel, btnClassName, children, disabled = false, dialogClassName }) {

    const modalRef = useRef();

    function openModal() {
        if (!disabled) {
            modalRef.current.showModal();
        }
    }

    function closeModal() {
        modalRef.current.close();
    }

    return (
        <>
            <button 
                onClick={openModal} 
                className={btnClassName}
                disabled={disabled}
            >
                {btnLabel}
            </button>
            <dialog ref={modalRef} className={dialogClassName}>
                {children}
            </dialog>
        </>
    );
    
}

export default Modal;