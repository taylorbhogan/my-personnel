import HomeLink from "./HomeLink";
import LogoutButton from "../Auth/LogoutButton";

const NavBar = ({ setEmployees }) => {
  return (
    <>
      <HomeLink />
      <LogoutButton setEmployees={setEmployees} />
    </>
  );
};

export default NavBar;
