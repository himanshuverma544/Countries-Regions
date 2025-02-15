import { useSelector } from "react-redux";

import NavItem from "./NavItem";

import { Region } from "../../routes";


export default function RegionNavItems({ className = "" }) {

  const { regions } = useSelector(state => state.data);

  return (
    <>
      {regions.map((region, index) =>
        <NavItem
          key={index}
          className={className}
          pathname={Region.getPathname(region)}
          title={region}
        />
      )}
    </>
  );
}
