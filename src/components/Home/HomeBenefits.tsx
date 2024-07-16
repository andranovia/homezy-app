import React from "react";
import HomeBenefitsCardItem from "./HomeBenefitsCardItem";

const HomeBenefits = () => {
  return (
    <div className="container">
      <div className="benefits__wrapper">
        <div className="benefits__header">
          <h2>Comfort is Our Top Priority For You</h2>
          <span>
            We guarantee that the products we sell will make our customers happy
            because we are very concerned about our consumer satisfaction
          </span>
        </div>
        <div className="card__wrapper--flex">
          <HomeBenefitsCardItem />
          <HomeBenefitsCardItem />
          <HomeBenefitsCardItem />
        </div>
      </div>
    </div>
  );
};

export default HomeBenefits;
