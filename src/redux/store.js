import { configureStore } from "@reduxjs/toolkit";

import dataReducer from "./dataSlice";
import authReducer from "./authSlice";


const PERSISTENCE_KEY = 'redux_state';

function isClientSide() {
  return typeof window !== "undefined";
}


export const store = configureStore({
  reducer: {
    data: dataReducer,
    auth: authReducer
  },
  preloadedState: loadPersistedState()
});


function loadPersistedState() {

  if (isClientSide()) {
    const persistedState = localStorage.getItem(PERSISTENCE_KEY);
    return persistedState ? JSON.parse(persistedState) : undefined;
  }
    return undefined;
}

function savePersistedState(state) {
  
  if (isClientSide()) {

    localStorage.setItem(
      PERSISTENCE_KEY,
      JSON.stringify({
        auth: {
          users: state.auth.users,
          signedInUser: state.auth.signedInUser
        }
      })
    );
  }
}

if (isClientSide()) {

  store.subscribe(() => {  
    const state = store.getState();
    savePersistedState(state);
  });
}


export default store;