import { useState } from "react";
import AboutAgentsCard from "./AboutAgentsCard";
import { useMediaQuery } from "@uidotdev/usehooks";

const AboutAgents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMediaQuery("only screen and (max-width : 768px)");

  const items = [
    <AboutAgentsCard />,
    <AboutAgentsCard />,
    <AboutAgentsCard />,
    <AboutAgentsCard />,
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
      <div className="about__agents--wrapper">
        <div className="about__agents--header">
          <h2>Meet Our Teams</h2>
        </div>
        <div className="card__wrapper--grid card__wrapper--grid__col--4 about__agents--contents">
          {isMobile ? (
            <>{items[currentIndex]}</>
          ) : (
            <>
              <AboutAgentsCard />
              <AboutAgentsCard />
              <AboutAgentsCard />
              <AboutAgentsCard />
            </>
          )}
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
    </div>
  );
};

export default AboutAgents;
