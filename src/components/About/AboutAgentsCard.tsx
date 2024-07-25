

const AboutAgentsCard = () => {
  return (
    <div className="agent__card">
      <div className="agent__card--img">
        <img src="/placeholder.svg" alt="" />
      </div>
      <div className="card__profile card__agents">
        <div className="card__profile__text card__agents__text">
          <h6>Edwin Martins</h6>
          <p>CEO Founder</p>

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
  );
};

export default AboutAgentsCard;
