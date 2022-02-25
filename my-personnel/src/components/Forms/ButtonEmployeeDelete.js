import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../context/Modal";

const ButtonEmployeeDelete = ({ id, setEmployees }) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    setShowModal(true);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/employees/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      const newEmployeeData = await res.json();
      setEmployees(newEmployeeData);
      navigate("/employees");
      setShowModal(false);
      console.log("newEmployeeData", newEmployeeData);
    } else {
      console.log("res", res);
    }
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
          <button onClick={handleDelete}>button here i am</button>
        </Modal>
      )}
    </>
  );
};

export default ButtonEmployeeDelete;
