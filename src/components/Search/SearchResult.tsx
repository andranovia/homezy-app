
import SearchCardItem from "./SearchCardItem";
import Pagination from "../Pagination";

const SearchResult = () => {
  return (
    <div className="search__result">
      <div className="search__result__header">
        <h4>124 Results</h4>
        <div className="search__result__header--filter">
          <button className="filter__button filter__button--active">
            <img src="/placeholder.svg" alt="filter" />
          </button>
          <button className="filter__button">
            <img src="/placeholder.svg" alt="filter" />
          </button>
        </div>
      </div>
      <div className="search__result__content">
       <SearchCardItem/>
       <SearchCardItem/>
       <SearchCardItem/>
       <Pagination postsPerPage={3} totalPosts={20}/>
      </div>
    </div>
  );
};

export default SearchResult;
