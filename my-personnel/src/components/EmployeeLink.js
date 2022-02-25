const EmployeeLink = ({ employee }) => {
  return (
    <a
      className={
        "flex p-10 m-10 shadow-md rounded-lg shadow-md transition-all duration-500 ease-in-out hover:scale-101 hover:shadow-lg"
      }
      href={`/employees/${employee._id}`}
    >
      <div className="flex justify-center basis-2/6">
        <img src={employee.imgUrl} alt="professional headshot of this employee"/>
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
      <div className="basis-1/6 flex justify-around items-center">
        <button className="border-2 rounded-lg px-3 py-1 border-sky-500 hover:bg-sky-500 hover:text-white">edit</button>
        <button className="border-2 rounded-lg px-3 py-1 border-red-700 hover:bg-red-700 hover:text-black">delete</button>
      </div>
    </a>
  );
};

export default EmployeeLink;
