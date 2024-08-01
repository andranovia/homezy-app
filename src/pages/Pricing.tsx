import React from "react";

const Pricing = () => {
  return (
    <div className="container">
      <div className="pricing__wrapper">
        <div className="pricing__header">
          <h2>Pricing</h2>
          <p>Choose your pricing plan</p>
        </div>
        <div className="pricing__content">
          <div className="pricing__card">
            <div className="pricing__card--header">
                <div className="header__icon"></div>
                <div className="header__title">
                    <h5>Basic Plan</h5>
                    <p>1 property credit</p>
                </div>
            </div>
            <h1>$120</h1>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua</p>
            <hr />
            <div className="pricing__card--benefits">
              <div className="benefits__item">
                <img src="/placeholder.svg" alt="check" />
                <p>1 list property credit</p>
              </div>
              <div className="benefits__item">
                <img src="/placeholder.svg" alt="check" />
                <p>1 list property credit</p>
              </div>
              <div className="benefits__item">
                <img src="/placeholder.svg" alt="check" />
                <p>1 list property credit</p>
              </div>
           
            </div>
            <button className="btn btn--secondary">Purchase Credit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
