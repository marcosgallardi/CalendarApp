import { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export const CalendarModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const onCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}>
      <h2>Hola mundo</h2>
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        provident necessitatibus possimus ullam fuga ab libero placeat, expedita
        nam minima?
      </p>
    </Modal>
  );
};
