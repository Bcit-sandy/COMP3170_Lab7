import {useRef} from "react";

function Modal({btnLabel, btnClassName, children}) {
    const modalRef = useRef();

    function handleclick(e) {
        if (modalRef.current && typeof modalRef.current.showModal === 'function') {
            modalRef.current.showModal();
        } else if (modalRef.current) {
            // Fallback for environments without <dialog>.showModal()
            modalRef.current.setAttribute('open', '');
        }
    }

    return (
        <>
        <button className={btnClassName} onClick={handleclick}> {btnLabel} </button>
        <dialog ref={modalRef}>
            {children}
            <div className="modal-actions">
                <button onClick={() => modalRef.current && modalRef.current.close && modalRef.current.close()}>
                    Close
                </button>
            </div>
        </dialog>
        </>
    );
}
    export default Modal;
