import { useState } from "react";
import { Modal } from "../../context/Modal";
import NewEmployeeForm from "./NewEmployeeForm";

const ButtonEmployeeNew = ({ employees, setEmployees }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <button
        className="border-2 rounded-lg px-3 py-1 border-sky-500 hover:bg-sky-500 hover:text-white"
        onClick={handleClick}
      >
        Add new employee
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <NewEmployeeForm
            employees={employees}
            setEmployees={setEmployees}
            setShowModal={setShowModal}
          />
        </Modal>
      )}
    </>
  );
};

export default ButtonEmployeeNew;
