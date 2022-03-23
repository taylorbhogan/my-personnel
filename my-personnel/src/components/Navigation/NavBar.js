import { useLocation } from "react-router-dom";

import HomeLink from "./HomeLink";
import LogoutButton from "../Auth/LogoutButton";
import LoginButton from "../Auth/LoginButton";
import BackLink from "./BackLink";

const NavBar = ({ setEmployees }) => {
  const location = useLocation();
  const pathname = location.pathname;

  const levelCount = (pathName) => {
    let count = 0;

    for (let char of pathName) {
      if (char === "/") count++;
    }
    return count;
  };

  return (
    <nav>
      {pathname !== "/" && <HomeLink />}
      {levelCount(pathname) >= 2 && <BackLink />}
      <LoginButton />
      <LogoutButton setEmployees={setEmployees} />
    </nav>
  );
};

export default NavBar;
