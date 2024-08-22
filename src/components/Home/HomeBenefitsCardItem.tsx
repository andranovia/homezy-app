

const HomeBenefitsCardItem = ({title, description, iconSrc}: {title: string, description: string, iconSrc: string}) => {
  return (
    <div className="card__icon__item">
      <div className="card__icon__item--img"> <img src={iconSrc} alt="" /></div>
      <div className="card__icon__item--content">
        <div className="card__icon__item--main">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </div>
  );
};

export default HomeBenefitsCardItem;
