import { useLocation } from "react-router-dom";

import { capitalizeWithWhiteSpace } from "../../functions/formatString";
  

export default function useGetRegionName() {

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const regionName = capitalizeWithWhiteSpace(params.get("region-name") || "");

  return regionName;
}