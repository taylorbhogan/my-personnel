import { useState } from "react";
import { Modal } from "../context/Modal";

const NewEmployeeModal = () => {
  const [ showModal, setShowModal ] = useState(false)

  const handleClick = () => {
    setShowModal(true)
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <p>hello from inside</p>
        </Modal>
      )}
    </div>
  );
};

export default NewEmployeeModal;
