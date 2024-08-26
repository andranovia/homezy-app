import { useState } from "react";
import AboutAgentsCard from "./AboutAgentsCard";
import { useMediaQuery } from "@uidotdev/usehooks";

const AboutAgents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMediaQuery("only screen and (max-width : 768px)");

  const items = [
    <AboutAgentsCard imgSrc="https://assets-global.website-files.com/64e2f6e9e8285220bd834d6e/64e2f6e9e8285220bd834dbf_Estately%20Team%20-%20David%20Brown.webp" title="David Brown" position="CEO Founder"/>,
    <AboutAgentsCard  imgSrc="https://assets-global.website-files.com/64e2f6e9e8285220bd834d6e/64e2f6e9e8285220bd834dc0_Estately%20Team%20-%20Tom%20Johnson.webp" title="David Brown" position="CEO Founder"/>,
    <AboutAgentsCard  imgSrc="https://assets-global.website-files.com/64e2f6e9e8285220bd834d6e/64e2f6e9e8285220bd834dc1_Estately%20Team%20-%20Sarah%20Lee.webp" title="David Brown" position="CEO Founder"/>,
    <AboutAgentsCard  imgSrc="https://assets-global.website-files.com/64e2f6e9e8285220bd834d6e/64e2f6e9e8285220bd834dc2_Estately%20Team%20-%20John%20Smith.webp" title="David Brown" position="CEO Founder"/>,
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
              <AboutAgentsCard  imgSrc="https://assets-global.website-files.com/64e2f6e9e8285220bd834d6e/64e2f6e9e8285220bd834dbf_Estately%20Team%20-%20David%20Brown.webp" title="David Brown" position="CEO Founder" />
              <AboutAgentsCard  imgSrc="https://assets-global.website-files.com/64e2f6e9e8285220bd834d6e/64e2f6e9e8285220bd834dc0_Estately%20Team%20-%20Tom%20Johnson.webp" title="David Brown" position="CEO Founder"/>
              <AboutAgentsCard  imgSrc="https://assets-global.website-files.com/64e2f6e9e8285220bd834d6e/64e2f6e9e8285220bd834dc1_Estately%20Team%20-%20Sarah%20Lee.webp" title="David Brown" position="CEO Founder"/>
              <AboutAgentsCard  imgSrc="https://assets-global.website-files.com/64e2f6e9e8285220bd834d6e/64e2f6e9e8285220bd834dc2_Estately%20Team%20-%20John%20Smith.webp" title="David Brown" position="CEO Founder"/>
            </>
          )}
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
    </div>
  );
};

export default AboutAgents;
