

const HomeTestimonialItem = ({review, userData}: {review: string, userData: {
  name: string, profession: string
}}) => {
  return (
    <div className="card__review--item">
    <div className="card__review--item__rating">
      {[...Array(5)].map((_, index) => (
        <img src="/star.svg" alt="" key={index} />
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
      <img src="https://assets-global.website-files.com/64e2f6e9e8285220bd834d6e/64e2f6e9e8285220bd834da6_Estately%20Brand%20-%20Asana.png" alt="" />
    </div>
  </div>
  )
}

export default HomeTestimonialItem