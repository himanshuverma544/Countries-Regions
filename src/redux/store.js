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

  if (!isClientSide()) {
    return undefined;
  }

  const localPersistedState = localStorage.getItem(PERSISTENCE_KEY);
  const localState = localPersistedState ? JSON.parse(localPersistedState) : {};

  const sessionPersistedState = sessionStorage.getItem(PERSISTENCE_KEY);
  const sessionState = sessionPersistedState ? JSON.parse(sessionPersistedState) : {};

  return ({
    auth: {
      users: localState.auth?.users || [],
      signedInUser: sessionState.auth?.signedInUser || localState.auth?.signedInUser || null
    }
  });
}

function savePersistedState(state) {

  if (!isClientSide()) {
    return;
  }

  localStorage.setItem(PERSISTENCE_KEY, JSON.stringify({
    auth: { users: state.auth.users }
  }));

  if (!state.auth.signedInUser?.keepMeSignedIn) {
    sessionStorage.setItem(PERSISTENCE_KEY, JSON.stringify({
      auth: { signedInUser: state.auth.signedInUser }
    }));
  }
  else {
    localStorage.setItem(PERSISTENCE_KEY, JSON.stringify({
      auth: {
        users: state.auth.users,
        signedInUser: state.auth.signedInUser
      }
    }));
  }
}


if (isClientSide()) {

  store.subscribe(() => {  
    const state = store.getState();
    savePersistedState(state);
  });
}


export default store;