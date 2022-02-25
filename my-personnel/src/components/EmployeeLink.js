import { Link } from "react-router-dom";

const EmployeeLink = ({ employee }) => {
  return (
    <Link
      to={`/employees/${employee._id}`}
      className={
        "flex p-10 m-10 shadow-md rounded-lg shadow-md transition-all duration-500 ease-in-out hover:scale-101 hover:shadow-lg"
      }
    >
      <div className="flex justify-center basis-2/6">
        <img
          src={employee.imgUrl}
          alt="professional headshot of this employee"
        />
      </div>
      <div className="basis-3/6 flex flex-col items-start px-5">
        <p className="text-3xl">{`${employee.name.first} ${employee.name.last}`}</p>
        <p className="pb-1">{employee.title}</p>
        <p className="pb-1">{employee.department}</p>
        <p className="text-sm">
          <span className="font-bold">Employee ID: </span>
          <span>{employee._id}</span>
        </p>
      </div>
    </Link>
  );
};

export default EmployeeLink;
