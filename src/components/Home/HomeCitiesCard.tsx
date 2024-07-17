

const HomeCitiesCard = ({title, description}: {title: string, description: string}) => {
  return (
    <div className="card__icon__item card__cities">
    <img src="/placeholder.svg" alt="" className="card__cities--img"/>

    <div className="card__icon__item--content card__cities--content">
      <div className="card__icon__item--main">
        <h4>{title}</h4>
        <span>
          <img src="/placeholder.svg" alt="" />
          {description}
        </span>
      </div>
    </div>
  </div>
  )
}

export default HomeCitiesCard