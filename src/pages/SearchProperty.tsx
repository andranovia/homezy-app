import React from "react";
import BaseLayout from "../Layouts/BaseLayout";
import SearchMap from "../components/Search/SearchMap";
import SearchResult from "../components/Search/SearchResult";

const SearchProperty = () => {
    return (
        <BaseLayout newsletter={false}>
            <div className="container">
                <div className="search__wrapper">
                    <div className="search__header">
                        <h2>Search Properties</h2>
                        <div className="search__header__filter">
                            <div className="filter__search">
                                <div className="filter__search--item">
                                    <div className="filter__search--item__img">
                                        <img src="/placeholder.svg" alt="" />
                                    </div>
                                    <div className="filter__search--item__text">
                                        <h6>Location</h6>
                                        <p>California, US</p>
                                    </div>
                                </div>
                                <div className="filter__search--item">
                                    <div className="filter__search--item__img">
                                        <img src="/placeholder.svg" alt="" />
                                    </div>
                                    <div className="filter__search--item__text">
                                        <h6>Price</h6>
                                        <p>$1500-$2500</p>
                                    </div>
                                </div>
                                <div className="filter__search--item">
                                    <div className="filter__search--item__img">
                                        <img src="/placeholder.svg" alt="" />
                                    </div>
                                    <div className="filter__search--item__text">
                                        <h6>Type of Property</h6>
                                        <p>Apartment</p>
                                    </div>
                                </div>

                                <div className="filter__search--btn">
                                    <button className="btn btn--primary">Browse</button>
                                </div>
                            </div>
                            <div className="filter__button"><img src="/placeholder.svg" alt="" /><p>More Filter</p></div>
                        </div>
                    </div>
                    <div className="search__content">
                        <div className="search__content__left"><SearchMap/></div>
                        <div className="search__content__right"><SearchResult/></div>
                    </div>
                </div>
            </div>
        </BaseLayout>
    );
};

export default SearchProperty;
