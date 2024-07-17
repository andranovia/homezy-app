

const HomeAgentsItem = ({name, profession}: {name:string, profession: string}) => {
  return (
    <div className="card__profile card__agents">
                        <div className="card__profile__text card__agents__text">
                            <h6>{name}</h6>
                            <p>{profession}</p>

                            <div className="card__profile__text--social card__agents__social">
                                <div className="card__profile__text--social__item card__agents__social--item">
                                    {" "}
                                    <img src="/placeholder.svg" alt="" />
                                </div>
                                <div className="card__profile__text--social__item  card__agents__social--item">
                                    {" "}
                                    <img src="/placeholder.svg" alt="" />
                                </div>
                                <div className="card__profile__text--social__item  card__agents__social--item">
                                    {" "}
                                    <img src="/placeholder.svg" alt="" />
                                </div>
                                <div className="card__profile__text--social__item  card__agents__social--item">
                                    {" "}
                                    <img src="/placeholder.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="card__profile--img card__agents__photo">
                            {" "}
                            <img src="/placeholder.svg" alt="" />
                        </div>
                    </div>
  )
}

export default HomeAgentsItem