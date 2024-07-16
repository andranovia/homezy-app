import React from 'react'

const HomeTestimonialItem = () => {
  return (
    <div className="card__review--item">
    <div className="card__review--item__rating">
      {[...Array(5)].map((_, index) => (
        <img src="/placeholder.svg" alt="" key={index} />
      ))}
    </div>
    <div className="card__review--item__text">
      <p> "Your company is truly upstanding and is behind its product 100%.
      It's the perfect solution for our business. It has really helped
      our business."</p>
     
    </div>
    <div className="card__review--item__user">
      <div className="user--info">
        <h4>Brooklyn Simmons</h4>
        <span>CEO of Asana</span>
      </div>
      <img src="/placeholder.svg" alt="" />
    </div>
  </div>
  )
}

export default HomeTestimonialItem