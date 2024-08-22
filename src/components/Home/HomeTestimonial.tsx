import { useState } from "react";
import HomeTestimonialItem from "./HomeTestimonialItem";
import { useMediaQuery } from "@uidotdev/usehooks";

const HomeTestimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMediaQuery("only screen and (max-width : 768px)");

  const items = [
    <HomeTestimonialItem
      userData={{
        name: "Brooklyn Simmons",
        profession: "CEO of Asana",
      }}
      review="Your company is truly upstanding and is behind its product 100%.
It's the perfect solution for our business. It has really helped
our business."
    />,
    <HomeTestimonialItem
      userData={{
        name: "Brooklyn Simmons 2",
        profession: "CEO of Asana",
      }}
      review="Your company is truly upstanding and is behind its product 100%.
It's the perfect solution for our business. It has really helped
our business."
    />,
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
      <div className="testimonial__wrapper">
        <div className="testimonial__header">
          <h2>Kind Words From Our Customers</h2>
        </div>
        <div className="card__wrapper--grid card__wrapper--grid__col--3 testimonial__contents">
          {isMobile ? (
            <>{items[currentIndex]}</>
          ) : (
            <>
              <HomeTestimonialItem
                userData={{
                  name: "Brooklyn Simmons",
                  profession: "CEO of Asana",
                }}
                review="Your company is truly upstanding and is behind its product 100%.
      It's the perfect solution for our business. It has really helped
      our business."
              />
              <HomeTestimonialItem
                userData={{
                  name: "Brooklyn Simmons 2",
                  profession: "CEO of Asana",
                }}
                review="Your company is truly upstanding and is behind its product 100%.
      It's the perfect solution for our business. It has really helped
      our business."
              />
              <HomeTestimonialItem
                userData={{
                  name: "Brooklyn Simmons 2",
                  profession: "CEO of Asana",
                }}
                review="Your company is truly upstanding and is behind its product 100%.
      It's the perfect solution for our business. It has really helped
      our business."
              />
            </>
          )}
        </div>
        <div className="btn__navigation testimonial__navigation">
          <button onClick={handlePrev}>
            <img src="/left-arrow.svg" alt="back" />
          </button>
          <button onClick={handleNext}>
            <img src="/right-arrow.svg" alt="right" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeTestimonial;
