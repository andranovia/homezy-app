import React from "react";
import HomeFeaturedCategoryItem from "./HomeFeaturedCategoryItem";
import HomeCitiesCard from "./HomeCitiesCard";

const HomeCities = () => {
  return (
    <div className="container">
      <div className="cities__wrapper">
        <div className="cities__header">
          <h2>Explore Cities</h2>
          <span>Browse All Cities</span>
        </div>
        <div className="card__wrapper--flex">
          <HomeCitiesCard/>
          <HomeCitiesCard/>
          <HomeCitiesCard/>
          
        </div>
      </div>
    </div>
  );
};

export default HomeCities;
