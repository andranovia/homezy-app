

const HomeBenefitsCardItem = ({title, description}: {title: string, description: string}) => {
  return (
    <div className="card__icon__item">
      <div className="card__icon__item--img"> <img src="/placeholder.svg" alt="" /></div>
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
