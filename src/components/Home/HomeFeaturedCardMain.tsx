const HomeFeaturedCardMain = () => {
  return (
    <div className="featured__main--card">
      <img
        src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="card-img"
        className="featured__main--card__img"
      />
      <div className="card__highlight">✨ Featured</div>
      <div className="card__highlight">✨ Featured</div>
      <div className="featured__main--card__info">
        <div className="card__info__header">
          <div className="card__info__header--left">
            <h4>$2,095 </h4>
            <span>/month</span>
          </div>
          <div className="card__info__header--right">
            <div className="contact__info">
              <div className="profile__img">
                {" "}
                <img src="/placeholder.svg" alt="" />
              </div>
              <div className="profile__info">
                <h4>Edwin Martins</h4>
                <span>Property Advisor</span>
              </div>
              <div className="contact__icon">
                {" "}
                <img src="/placeholder.svg" alt="" />
              </div>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores aliquid magnam omnis. Dolore quisquam aliquid
              doloremque quos ipsum ut, amet vel ab maxime iste, magni fugit
              magnam odio minus. <span>Read More</span>
            </p>
          </div>
          <div className="card__info--facilities">
            <div className="card__info--facilities__item">
              <h4>bedrooms</h4>
              <span>
                <img src="/placeholder.svg" alt="" /> 4
              </span>
            </div>
            <div className="card__info--facilities__item">
              <h4>Bathrooms</h4>
              <span>
                <img src="/placeholder.svg" alt="" /> 4
              </span>
            </div>
            <div className="card__info--facilities__item">
              <h4>Square Area</h4>
              <span>
                <img src="/placeholder.svg" alt="" /> 6x8m²
              </span>
            </div>
            <div className="card__info--facilities__item">
              <h4>Square Area</h4>
              <span>
                <img src="/placeholder.svg" alt="" /> Modern Loft
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFeaturedCardMain;
