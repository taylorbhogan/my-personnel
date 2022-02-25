import { useState } from "react";
import { Modal } from "../context/Modal";
import NewEmployeeForm from "./Forms/NewEmployeeForm";

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
          <NewEmployeeForm />
        </Modal>
      )}
    </div>
  );
};

export default NewEmployeeModal;
