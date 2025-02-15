import { useSelector } from "react-redux";

import NavItem from "../utilities/NavItem";

import { Region } from "../../routes";


export default function RegionNavItems({ className = "", navItemClassName = "" }) {

  const { regions } = useSelector(state => state.data);

  return (
    <ul className={`regions ${className}`}>
      {regions.map((region, index) =>
        <NavItem
          key={index}
          className={navItemClassName}
          pathname={Region.getPathname(region)}
          title={region}
        />
      )}
    </ul>
  );
}
