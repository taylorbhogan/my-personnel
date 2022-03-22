import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center h-full">
      <Link
        to={"/employees"}
        className="flex p-10 m-10 shadow-md rounded-lg shadow-md transition-all duration-500 ease-in-out hover:scale-101 hover:shadow-lg"
      >
        Manage All Employees
      </Link>
    </div>
  );
};

export default Home;
