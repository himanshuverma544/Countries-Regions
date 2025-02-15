import { useDispatch } from "react-redux";
import { fetchData, getItemsByRegion } from "../../redux/dataSlice";

import { useEffect } from 'react';
import useDebounceEffect from "../utilities/useDebounceEffect";

import useGetRegionName from "./useGetRegionName";


function useApiExecuter() {
  
  const dispatch = useDispatch();
  const regionName = useGetRegionName();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  useDebounceEffect(() => {
    
    if (regionName) {
      dispatch(getItemsByRegion(regionName));
    }
  }, [regionName], 1000);
}


export default useApiExecuter;