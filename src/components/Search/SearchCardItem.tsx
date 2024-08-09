

const SearchCardItem = () => {
  return (
    <div className="search__card">
          <img
            src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="card-img"
            className="search__card__img"
          />
          <div className="search__card__info">
            <div className="card__info__header">
              <div className="card__info__header">
                <h4>$2,095 </h4>
              </div>
            </div>

            <div className="card__info__content">
              <div className="card__info--title">
                <h1>Cova Home Realty</h1>
                <span>2699 Green Valey, Highland Lake, FL</span>
              </div>
              <hr />
              <div className="card__info--features">
                <span>
                  <img src="/placeholder.svg" alt="" /> 3 beds
                </span>
                <span>
                  <img src="/placeholder.svg" alt="" /> 2 baths
                </span>
                <span>
                  <img src="/placeholder.svg" alt="" /> 5x7m²
                </span>
              </div>
            </div>
          </div>
        </div>
  )
}

export default SearchCardItem