import useApiExecuter from "../../hooks/global/useApiExecuter";


export default function Global({ children }) {

  useApiExecuter();

  return (
    <>
      {children}    
    </>
  );
}
