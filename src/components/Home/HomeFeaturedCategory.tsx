
import HomeFeaturedCategoryItem from "./HomeFeaturedCategoryItem";

const HomeFeaturedCategory = () => {
  return (
    <div className="container">
      <div className="categories__wrapper">
        <div className="categories__header">
          <h2>Featured Categories</h2>
          <span>Browse All Categories <img src="/placeholder.svg" alt="" /></span>
        </div>
        <div className="card__wrapper--grid card__wrapper--grid__md-col--1">
          <HomeFeaturedCategoryItem/>
          <HomeFeaturedCategoryItem/>
          <HomeFeaturedCategoryItem/>
        </div>
      </div>
    </div>
  );
};

export default HomeFeaturedCategory;
