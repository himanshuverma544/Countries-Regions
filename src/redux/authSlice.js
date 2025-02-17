import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  users: [],

  fullName: "",
  usernameOrEmail: "",
  password: "",
  confirmPassword: "",
  keepMeSignedIn: false,

  signedInUser: {
    firstName: "",
    lastName: "",
    usernameOrEmail: "",
    keepMeSignedIn: false
  },

  fullNameError: "",
  usernameError: "",
  passwordError: "",
  confirmPasswordError: "",
  signInError: "",
};


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

    validateFullName: (state, action) => {

      const value = action.payload;
      state.fullName = value;

      const fullNameRegex = /^[A-Za-z]+( [A-Za-z]+)?$/;

      if (fullNameRegex.test(value)) {
        state.fullNameError = "";
      }
      else if (!value) {
        state.fullNameError = "This field is required."
      }
      else {
        state.fullNameError = "Name must contain only letters and a single space."
      }
    },

    validateUsernameOrEmail: (state, action) => {
      
      const value = action.payload;
      state.usernameOrEmail = value;
    
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (emailRegex.test(value)) {
        state.usernameError = ""; 
      }
      else if (!value) {
        state.usernameError = "This field is required."
      }
      else {
        state.usernameError = value.length < 5 || value.includes(' ')
          ? "Username must be at least 5 characters with no spaces."
          : "";
      }
    },

    validatePassword: (state, action) => {

      const value = action.payload;
      state.password = value;
    
      const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
      if (!value) {
        state.passwordError = "This field is required."
      }
      else {
        state.passwordError = !passwordRegex.test(value)
          ? "Password must be at least 8 characters long and include 1 capital letter, 1 number, and 1 symbol."
          : "";
      }
    },

    validateConfirmPassword: (state, action) => {

      const value = action.payload;
      state.confirmPassword = value;

      if (!value) {
        state.confirmPasswordError = "This field is required."
      }
      else {
        state.confirmPasswordError = state.password !== value
          ? "Passwords do not match."
          : "";
      }
    },

    validateKeepMeSignedIn: (state, action) => {

      const value = action.payload;
      state.keepMeSignedIn = value;
    },

    signUpUser: (state, action) => {

      const { fullName, usernameOrEmail, password } = action.payload;

      const [firstName, lastName] = fullName.split(" ");

      if (state.usernameError || state.passwordError || state.confirmPasswordError)
        return;

      state.users.push({
        firstName,
        lastName,
        usernameOrEmail,
        password
      });
    },

    signInUser: (state, action) => {

      const { usernameOrEmail, password, keepMeSignedIn } = action.payload;

      const user = state.users.find(user =>
        user.usernameOrEmail === usernameOrEmail && user.password === password
      );

      if (user) {
        state.signedInUser = { keepMeSignedIn, ...user };
        state.signInError = "";
      }
      else {
        state.signInError = "Invalid username/email or password.";
      }
    }
  }
});


export const {
  validateFullName,
  validateUsernameOrEmail,
  validatePassword,
  validateConfirmPassword,
  validateKeepMeSignedIn,
  signUpUser,
  signInUser
}
  = authSlice.actions;
 
export default authSlice.reducer;