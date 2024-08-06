import React from "react";
import BaseLayout from "../Layouts/BaseLayout";
import Pagination from "../components/Pagination";

const Agent = () => {
  return (
    <BaseLayout newsletter={false}>
      <div className="container">
        <div className="agent__wrapper">
          <div className="agent__header">
            <h2>Meet Our Agents</h2>
          </div>
          <div className="agent__content">
            {[...Array(8)].map((_, index) => {
              return (
                <React.Fragment key={index}>
                  <div className="agent__card--item">
                    <div className="agent__card--img">
                      <img src="/placeholder.svg" alt="" />
                    </div>
                    <div className="card__profile card__agents">
                      <div className="card__profile__text card__agents__text">
                        <h6>Wade Warren</h6>
                        <p>Property Advisor</p>

                        <div className="card__profile__text--social card__agents__social">
                          <div className="card__profile__text--social__item  card__agents__social--item">
                            <img src="/placeholder.svg" alt="" />
                          </div>
                          <div className="card__profile__text--social__item  card__agents__social--item">
                            <img src="/placeholder.svg" alt="" />
                          </div>
                          <div className="card__profile__text--social__item  card__agents__social--item">
                            <img src="/placeholder.svg" alt="" />
                          </div>
                          <div className="card__profile__text--social__item  card__agents__social--item">
                            <img src="/placeholder.svg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          
          </div>
          <Pagination postsPerPage={8} totalPosts={40} />
        </div>
      </div>
    </BaseLayout>
  );
};

export default Agent;
