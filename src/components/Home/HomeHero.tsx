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
              <div className="hero__cta--item__img">🤳</div>
              <div className="hero__cta--item__text">
                <h6>Location</h6>
                <p>California, US</p>
              </div>
            </div>
            <div className="hero__cta--item">
              <div className="hero__cta--item__img">🤳</div>
              <div className="hero__cta--item__text">
                <h6>Price</h6>
                <p>$1500-$2500</p>
              </div>
            </div>
            <div className="hero__cta--item">
              <div className="hero__cta--item__img">🤳</div>
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
                <img
                  src="https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
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
                <div className="hero__profile__text--social__item">☎️</div>
                <div className="hero__profile__text--social__item">☎️</div>
                <div className="hero__profile__text--social__item">☎️</div>
                <div className="hero__profile__text--social__item">☎️</div>
              </div>
            </div>
            <div className="hero__profile--img">🙎‍♂️</div>
          </div>
          <div className="hero__card">
            <img
              src="https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
