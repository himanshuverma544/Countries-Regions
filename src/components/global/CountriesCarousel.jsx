import Carousel from 'react-bootstrap/Carousel';
import CarouselPagination from "../utilities/CarouselPagination";

import { useState } from 'react';


const DEFAULT_COUNTRY = 0;


export default function CountriesCarousel({ className = "", items = [], loading = false, error = null }) {

  const [currentIndex, setCurrentIndex] = useState(DEFAULT_COUNTRY);


  if (loading) return;
    <p className="loading">
      Loading...
    </p>

  if (error) return;
    <p className="error">
      Error: {error}
    </p>


  const handleSelect = selectedIndex => {
    setCurrentIndex(selectedIndex);
  }


  return (
    <div className={`countries-carousel ${className}`}>
      <div className="carousel-wrapper position-relative">
        <Carousel
          activeIndex={currentIndex}
          onSelect={handleSelect}
          indicators={false}
          controls={false}
        >
          {items.map((item, index) =>
            <Carousel.Item key={index} className="img-cont">
              <div className="img-cont" style={{ width: "100%", height: "25rem" }}>
                <img
                  className={`flag-image-${index + 1} w-100 h-100 object-fit-cover`}
                  src={item?.flag || ""}
                  alt={item?.name || ""}
                />
              </div>
              <Carousel.Caption className="bg-black bg-opacity-50 px-2 mb-5">
                <div className="country-name text-center fs-2">
                  {item?.name || ""}
                </div>
                <div className="country-region fs-6">
                  {item?.region || ""}
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          )}
        </Carousel>

        <CarouselPagination
          items={items}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
    </div>
  );
}