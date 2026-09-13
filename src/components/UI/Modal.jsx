import { createPortal } from "react-dom";
import "./Modal.css";

function Modal(props) {
  const modalContent = (
    <>
      <div className="modal-backdrop" onClick={props.onClose}></div>

      <div className="modal" role="dialog" aria-modal="true">
        {props.children}
      </div>
    </>
  );

  return createPortal(modalContent, document.getElementById("modal-root"));
}

export default Modal;
