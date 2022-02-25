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
      <button
      className="border-2 rounded-lg px-3 py-1 border-sky-500 hover:bg-sky-500 hover:text-white"
      onClick={handleClick}>Add new employee</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <NewEmployeeForm />
        </Modal>
      )}
    </div>
  );
};

export default NewEmployeeModal;
