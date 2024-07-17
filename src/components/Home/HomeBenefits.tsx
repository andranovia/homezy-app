import { useState } from "react";
import HomeBenefitsCardItem from "./HomeBenefitsCardItem";
import { useMediaQuery } from "@uidotdev/usehooks";

const HomeBenefits = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMediaQuery("only screen and (max-width : 768px)");

  const items = [
    <HomeBenefitsCardItem key="1" title="Affordable Price" description="We provide the best for you. The price we offer accordance with the quality we provide"/>,
    <HomeBenefitsCardItem key="2" title="Affordable Price 2" description="We provide the best for you. The price we offer accordance with the quality we provide"/>,
    <HomeBenefitsCardItem key="3" title="Affordable Price 3" description="We provide the best for you. The price we offer accordance with the quality we provide"/>,
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
      <div className="benefits__wrapper">
        <div className="benefits__header">
          <h2>Comfort is Our Top Priority For You</h2>
          <span>
            We guarantee that the products we sell will make our customers happy
            because we are very concerned about our consumer satisfaction
          </span>
        </div>
        <div className="card__wrapper--flex">
          {isMobile ? (
            <>{items[currentIndex]}</>
          ) : (
            <>
              <HomeBenefitsCardItem key="1" title="Affordable Price" description="We provide the best for you. The price we offer accordance with the quality we provide"/>,
              <HomeBenefitsCardItem key="2" title="Affordable Price" description="We provide the best for you. The price we offer accordance with the quality we provide"/>,
              <HomeBenefitsCardItem key="3"title="Affordable Price" description="We provide the best for you. The price we offer accordance with the quality we provide" />,
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

export default HomeBenefits;
