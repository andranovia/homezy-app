import React from "react";
import HomeFeaturedCategoryItem from "./HomeFeaturedCategoryItem";

const HomeFeaturedCategory = () => {
  return (
    <div className="container">
      <div className="categories__wrapper">
        <div className="categories__header">
          <h2>Featured Categories</h2>
          <span>Browse All Categories</span>
        </div>
        <div className="card__wrapper--flex">
          <HomeFeaturedCategoryItem/>
          <HomeFeaturedCategoryItem/>
          <HomeFeaturedCategoryItem/>
        </div>
      </div>
    </div>
  );
};

export default HomeFeaturedCategory;
