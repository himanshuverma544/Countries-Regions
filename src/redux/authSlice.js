import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";


const signInUser = createAsyncThunk(
  "auth/signInUser",
  async ({ usernameOrEmail, password, keepMeSignedIn }, { getState, rejectWithValue }) => {

    const { users } = getState().auth;

    const user = users.find(user =>
      user.usernameOrEmail === usernameOrEmail && user.password === password
    );

    if (user) {
      return ({ ...user, keepMeSignedIn });
    }
    else {
      return rejectWithValue("Invalid username/email or password.");
    }
  }
);


const initialState = {
  users: [],

  fullName: "",
  usernameOrEmail: "",
  password: "",
  confirmPassword: "",
  keepMeSignedIn: false,

  signedInUser: null,

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

      const userExists = state.users.find(user => user.usernameOrEmail);

      if (userExists) {
        state.usernameError = "User already exists.";
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

    signOutUser: state => {

      Object.assign(state, {
        fullName: "",
        usernameOrEmail: "",
        password: "",
        confirmPassword: "",
        keepMeSignedIn: false,
      
        signedInUser: null,
      
        fullNameError: "",
        usernameError: "",
        passwordError: "",
        confirmPasswordError: "",
        signInError: "",
      });
    }
  },
  extraReducers: builder => {
    builder
      .addCase(signInUser.fulfilled, (state, action) => {
        state.signedInUser = action.payload;
        state.signInError = "";
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.signInError = action.payload;
      });
  }
});


export const {
  validateFullName,
  validateUsernameOrEmail,
  validatePassword,
  validateConfirmPassword,
  validateKeepMeSignedIn,
  signUpUser,
  signOutUser
}
  = authSlice.actions;

export { signInUser };
  
export default authSlice.reducer;