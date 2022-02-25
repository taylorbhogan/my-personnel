import React, { useState } from "react";
import { Modal } from "../../context/Modal";

const ButtonEmployeeDelete = ({id}) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => {
    setShowModal(true);
  };



  return (
    <>
      <button
        onClick={handleOpen}
        className="border-2 rounded-lg px-3 py-1 border-red-700 hover:bg-red-700 hover:text-black"
      >
        delete
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          Hello
        </Modal>
      )}
    </>
  );
};

export default ButtonEmployeeDelete;
