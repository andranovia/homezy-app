import React from "react";

const HomeFeaturedCardItem = () => {
  return (
    <div className="card__item">
      <div className="card__item--img">
      <img src="/placeholder.svg" alt="" />
        <div className="card__highlight card__highlight--item">✨ Featured</div>
        <div className="card__highlight  card__highlight--item">
          ✨ Featured
        </div>
      </div>
      <div className="card__item--content">
        <div className="card__item--main">
          <h3>$15,000</h3>
          <h4>Beach Pros Reality Inc.</h4>
          <span>37 Ambleside Gardens, Ilford, IG4 5HH</span>
        </div>
        <hr />
        <div className="card__item--features">
          <span>
            <img src="/placeholder.svg" alt="" /> 3 beds
          </span>
          <span>
            <img src="/placeholder.svg" alt="" /> 2 baths
          </span>
          <span>
            <img src="/placeholder.svg" alt="" /> 5x7m²
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomeFeaturedCardItem;
