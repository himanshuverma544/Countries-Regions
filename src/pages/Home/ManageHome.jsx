import { useDispatch, useSelector } from "react-redux";
import { loadMore } from "../../redux/dataSlice";

import Heading from "../../components/global/Heading";
import CountriesCarousel from "../../components/global/CountriesCarousel";
import CountriesList from "../../components/global/CountriesList";


export default function ManageHome() {
  
  const dispatch = useDispatch();

  const { items, currentItems, loading, error, hasMore } = useSelector(state => state.data || {});


  return (
    <div className="manage-home d-flex flex-column gap-5 gutters-x">
      <Heading/>
      <CountriesCarousel
        items={items}
        loading={loading}
        error={error}
      />
      <CountriesList
        currentItems={currentItems}
        loading={loading}
        hasMore={hasMore}
        loadMore={() => dispatch(loadMore())}
      />
    </div>
  );
}