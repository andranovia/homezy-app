import HomeFeaturedCardMain from "./HomeFeaturedCardMain";
import HomeFeaturedCardItem from "./HomeFeaturedCardItem";
import { Link } from "react-router-dom";

const HomeFeatured = () => {
  return (
    <div className="container">
      <div className="featured__wrapper">
        <div className="featured__header">
          <h2>Featured Listing</h2>
          <span>
            Browse All Featured <img src="/placeholder.svg" alt="" />
          </span>
        </div>
        <HomeFeaturedCardMain />
        <div className="card__wrapper--flex">
          {[...Array(3)].map((data, index) => (
            <Link to="/property/details" className="custom-link" key={index}>
              <HomeFeaturedCardItem />
            </Link>
          ))}


        </div>
      </div>
    </div>
  );
};

export default HomeFeatured;
