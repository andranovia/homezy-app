import { useState } from "react";
import HomeAgentsItem from "./HomeAgentsItem";
import { useMediaQuery } from "@uidotdev/usehooks";

const HomeAgents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMediaQuery("only screen and (max-width : 910px)");

  const items = [
    <HomeAgentsItem name="Edwin Martins" profession="Property Advisor" />,
    <HomeAgentsItem name="Edwin Martins 2" profession="Property Advisor" />,
    <HomeAgentsItem name="Edwin Martins 3" profession="Property Advisor" />,
    <HomeAgentsItem name="Edwin Martins 4 " profession="Property Advisor" />,
    <HomeAgentsItem name="Edwin Martins 5" profession="Property Advisor" />,
    <HomeAgentsItem name="Edwin Martins 6" profession="Property Advisor" />,
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
      <div className="agents__wrapper">
        <div className="agents__header">
          <h2>Meet Our Agent</h2>
          <span>
            Browse All Agents
            <img src="/placeholder.svg" alt="" />
          </span>
        </div>
        <div className="card__wrapper--grid ">
          {isMobile ? (
            <>{items[currentIndex]}</>
          ) : (
            <>
              <HomeAgentsItem
                name="Edwin Martins"
                profession="Property Advisor"
              />
              <HomeAgentsItem
                name="Edwin Martins"
                profession="Property Advisor"
              />
              <HomeAgentsItem
                name="Edwin Martins"
                profession="Property Advisor"
              />
              <HomeAgentsItem
                name="Edwin Martins"
                profession="Property Advisor"
              />
              <HomeAgentsItem
                name="Edwin Martins"
                profession="Property Advisor"
              />
              <HomeAgentsItem
                name="Edwin Martins"
                profession="Property Advisor"
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

export default HomeAgents;
