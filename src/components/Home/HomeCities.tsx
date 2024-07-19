import { useMediaQuery } from "@uidotdev/usehooks";
import HomeCitiesCard from "./HomeCitiesCard";
import { useState } from "react";

const HomeCities = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMediaQuery("only screen and (max-width : 768px)");

  const items = [
    <HomeCitiesCard title="Pasadena, Oklahoma" description="100+ listings" />,
    <HomeCitiesCard title="Pasadena, Oklahoma 2" description="100+ listings" />,
    <HomeCitiesCard title="Pasadena, Oklahoma 3" description="100+ listings" />,
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };
  return (
    <div className="container">
      <div className="cities__wrapper">
        <div className="cities__header">
          <h2>Explore Cities</h2>
          <span>
            Browse All Cities <img src="/placeholder.svg" alt="" />
          </span>
        </div>
        <div className="card__wrapper--grid card__wrapper--grid__md-col--3">
          {isMobile ? (
            <>{items[currentIndex]}</>
          ) : (
            <>
              <HomeCitiesCard
                title="Pasadena, Oklahoma"
                description="100+ listings"
              />
              <HomeCitiesCard
                title="Pasadena, Oklahoma 2"
                description="100+ listings"
              />
              <HomeCitiesCard
                title="Pasadena, Oklahoma 3"
                description="100+ listings"
              />
            </>
          )}
        </div>
        <div className="btn__navigation">
          <button onClick={handlePrev}>
            <img src="/placeholder.svg" alt="back" />
          </button>
          <button onClick={handleNext}>
            <img src="/placeholder.svg" alt="next" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeCities;
