import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  validateFullName,
  validateUsernameOrEmail,
  validatePassword,
  validateConfirmPassword,
  signUpUser,
}
  from "../../../redux/authSlice";

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import Divider from "../../../components/utilities/Divider";

import ConceptImage from "../../../assets/concept-image.png";

import { SignIn } from "../../../routes";


export default function ManageSignUp() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    fullName,
    usernameOrEmail,
    password,
    confirmPassword,
    fullNameError,
    usernameError,
    passwordError,
    confirmPasswordError,
  }
    = useSelector(state => state.auth);


  const handleSignUp = event => {

    event.preventDefault();

    dispatch(validateFullName(fullName));
    dispatch(validateUsernameOrEmail(usernameOrEmail));
    dispatch(validatePassword(password));
    dispatch(validateConfirmPassword(confirmPassword));
  
    if (!fullNameError && !usernameError && !passwordError && !confirmPasswordError) {
      dispatch(
        signUpUser({
          fullName,
          usernameOrEmail,
          password
        })
      );
      navigate(SignIn.pathname);
    }
  }


  return (
    <div className="manage-sign-up w-100 d-flex gutters-x">
      <div className="left-wrapper w-100 d-flex justify-content-center align-items-center w-sm-50">
        <Form
          className="sign-in-form d-flex flex-column gap-4"
          style={{ width: "85%", maxWidth: "18.75rem" }}
          onSubmit={handleSignUp}
        >
          <Form.Group className="form-head d-flex flex-column gap-2">
            <Form.Text className="text-center fs-2 fw-semibold text-dark text-sm-start">
              Sign Up
            </Form.Text>
            <Form.Text className="d-flex justify-content-center gap-2 text-center fw-semibold text-dark justify-content-sm-start">
              <span>Already User?</span>
              <Link to={SignIn.pathname}>Sign In here</Link>
            </Form.Text>
          </Form.Group>

          <Form.Group className="form-body">
            <InputGroup className="mb-3">
              <Form.Control
                className="border-2 border-dark"
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={event => dispatch(validateFullName(event.target.value))}
                isInvalid={!!fullNameError}
              />
              <Form.Control.Feedback type="invalid">
                {fullNameError}
              </Form.Control.Feedback>
            </InputGroup>

            <InputGroup className="mb-3">
              <Form.Control
                className="border-2 border-dark"
                type="text"
                placeholder="Username or Email"
                value={usernameOrEmail}
                onChange={event => dispatch(validateUsernameOrEmail(event.target.value))}
                isInvalid={!!usernameError}
              />
              <Form.Control.Feedback type="invalid">
                {usernameError}
              </Form.Control.Feedback>
            </InputGroup>

            <InputGroup className="mb-3">
              <Form.Control
                className="border-2 border-dark"
                type="password"
                placeholder="Password"
                value={password}
                onChange={event => dispatch(validatePassword(event.target.value))}
                isInvalid={!!passwordError}
              />
              <Form.Control.Feedback type="invalid">
                {passwordError}
              </Form.Control.Feedback>
            </InputGroup>

            <InputGroup className="mb-3">
              <Form.Control
                className="border-2 border-dark"
                type="password"
                placeholder="Confirm Your Password"
                value={confirmPassword}
                onChange={event => dispatch(validateConfirmPassword(event.target.value))}
                isInvalid={!!confirmPasswordError}
              />
              <Form.Control.Feedback type="invalid">
                {confirmPasswordError}
              </Form.Control.Feedback>
            </InputGroup>

            <Button className="w-100 rounded-0 py-2" variant="dark" type="submit">
              Sign Up
            </Button>
          </Form.Group>

          <Form.Group className="form-footer d-flex flex-column gap-3">
            <Divider text="Or Sign In With" textClassName="fw-semibold"/>
            <div className="social-sign-in d-flex justify-content-center gap-4 fs-1">
              <i className="fa-brands fa-square-facebook"></i>
              <i className="fa-brands fa-square-twitter"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-square-youtube"></i>
            </div>
          </Form.Group>
        </Form>
      </div>

      <div className="right-wrapper d-none w-sm-50 d-sm-flex justify-content-sm-center align-items-sm-center">
        <div className="img-cont">
          <img className="w-sm-100 h-sm-100" src={ConceptImage} alt="concept-image"/>
        </div>
      </div>
    </div>
  );
}