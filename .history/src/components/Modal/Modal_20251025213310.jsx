import {useRef, useEffect} from "react";

function Modal({btnLabel, btnClassName, children, isOpen, onClose}) {
    const modalRef = useRef();

    function handleclick(e) {
        modalRef.current.showModal();
    }

    useEffect(() => {
        if (isOpen && modalRef.current) {
            modalRef.current.showModal();
        } else if (!isOpen && modalRef.current) {
            modalRef.current.close();
        }
    }, [isOpen]);

    // Handle dialog close events
    useEffect(() => {
        const dialog = modalRef.current;
        if (dialog) {
            const handleClose = () => {
                if (onClose) {
                    onClose();
                }
            };
            dialog.addEventListener('close', handleClose);
            return () => dialog.removeEventListener('close', handleClose);
        }
    }, [onClose]);

    return (
        <>
        {btnLabel && (
            <button className={btnClassName} onClick={handleclick}> {btnLabel} </button>
        )}
        <dialog ref={modalRef}>
            {children}
        </dialog>
        </>
    );
}
    export default Modal;
