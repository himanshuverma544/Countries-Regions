import useApiExecuter from "../../hooks/global/useApiExecuter";
import useKeepMeSignedIn from "../../hooks/global/useKeepMeSignedIn";


export default function Global({ children }) {

  useApiExecuter();
  // useKeepMeSignedIn();

  return (
    <>
      {children}    
    </>
  );
}
