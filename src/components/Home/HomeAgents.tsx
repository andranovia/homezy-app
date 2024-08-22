import { useState } from "react";
import HomeAgentsItem from "./HomeAgentsItem";
import { useMediaQuery } from "@uidotdev/usehooks";

const HomeAgents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMediaQuery("only screen and (max-width : 910px)");
  const cardItemsData = [
    {
      name: "Edwin Martins",
      profession: "Property Advisor",
      imgSrc: 'https://assets-global.website-files.com/64e2f6e9e8285220bd834d3f/64e2f6e9e8285220bd834dd4_Estately%20Agent%20-%20Edwin%20Martins.png'
    },
    {
      name: "Edwin Martins",
      profession: "Property Advisor",
      imgSrc: 'https://assets-global.website-files.com/64e2f6e9e8285220bd834d3f/64e2f6e9e8285220bd834d7f_Estately%20Agent%20-%20Robert%20Fox.png'
    },
    {
      name: "Edwin Martins",
      profession: "Property Advisor",
      imgSrc: 'https://assets-global.website-files.com/64e2f6e9e8285220bd834d3f/64e2f6e9e8285220bd834d9e_Estately%20Agent%20-%20Guy%20Hawkins.png'
    },
    {
      name: "Edwin Martins",
      profession: "Property Advisor",
      imgSrc: 'https://assets-global.website-files.com/64e2f6e9e8285220bd834d3f/64e2f6e9e8285220bd834db6_Estately%20Agent%20-%20Jane%20Cooper.png'
    },
    {
      name: "Edwin Martins",
      profession: "Property Advisor",
      imgSrc: 'https://assets-global.website-files.com/64e2f6e9e8285220bd834d3f/64e2f6e9e8285220bd834de9_Estately%20Agent%20-%20Wade%20Warren.png'
    },
    {
      name: "Edwin Martins",
      profession: "Property Advisor",
      imgSrc: 'https://assets-global.website-files.com/64e2f6e9e8285220bd834d3f/64e2f6e9e8285220bd834dfe_Estately%20Agent%20-%20Kathryn%20Murphy.png'
    },
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
      <div className="agents__wrapper">
        <div className="agents__header">
          <h2>Meet Our Agent</h2>
          <span>
            Browse All Agents
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14.4302 5.92993L20.5002 11.9999L14.4302 18.0699" stroke="#191A23" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M3.5 12H20.33" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
          </span>
        </div>
        <div className="card__wrapper--grid ">
          {isMobile ? (
            <>{<HomeAgentsItem name={cardItemsData[currentIndex].name} profession={cardItemsData[currentIndex].profession} imgSrc={cardItemsData[currentIndex].imgSrc}/>}</>
          ) : (
            <>
              {cardItemsData.map((item, index) => (
                <HomeAgentsItem
                  key={index}
                  name={item.name}
                  profession={item.profession}
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

export default HomeAgents;
