import Dropdown from "react-bootstrap/Dropdown";

import { useDispatch, useSelector } from "react-redux";

import NavItem from "../utilities/NavItem";

import { signOutUser } from "../../redux/authSlice";


export default function AuthNavItem({
  dropdownClassName = "",
  navItemClassName = "",
  routes: {
    signIn = null,
    signUp = null,
    signOut = { pathname: "", title: "Sign Out" }
  } = {}
}) {

  const dispatch = useDispatch();
  const signedInUser = useSelector(state => state.auth.signedInUser);


  return (
    <>
      {signedInUser ? (
        <Dropdown className={`${dropdownClassName}`}>
          <Dropdown.Toggle
            id="dropdown-signedInUser"
            className="d-flex justify-content-center align-items-center gap-2 text-capitalize"
            variant="success"
          >
            <i className="fa-regular fa-user"></i>
            <span className="username">
              {signedInUser.firstName}
            </span>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              className="d-flex justify-content-evenly align-items-center py-0 text-black-50"
              onClick={() => dispatch(signOutUser())}
            >
              <i class="fa-solid fa-arrow-right-from-bracket"></i>
              <span className="sign-out-title">
                {signOut?.title}
              </span>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ) : (
        <NavItem
          className={`${navItemClassName}`}
          pathname={signUp?.pathname || signIn?.pathname}
          title={signUp?.title || signIn?.title}
          icon={<i className="fa-regular fa-user"></i>}
        />
      )}
    </>
  );
}