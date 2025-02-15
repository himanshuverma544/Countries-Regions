import { useLocation } from "react-router-dom";


export default function useActiveLink({ pathname = "/" }) {

  const location = useLocation();

  return (location.pathname + location.search) === pathname;
}