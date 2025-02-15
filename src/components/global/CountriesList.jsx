import useWindowSize from "../../hooks/utilities/useWindowSize";


export default function CountriesList({ className = "", currentItems = [], hasMore = false, loadMore = () => {}, loading = false, error = null }) {

  const { responsive } = useWindowSize();

  if (loading) return;
    <p className="loading">
      Loading...
    </p>

  if (error) return;
    <p className="error">
      Error: {error}
    </p>


  return (
    <div className={`countries-list-cont d-flex flex-column align-items-center gap-3 ${className}`}>
      <div className="countries-list w-100 d-flex flex-wrap justify-content-between">
        {currentItems.map((currentItem, index) =>
          <div
            key={index}
            className="country-cont d-flex align-items-center gap-5 border border-black"
            style={{ width: responsive("100%", { sm: "49%" }), margin: "1% 0" }}
          >
            <div className="img-cont" style={{ width: '100px', height: "70px" }}>
              <img className="w-100 h-100" src={currentItem?.flag || ""}/>
            </div>
            <div className="country-info">
              <div
                className="country-name fw-medium"
                style={{ width: responsive("") }}
              >
                {currentItem?.name || ""}
              </div>
              <div className="country-region text-black-50">
                {currentItem?.region || ""}
              </div>
            </div>
          </div>
        )}
      </div>

      {hasMore &&
        <button
          className="load-more-btn bg-dark text-white px-4 py-1"
          disabled={loading}
          onClick={loadMore}
          style={{ width: "fit-content"}}
        >
          Load More
        </button>
      }
    </div>
  );
}
