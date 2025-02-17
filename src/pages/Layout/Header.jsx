import { Link } from "react-router-dom";

import { useState } from "react";

import NavItem from "../../components/utilities/NavItem";
import RegionNavItems from "../../components/global/RegionNavItems";

import Menu from "../../components/utilities/Menu";
import MenuIcon from "../../components/utilities/MenuIcon";

import { Home, Region, SignIn } from "../../routes";


export default function Header() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="d-flex flex-wrap justify-content-between gutters">
      <Link
        className="app-name mb-3 fs-5 fw-semibold text-black"
        to={Home.pathname}
      >
        Countries
      </Link>
      <nav>
        <ul className="d-flex align-items-center gap-5">
          <NavItem
            className="text-black-50 d-none d-lg-block"
            pathname={Home.pathname}
            title={Home.title}
          />
          <RegionNavItems
            className="d-none d-lg-flex flex-lg-wrap gap-lg-5"
            navItemClassName="text-black-50"
          />
          <NavItem
            className="d-flex justify-content-center align-items-center gap-3 mb-3 text-nowrap text-black-50"
            pathname={SignIn.pathname}
            title={SignIn.title}
            icon={<i className="fa-regular fa-user"></i>}
          />
          <MenuIcon
            className="d-lg-none mb-3"
            innerClassName="bg-dark"
            isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)
            }
          />
        </ul>
      </nav>

      <Menu
        className="d-lg-none"
        title={`${Region.title}s`}
        isOpen={isOpen}
        onClickClose={() => setIsOpen(false)}
      >
        <nav>
          <ul className="d-flex flex-column gap-4">
            <NavItem
              className="text-black-50"
              pathname={Home.pathname}
              title={Home.title}
            />
            <RegionNavItems
              className="d-flex flex-column gap-4"
              navItemClassName="text-black-50"
            />
          </ul>
        </nav>
      </Menu>
    </header>
  );
}