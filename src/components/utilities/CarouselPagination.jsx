export default function CarouselPagination({ items = [], currentIndex = 0, setCurrentIndex = () => {} }) {
  
  return (
    <div className="carousel-custom-dots-pagination w-100 position-absolute d-flex flex-wrap justify-content-center align-items-center bottom-0 mb-3 z-2">
      <button
        className="previous-slide border-0 me-3 bg-transparent"
        onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
      >
        <i className="fa-solid fa-chevron-left text-white-50 fw-bold"></i>
      </button>

      {Array.from({ length: 3 }).map((_, index) => {
        const mappedIndex = currentIndex - (currentIndex % 3) + index;
        return (
          <button
            key={index}
            className={`mx-1 rounded-circle border-0 ${currentIndex === mappedIndex ? 'bg-white' : 'bg-secondary'}`}
            style={{ width: "10px", height: "10px" }}
            onClick={() => setCurrentIndex(mappedIndex)}
          />
        );
      })}

      <button
        className="next-slide border-0 ms-3 bg-transparent"
        onClick={() => setCurrentIndex(prev => Math.min(items.length - 1, prev + 1))}
      >
        <i className="fa-solid fa-chevron-right text-white-50 fw-bold"></i>
      </button>
    </div>
  );
}