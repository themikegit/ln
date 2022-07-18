import React, { createContext } from "react";
import Modal from "./components/Modal";
import { useModal } from "./components/UseModal";

let ModalContext;
let { Provider } = (ModalContext = createContext());

const ModalProvider = ({ children }) => {
  let { modal, handleModal, modalContent } = useModal();
  const logName = (para) => {
    console.log(para);
  };
  return (
    <Provider value={{ modal, handleModal, modalContent, logName }}>
      <Modal />
      {children}
    </Provider>
  );
};

export { ModalContext, ModalProvider };
