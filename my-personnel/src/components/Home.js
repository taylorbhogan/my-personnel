import { Link } from "react-router-dom";
import FlexCol from "./AppUtils/FlexCol";

const Home = () => {
  return (
    <FlexCol options={"items-center justify-center h-full"}>
      <Link
        to={"/employees"}
        className="flex p-10 m-10 shadow-md rounded-lg shadow-md transition-all duration-500 ease-in-out hover:scale-101 hover:shadow-lg"
      >
        Manage All Employees
      </Link>
    </FlexCol>
  );
};

export default Home;
