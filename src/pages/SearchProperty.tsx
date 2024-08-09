import { useState } from "react";
import BaseLayout from "../Layouts/BaseLayout";
import SearchMap from "../components/Search/SearchMap";
import SearchResult from "../components/Search/SearchResult";

const SearchProperty = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };
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
                            <div className="filter__button" onClick={toggleModal}>
                                <img src="/placeholder.svg" alt="" />
                                <p>More Filter</p>
                            </div>
                            {showModal ? (
                                <div className="filter__modal">
                                    <div className="filter__modal--header">
                                        <h4>More Filter</h4>
                                        <div className="filter__modal--header__switch">
                                            <button className="filter__modal--header__switch__btn filter__modal--header__switch__btn--active">
                                                For Sale
                                            </button>
                                            <button className="filter__modal--header__switch__btn">For Rent</button>
                                        </div>
                                    </div>
                                    <div className="filter__modal--content">
                                        <div className="filter__modal--content__category">
                                            <h4>Category</h4>
                                            <select>
                                                <option value="">Category 1</option>
                                                <option value="">Category 2</option>
                                            </select>
                                        </div>

                                        <div className="filter__modal--content__bedrooms">
                                        <h4>Bedrooms</h4>
                                            <select>
                                                <option value="">Category 1</option>
                                                <option value="">Category 2</option>
                                            </select>
                                        </div>
                                        <div className="filter__modal--content__bathrooms">
                                        <h4>Bathrooms</h4>
                                            <select>
                                                <option value="">1 beds</option>
                                                <option value="">2 beds</option>
                                                <option value="">3 beds</option>
                                            </select>
                                        </div>
                                        <div className="filter__modal--content__floorArea">
                                        <h4>Floor Area</h4>
                                            <select>
                                                <option value="">Floor 1</option>
                                                <option value="">Floor 2</option>
                                            </select>
                                        </div>
                                        <div className="filter__modal--content__minYear">
                                        <h4>Year Build</h4>
                                            <select>
                                                <option value="">Min Year</option>
                                                <option value="">Min Year 2</option>
                                            </select>
                                        </div>
                                        <div className="filter__modal--content__maxYear">
                                            <select>
                                                <option value="">Max Year</option>
                                                <option value="">Max Year 2</option>
                                            </select>
                                        </div>
                                        <button onClick={toggleModal} className="filter__modal--content__btn filter__modal--content__btn--secondary  btn">Cancel</button>
                                        <button onClick={toggleModal} className="filter__modal--content__btn btn btn--primary">Apply Filter</button>
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    </div>
                    <div className="search__content">
                        <div className="search__content__left">
                            <SearchMap />
                        </div>
                        <div className="search__content__right">
                            <SearchResult />
                        </div>
                    </div>
                </div>
            </div>
        </BaseLayout>
    );
};

export default SearchProperty;
