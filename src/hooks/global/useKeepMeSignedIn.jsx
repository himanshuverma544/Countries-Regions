import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { signOutUser } from "../../redux/authSlice";


export default function useKeepMeSignedIn() {

  const dispatch = useDispatch();
  const signedInUser = useSelector(state => state.auth.signedInUser);

  useEffect(() => {

    if (!signedInUser) {
      return;
    }

    if (!signedInUser?.keepMeSignedIn) {
      dispatch(signOutUser());
    }
  }, []);
}