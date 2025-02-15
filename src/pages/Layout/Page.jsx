import { Outlet, Link } from "react-router-dom";

import Global from "./Global";
import NavItem from "./NavItem";
import RegionNavItems from "./RegionNavItems";

import { Home, SignIn } from "../../routes";



const Layout = () => {

  return (
    <Global>
      <header className="d-flex justify-content-between gutters">
        <Link
          className="app-name fs-5 fw-semibold text-black"
          to={Home.pathname}
        >
          Countries
        </Link>
        <nav>
          <ul className="d-flex gap-5">
            <NavItem
              className="text-black-50"
              pathname={Home.pathname}
              title={Home.title}
            />
            <RegionNavItems
              className="text-black-50"
            />
            <NavItem
              className="text-black-50"
              pathname={SignIn.pathname}
              title={SignIn.title}
            />
          </ul>
        </nav>
      </header>

      <main>
        <Outlet/>
      </main>
    
      <footer className="d-flex flex-column align-items-center justify-content-center gap-3 p-5">
        <div className="social-links d-flex justify-content-center align-items-center gap-4 p-3 fs-1">
          <i className="fa-brands fa-square-facebook"></i>
          <i className="fa-brands fa-square-twitter"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-square-youtube"></i>
        </div>
        <div className="email-address fs-7 fw-medium">
          example@email.com
        </div>
        <div className="copyright-text fs-7 fw-medium">
          Copyright &copy; 2020 Name. All rights reserved.
        </div>
      </footer>
    </Global>
  );
}


export default Layout;