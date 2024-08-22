

const HomeAgentsItem = ({name, profession, imgSrc}: {name:string, profession: string, imgSrc: string}) => {
  return (
    <div className="card__profile card__agents">
                        <div className="card__profile__text card__agents__text">
                            <h6>{name}</h6>
                            <p>{profession}</p>

                            <div className="card__profile__text--social card__agents__social">
                                <div className="card__profile__text--social__item card__agents__social--item">
                                    {" "}
                                    <img src="/call.svg" alt="" />
                                </div>
                                <div className="card__profile__text--social__item  card__agents__social--item">
                                    {" "}
                                    <img src="/instagram.svg" alt="" />
                                </div>
                                <div className="card__profile__text--social__item  card__agents__social--item">
                                    {" "}
                                    <img src="/facebook.svg" alt="" />
                                </div>
                                <div className="card__profile__text--social__item  card__agents__social--item">
                                    {" "}
                                    <img src="/twitter.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="card__profile--img card__agents__photo">
                            {" "}
                            <img src={imgSrc} alt="" />
                        </div>
                    </div>
  )
}

export default HomeAgentsItem