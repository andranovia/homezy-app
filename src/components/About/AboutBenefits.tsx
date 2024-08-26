import { useState } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import AboutBenefitsCardItem from "./AboutBenefitsCardItem";

const AboutBenefits = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMediaQuery("only screen and (max-width : 768px)");

  const items = [
    <AboutBenefitsCardItem iconSrc="/coin.svg" key="1" title="Affordable Price" description="We provide the best for you. The price we offer accordance with the quality we provide" />,
    <AboutBenefitsCardItem iconSrc="/thunder.svg" key="2" title="Affordable Price 2" description="We provide the best for you. The price we offer accordance with the quality we provide" />,
    <AboutBenefitsCardItem iconSrc="/thumb.svg" key="3" title="Affordable Price 3" description="We provide the best for you. The price we offer accordance with the quality we provide" />,
    <AboutBenefitsCardItem iconSrc="/people.svg" key="4" title="Affordable Price 4" description="We provide the best for you. The price we offer accordance with the quality we provide" />
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
      <div className="about__benefits--wrapper">
        <div className="about__benefits--header">
          <h2>Comfort is Our Top Priority For You</h2>
          <span>
            We guarantee that the products we sell will make our customers happy because we are very concerned about our consumer satisfaction
          </span>
        </div>
        <div className="card__wrapper--grid card__wrapper--grid__col--4 about__benefits--cards">
          {isMobile ? (
            <>{items[currentIndex]}</>
          ) : (
            <>
              <AboutBenefitsCardItem iconSrc="/coin.svg" key="1" title="Affordable Price" description="We provide the best for you. The price we offer accordance with the quality we provide" />
              <AboutBenefitsCardItem iconSrc="/thunder.svg" key="2" title="Affordable Price 2" description="We provide the best for you. The price we offer accordance with the quality we provide" />
              <AboutBenefitsCardItem iconSrc="/thumb.svg" key="3" title="Affordable Price 3" description="We provide the best for you. The price we offer accordance with the quality we provide" />
              <AboutBenefitsCardItem iconSrc="/people.svg" key="4" title="Affordable Price 4" description="We provide the best for you. The price we offer accordance with the quality we provide" />
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

export default AboutBenefits;
