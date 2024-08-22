import HomeFeaturedCardMain from "./HomeFeaturedCardMain";
import HomeFeaturedCardItem from "./HomeFeaturedCardItem";
import { Link } from "react-router-dom";


const cardItemsData = [
  {
    imgSrc: "/home-img-1.jpg",
    title: "Beach Pros Reality Inc.",
    price: "$2500",
  },
  {
    imgSrc: "/home-img-3.png",
    title: "Beach Pros Reality Inc.",
    price: "$2500",
  },
  {
    imgSrc: "/home-img-2.jpg",
    title: "Beach Pros Reality Inc.",
    price: "$2500",
  },
]

const HomeFeatured = () => {

  return (
    <div className="container">
      <div className="featured__wrapper">
        <div className="featured__header">
          <h2>Featured Listing</h2>
          <span>
            Browse All Featured <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.4302 5.92993L20.5002 11.9999L14.4302 18.0699" stroke="#191A23" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M3.5 12H20.33" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </span>
        </div>
        <HomeFeaturedCardMain />
        <div className="card__wrapper--grid card__wrapper--grid__md-col--1">
          {cardItemsData.map((item, index) => (
            <Link to="/property/details" className="custom-link" key={index}>
              <HomeFeaturedCardItem itemData={item} />
            </Link>
          ))}


        </div>
      </div>
    </div>
  );
};

export default HomeFeatured;
