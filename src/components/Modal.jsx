import { useContext } from "react";
import { createPortal } from "react-dom";
import { ModalContext } from "../CommonContext";

const Modal = () => {
  const { modalContent, handleModal, modal } = useContext(ModalContext);
  if (modal) {
    return createPortal(
      <div
        style={{
          background: "#fefefe",
          height: "300px",
          width: "300px",
          position: "absolute",
          top: "50%",
          left: "50%",
          boxShadow: "10px 10px 26px -11px rgba(0,0,0,0.63)",
        }}
      >
        <h3>Modal</h3>
        <p>Hey guys</p>
        <p> {modalContent} </p>
      </div>,
      document.querySelector("#modal-root")
    );
  }
};

export default Modal;
