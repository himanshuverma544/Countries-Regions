import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { validateUsernameOrEmail, validatePassword, validateKeepMeSignedIn } from "../../../redux/authSlice";
import { signInUser } from "../../../redux/authSlice";

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { Toast, ToastContainer } from "react-bootstrap";

import Divider from "../../../components/utilities/Divider";

import ConceptImage from "../../../assets/concept-image.png";

import { Home, SignUp } from "../../../routes";


export default function ManageSignIn() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [toast, setToast] = useState({ message: "", bg: "", delay: 3000, autohide: true, show: false });

  const {
    usernameOrEmail,
    password,
    keepMeSignedIn,
    signedInUser
  }
    = useSelector(state => state.auth);


  const handleSignIn = async event => {

    event.preventDefault();

    try {
      await dispatch(
        signInUser({
          usernameOrEmail,
          password,
          keepMeSignedIn
        })
      ).unwrap();
      navigate(Home.pathname);
    }
    catch (error) {
      setToast({
        ...toast,
        message: error,
        bg: "danger",
        show: true
      });
    }
  }

  
  useEffect(() => {
    
    if (signedInUser) {
      navigate(Home.pathname);
    }
  }, [signedInUser, navigate]);


  return (
    <div className="manage-sign-in w-100 d-flex gutters-x">

      <div className="left-wrapper w-100 d-flex justify-content-center align-items-center w-sm-50">
        <Form
          className="sign-in-form d-flex flex-column gap-4"
          style={{ width: "85%", maxWidth: "18.75rem" }}
          onSubmit={handleSignIn}
        >
          <Form.Group className="form-head d-flex flex-column gap-2">
            <Form.Text className="text-center fs-2 fw-semibold text-dark text-sm-start">
              Sign In
            </Form.Text>
            <Form.Text className="d-flex justify-content-center gap-2 text-center fw-semibold text-dark justify-content-sm-start">
              New user? <Link to={SignUp.pathname}>Create an account</Link>
            </Form.Text>
          </Form.Group>

          <Form.Group className="form-body">
            <InputGroup className="mb-3">
              <Form.Control
                className="border-2 border-dark"
                type="text"
                placeholder="Username or Email"
                value={usernameOrEmail}
                onChange={event => dispatch(validateUsernameOrEmail(event.target.value))}
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <Form.Control
                className="border-2 border-dark"
                type="password"
                placeholder="Password"
                value={password}
                onChange={event => dispatch(validatePassword(event.target.value))}
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <Form.Check
                className="fw-semibold"
                type="checkbox"
                label="Keep me signed in"
                checked={keepMeSignedIn}
                onChange={event => dispatch(validateKeepMeSignedIn(event.target.checked))}
              />
            </InputGroup>

            <Button className="w-100 rounded-0 py-2" variant="dark" type="submit">
              Sign In
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

      <ToastContainer position="bottom-start" className="p-3">
        <Toast
          show={toast.show}
          onClose={() => setToast({ ...toast, show: false })}
          bg={toast.bg}
          delay={toast.delay}
          autohide={toast.autohide}
        >
          <Toast.Body
            className="text-white"
          >
            {toast.message}
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}