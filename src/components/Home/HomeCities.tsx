import { useMediaQuery } from "@uidotdev/usehooks";
import HomeCitiesCard from "./HomeCitiesCard";
import { useState } from "react";


const HomeCities = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMediaQuery("only screen and (max-width : 768px)");



  const cardItemsData = [
    {
      title: "Pasadena, Oklahoma",
      description: "100+ listings",
      imgSrc: 'https://assets-global.website-files.com/64e2f6e9e8285220bd834d6e/64e2f6e9e8285220bd834da5_Estately%20City%20-%20Pasadena%2C%20Oklahoma.webp'
    },
    {
      title: "Pasadena, Oklahoma",
      description: "100+ listings",
      imgSrc: 'https://assets-global.website-files.com/64e2f6e9e8285220bd834d6e/64e2f6e9e8285220bd834da3_Estately%20City%20-%20Lafayette%2C%20California.webp'
    },
    {
      title: "Pasadena, Oklahoma",
      description: "100+ listings",
      imgSrc: 'https://assets-global.website-files.com/64e2f6e9e8285220bd834d6e/64e2f6e9e8285220bd834da4_Estately%20City%20-%20New%20York.webp'
    }
  ]

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardItemsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cardItemsData.length) % cardItemsData.length
    );
  };
  return (
    <div className="container">
      <div className="cities__wrapper">
        <div className="cities__header">
          <h2>Explore Cities</h2>
          <span>
            Browse All Cities <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14.4302 5.92993L20.5002 11.9999L14.4302 18.0699" stroke="#191A23" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M3.5 12H20.33" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
          </span>
        </div>
        <div className="card__wrapper--grid card__wrapper--grid__md-col--3">
          {isMobile ? (
            <>{<HomeCitiesCard title={cardItemsData[currentIndex].title} description={cardItemsData[currentIndex].description} imgSrc={cardItemsData[currentIndex].imgSrc} />}</>
          ) : (
            <>
             {cardItemsData.map((item, index) => (
              <HomeCitiesCard
                key={index}
                title={item.title}
                description={item.description}
                imgSrc={item.imgSrc}
              />
            ))}
            </>
          )}
        </div>
        <div className="btn__navigation">
          <button onClick={handlePrev}>
            <img src="/left-arrow.svg" alt="back" />
          </button>
          <button onClick={handleNext}>
            <img src="/right-arrow.svg" alt="next" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeCities;
