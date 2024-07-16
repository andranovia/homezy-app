import React from "react";

const HomeHero = () => {
  return (
    <div className="container">
      <div className="hero__wrapper">
        <div className="hero__left">
          <h1 className="hero__title">
            We welp people to realize their dream property
          </h1>
          <p className="hero__description">
            We are creative people who provide the best way to you who want to
            have a new comfortable and suitable place to live
          </p>
          <div className="hero__cta">
            <div className="hero__cta--item">
              <div className="hero__cta--item__img">
                <img src="/placeholder.svg" alt="" />
              </div>
              <div className="hero__cta--item__text">
                <h6>Location</h6>
                <p>California, US</p>
              </div>
            </div>
            <div className="hero__cta--item">
              <div className="hero__cta--item__img">
                {" "}
                <img src="/placeholder.svg" alt="" />
              </div>
              <div className="hero__cta--item__text">
                <h6>Price</h6>
                <p>$1500-$2500</p>
              </div>
            </div>
            <div className="hero__cta--item">
              <div className="hero__cta--item__img">
                {" "}
                <img src="/placeholder.svg" alt="" />
              </div>
              <div className="hero__cta--item__text">
                <h6>Type of Property</h6>
                <p>Apartment</p>
              </div>
            </div>
            <div className="hero__cta--btn">
              <button className="btn btn--primary">Browse</button>
            </div>
          </div>
        </div>
        <div className="hero__right">
          <div className="hero__card">
            <div className="hero__card--img">
              <div className="img__border">
                <img src="/placeholder.svg" alt="" />
              </div>
            </div>
            <p className="hero__card__text">
              We provide our best properties to give great services possible
            </p>
          </div>
          <div className="hero__profile">
            <div className="hero__profile__text">
              <h6>Edwin Martins</h6>
              <p>Property Advisor</p>

              <div className="hero__profile__text--social">
                <div className="hero__profile__text--social__item">
                  {" "}
                  <img src="/placeholder.svg" alt="" />
                </div>
                <div className="hero__profile__text--social__item">
                  {" "}
                  <img src="/placeholder.svg" alt="" />
                </div>
                <div className="hero__profile__text--social__item">
                  {" "}
                  <img src="/placeholder.svg" alt="" />
                </div>
                <div className="hero__profile__text--social__item">
                  {" "}
                  <img src="/placeholder.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="hero__profile--img"> <img
              src="/placeholder.svg"
              alt=""
            /></div>
          </div>
          <div className="hero__card">
            <img src="/placeholder.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
