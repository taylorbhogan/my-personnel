import InfoField from "./InfoField";

const Corporate = ({ employee }) => {
  return (
    <div className="">
      <h2 className="text-3xl">
        {`${employee.name.first} ${employee.name.middle} ${employee.name.last}`}
      </h2>
      <p className="text-xl">{employee.title}</p>
      <p className="text-xl">{employee.department}</p>
      <InfoField label={"EmployeeId: "} value={employee._id} />
    </div>
  );
};

export default Corporate;
