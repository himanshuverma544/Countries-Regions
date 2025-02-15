import { useDispatch, useSelector } from "react-redux";
import { loadMoreByRegion } from "../../redux/dataSlice";

import Heading from "../../components/global/Heading";
import CountriesCarousel from "../../components/global/CountriesCarousel";
import CountriesList from "../../components/global/CountriesList";

import useGetRegionName from "../../hooks/global/useGetRegionName";


export default function ManageRegion() {

  const dispatch = useDispatch();
  const regionName = useGetRegionName();

  const { regionItems, regionHasMore, loading, error } = useSelector(state => state?.data || {});


  return (
    <div className="manage-region d-flex flex-column gap-5 gutters-x">
      <Heading text={regionName}/>
      <CountriesCarousel
        items={regionItems}
        loading={loading}
        error={error}
      />
      <CountriesList
        currentItems={regionItems}
        hasMore={regionHasMore}
        loadMore={() => dispatch(loadMoreByRegion())}
        loading={loading}
        error={error}
      />
    </div>
  );
}
