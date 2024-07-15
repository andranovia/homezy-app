import React from "react";

const HomeFeatured = () => {
  return (
    <div className="container">
      <div className="featured__wrapper">
        <div className="featured__header">
          <h2>Featured Listing</h2>
          <span>Browse All Featured</span>
        </div>
        <div className="featured__main--card">
        
            <img
              src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="card-img"
              className="featured__main--card__img"
            />

          <div className="featured__main--card__info">
            <div className="card__info__header">
              <div className="card__info__header--left">
                <h4>$2,095 </h4>
                <span>/month</span>
              </div>
              <div className="card__info__header--right">
                <div className="contact__info">
                  <div className="profile__img">🙎‍♂️</div>
                  <div className="profile__info">
                    <h4>Edwin Martins</h4>
                    <span>Property Advisor</span>
                  </div>
                  <div className="contact__icon">☎️</div>
                </div>
              </div>
            </div>

            <div className="card__info__content">
              <div className="card__info--title">
                <h1>Cova Home Realty</h1>
                <span>🤳2699 Green Valey, Highland Lake, FL</span>
              </div>
              <div className="card__info--description">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aliquid magnam omnis. Dolore quisquam aliquid doloremque quos ipsum ut, amet vel ab maxime iste, magni fugit magnam odio minus. <span>Read More</span>
                </p>
              </div>
              <div className="card__info--facilities">
                <div className="card__info--facilities__item">
                    <h4>bedrooms</h4>
                    <span>🛌 4</span>
                </div>
                <div className="card__info--facilities__item">
                    <h4>Bathrooms</h4>
                    <span>🚿 4</span>
                </div>
                <div className="card__info--facilities__item">
                    <h4>Square Area</h4>
                    <span>📝6x8m²</span>
                </div>
                <div className="card__info--facilities__item">
                    <h4>Square Area</h4>
                    <span>👩‍⚖️ Modern Loft</span>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFeatured;
