import { lowercaseWithHyphen } from "./functions/formatString";


export const Home = {
  title: "All",
  pathname: "/"
};

export const Region = {
  title: "Region",
  pathname: "/region",
  getPathname(region = "") {
    return lowercaseWithHyphen(`${this.pathname}?region-name=${region}`);
  }
};

export const SignIn = {
  title: "Sign In",
  pathname: "/sign-in"
};

export const SignUp = {
  title: "Sign Up",
  pathname: "/sign-up"
};

export const NotFound = {
  title: "Not Found",
  pathname: "/*"
};