

const HomeTestimonialItem = ({review, userData}: {review: string, userData: {
  name: string, profession: string
}}) => {
  return (
    <div className="card__review--item">
    <div className="card__review--item__rating">
      {[...Array(5)].map((_, index) => (
        <img src="/placeholder.svg" alt="" key={index} />
      ))}
    </div>
    <div className="card__review--item__text">
      <p> {review}</p>
     
    </div>
    <div className="card__review--item__user">
      <div className="user--info">
        <h4>{userData.name}</h4>
        <span>{userData.profession}</span>
      </div>
      <img src="/placeholder.svg" alt="" />
    </div>
  </div>
  )
}

export default HomeTestimonialItem