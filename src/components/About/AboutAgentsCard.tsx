

const AboutAgentsCard = ({imgSrc, title, position}: {imgSrc: string, title: string, position: string}) => {
  return (
    <div className="agent__card">
      <div className="agent__card--img">
        <img src={imgSrc} alt="" />
      </div>
      <div className="card__profile card__agents">
        <div className="card__profile__text card__agents__text">
          <h6>{title}</h6>
          <p>{position}</p>

          <div className="card__profile__text--social card__agents__social">
            <div className="card__profile__text--social__item  card__agents__social--item">
              <img src="/call.svg" alt="" />
            </div>
            <div className="card__profile__text--social__item  card__agents__social--item">
              <img src="/facebook.svg" alt="" />
            </div>
            <div className="card__profile__text--social__item  card__agents__social--item">
              <img src="/instagram.svg" alt="" />
            </div>
            <div className="card__profile__text--social__item  card__agents__social--item">
              <img src="/twitter.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAgentsCard;
