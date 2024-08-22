const HomeFeaturedCategoryItem = ({itemData}: {itemData: {
  title: string;
  listings: string;
  iconSrc: string;
}}) => {
  return (
    <div className="categories__item">
      <div className="categories__item--content">
        <img src={itemData.iconSrc} alt="" />
        <div className="categories__item--content__text">
          <h4>{itemData.title}</h4>
          <span>{itemData.listings} listings</span>
        </div>
      </div>
      <div className="categories__item--link">
        <span>
          View <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M16.1672 4.16666L4.50049 15.8333" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
  <path d="M16.1672 12.725V4.16666H7.60889" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
        </span>
      </div>
    </div>
  );
};

export default HomeFeaturedCategoryItem;
