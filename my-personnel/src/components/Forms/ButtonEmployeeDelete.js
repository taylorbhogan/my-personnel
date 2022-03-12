import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonCloseModal from "./ButtonCloseModal";
import { Modal } from "../../context/Modal";

const ButtonEmployeeDelete = ({ id, employees, setEmployees }) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    setShowModal(true);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/employees/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem('MY_PERSONNEL_ACCESS_TOKEN')}`
      }
    });
    if (res.ok) {
      // const newEmployeeData = await res.json();

      const employeesObject = { ...employees };
      delete employeesObject[id];

      setEmployees(employeesObject);
      navigate("/employees");
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
        Delete employee record
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className="flex flex-col items-center justify-around bg-gray-100 rounded-lg p-48">
            <ButtonCloseModal setShowModal={setShowModal} />
            <h2>Deleting is permanent. Are you sure you'd like to proceed?</h2>
            <button
              onClick={handleDelete}
              className="border-2 rounded-lg mt-6 px-3 py-1 border-red-700 hover:bg-red-700 hover:text-black"
            >
              confirm delete
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ButtonEmployeeDelete;
