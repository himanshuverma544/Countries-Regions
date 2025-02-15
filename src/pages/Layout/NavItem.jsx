import { NavLink } from "react-router-dom";

import useActiveLink from "../../hooks/utilities/useActiveLink";


const NavItem = ({ className = "", pathname = "/", title = "" }) => {

  if (!pathname) {
    return null;
  }

  const isActive = useActiveLink({ pathname });

  return (
    <li className="nav-item">
      <NavLink className={`${className} ${isActive ? "current-active-link" : ""}`} to={pathname}>
        {title}
      </NavLink>
    </li>
  );
}


export default NavItem;