

const HomeCitiesCard = ({ title, description, imgSrc }: { title: string, description: string, imgSrc: string }) => {
  return (
    <div className="card__icon__item card__cities">
      <img src={imgSrc} alt="" className="card__cities--img" />

      <div className="card__icon__item--content card__cities--content">
        <div className="card__icon__item--main">
          <h4>{title}</h4>
          <div className="card__icon__item--main__listing">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 22H22" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M2.9502 22L3.00019 9.96999C3.00019 9.35999 3.2902 8.78004 3.7702 8.40004L10.7702 2.95003C11.4902 2.39003 12.5002 2.39003 13.2302 2.95003L20.2302 8.39003C20.7202 8.77003 21.0002 9.34999 21.0002 9.96999V22" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round"></path>
              <path d="M13 17H11C10.17 17 9.5 17.67 9.5 18.5V22H14.5V18.5C14.5 17.67 13.83 17 13 17Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round"></path>
              <path d="M9.5 13.75H7.5C6.95 13.75 6.5 13.3 6.5 12.75V11.25C6.5 10.7 6.95 10.25 7.5 10.25H9.5C10.05 10.25 10.5 10.7 10.5 11.25V12.75C10.5 13.3 10.05 13.75 9.5 13.75Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round"></path>
              <path d="M16.5 13.75H14.5C13.95 13.75 13.5 13.3 13.5 12.75V11.25C13.5 10.7 13.95 10.25 14.5 10.25H16.5C17.05 10.25 17.5 10.7 17.5 11.25V12.75C17.5 13.3 17.05 13.75 16.5 13.75Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round"></path>
              <path d="M18.9998 7L18.9698 4H14.5698" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            <span>
            {description}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeCitiesCard