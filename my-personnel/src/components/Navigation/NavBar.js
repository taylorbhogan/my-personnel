import HomeLink from "./HomeLink";
import LogoutButton from "../Auth/LogoutButton";
import LoginButton from "../Auth/LoginButton";

const NavBar = ({ setEmployees }) => {
  return (
    <>
      <HomeLink />
      <LoginButton />
      <LogoutButton setEmployees={setEmployees} />
    </>
  );
};

export default NavBar;
