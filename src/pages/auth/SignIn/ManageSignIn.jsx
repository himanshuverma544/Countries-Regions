import { Link } from "react-router-dom";

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import Divider from "../../../components/utilities/Divider";

import { SignUp } from "../../../routes";

import ConceptImage from "../../../assets/concept-image.png";


export default function ManageSignIn() {

  return (
    <div className="manage-sign-in w-100 d-flex">

      <div className="left-wrapper w-50 d-flex justify-content-center align-items-center">
        <Form className="sign-in-form">
          <Form.Group className="form-head d-flex flex-column mb-3" controlId="formBasicEmail">
            <Form.Text className="fs-2 fw-semibold">
              Sign In
            </Form.Text>
            <Form.Text className="fw-semibold">
              New user? <Link to={SignUp.pathname}>Create an account</Link>
            </Form.Text>
          </Form.Group>

          <Form.Group className="form-body">
            <InputGroup className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Username or Email"
              />
            </InputGroup>

            <InputGroup className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
              />
            </InputGroup>

            <InputGroup className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Keep me signed in"/>
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

      <div className="right-wrapper w-50 d-flex justify-content-center align-items-center">
        <div className="img-cont">
          <img className="w-100 h-100" src={ConceptImage} alt="concept-image"/>
        </div>
      </div>
    </div>
  );
}
