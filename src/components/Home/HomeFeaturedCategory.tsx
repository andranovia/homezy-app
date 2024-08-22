
import HomeFeaturedCategoryItem from "./HomeFeaturedCategoryItem";

const cardItemsData = [
  {
    title: "Studio",
    listings: "100+",
    iconSrc: "https://assets-global.website-files.com/64e2f6e9e8285220bd834d3f/64e2f6e9e8285220bd834e3a_Estately%20Property%20Category%20-%20Studio.png",
  },
  {
    title: "Studio",
    listings: "100+",
    iconSrc: "https://assets-global.website-files.com/64e2f6e9e8285220bd834d3f/64e2f6e9e8285220bd834e3b_Estately%20Property%20Category%20-%20Appartment.png",
  },
  {
    title: "Studio",
    listings: "100+",
    iconSrc: "https://assets-global.website-files.com/64e2f6e9e8285220bd834d3f/64e2f6e9e8285220bd834e3c_Estately%20Property%20Category%20-%20Office.png",
  },

]

const HomeFeaturedCategory = () => {
  return (
    <div className="container">
      <div className="categories__wrapper">
        <div className="categories__header">
          <h2>Featured Categories</h2>
          <span>Browse All Categories <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14.4302 5.92993L20.5002 11.9999L14.4302 18.0699" stroke="#191A23" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M3.5 12H20.33" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
</svg></span>
        </div>
        <div className="card__wrapper--grid card__wrapper--grid__md-col--1">
         {
          cardItemsData.map((item, index) => (
            <HomeFeaturedCategoryItem itemData={item} key={index} />
          ))
         }
        </div>
      </div>
    </div>
  );
};

export default HomeFeaturedCategory;
