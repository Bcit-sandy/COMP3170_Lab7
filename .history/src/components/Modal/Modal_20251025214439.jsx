import {useRef} from "react";

function Modal({btnLabel, btnClassName, children, onClick}) {
    const modalRef = useRef();

    function handleclick(e) {
        if (onClick) {
            onClick();
        }
        modalRef.current.showModal();
    }

    return (
        <>
        <button className={btnClassName} onClick={handleclick}> {btnLabel} </button>
        <dialog ref={modalRef}>
            {children}
        </dialog>
        </>
    );
}
    export default Modal;
