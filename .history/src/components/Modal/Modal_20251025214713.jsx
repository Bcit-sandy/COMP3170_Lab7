import {useRef} from "react";

function Modal({btnLabel, btnClassName, children}) {
    const modalRef = useRef();

    function handleclick(e) {
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
