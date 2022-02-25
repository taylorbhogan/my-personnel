import NewEmployeeModal from "./NewEmployeeModal";

const ControlPanel = () => {
  return (
    <div className="border-2 border-sky-100 rounded-md m-24 p-20 flex justify-around items-center">
      <NewEmployeeModal />
    </div>
  );
};

export default ControlPanel;
