import { useLocation } from "react-router-dom";

import HomeLink from "./HomeLink";
import LogoutButton from "../Auth/LogoutButton";
import LoginButton from "../Auth/LoginButton";

const NavBar = ({ setEmployees }) => {
  const location = useLocation()

  return (
    <nav>
      {location.pathname !== '/' && <HomeLink />}
      <LoginButton />
      <LogoutButton setEmployees={setEmployees} />
    </nav>
  );
};

export default NavBar;
