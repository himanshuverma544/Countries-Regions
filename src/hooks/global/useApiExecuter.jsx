import { useEffect, useCallback } from "react";

import { useDispatch } from "react-redux";
import { fetchData, getItemsByRegion } from "../../redux/dataSlice";

import useGetRegionName from "./useGetRegionName";
import useReadyEffect from "../utilities/useReadyEffect";


const useApiExecuter = () => {

  const dispatch = useDispatch();
  const regionName = useGetRegionName();


  const fetchDataCallback = useCallback(async () => {
    await dispatch(fetchData());
  }, [dispatch]);

  const isFetchedData = useReadyEffect(fetchDataCallback, []);


  useEffect(() => {

    if (!isFetchedData) return;

    if (regionName) {
      dispatch(getItemsByRegion(regionName));
    }
  }, [isFetchedData, regionName, dispatch]);
}


export default useApiExecuter;