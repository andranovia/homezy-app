import React from "react";
import HomeFeaturedCardMain from "./HomeFeaturedCardMain";
import HomeFeaturedCardItem from "./HomeFeaturedCardItem";

const HomeFeatured = () => {
  return (
    <div className="container">
      <div className="featured__wrapper">
        <div className="featured__header">
          <h2>Featured Listing</h2>
          <span>Browse All Featured</span>
        </div>
        <HomeFeaturedCardMain/>
        <div className="card__wrapper--flex">
        <HomeFeaturedCardItem/>
        <HomeFeaturedCardItem/>
        <HomeFeaturedCardItem/>
        </div>
      </div>
    </div>
  );
};

export default HomeFeatured;
