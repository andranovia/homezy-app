import HomeFeaturedCardItem from "../components/Home/HomeFeaturedCardItem";
import PropertyMap from "../components/map/PropertyMap";
import BaseLayout from "../Layouts/BaseLayout";



const cardItemsData = [
  {
    imgSrc: "/home-img-1.jpg",
    title: "Beach Pros Reality Inc.",
    price: "$2500",
  },
  {
    imgSrc: "/home-img-3.png",
    title: "Beach Pros Reality Inc.",
    price: "$2500",
  },
  {
    imgSrc: "/home-img-2.jpg",
    title: "Beach Pros Reality Inc.",
    price: "$2500",
  },
]

const PropertyDetails = () => {
  return (
    <BaseLayout newsletter={false}>
      <div className="property__details--wrapper container">
        <div className="property__details--navigation">
          <img src="/left-arrow-dark.svg" alt="" />
          <h6>Back To Search</h6>
        </div>
        <div className="property__details--images">
          <img
            src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="placeholder"
            className="property__details--img-1"
          />
          <img
            src="https://cdn.prod.website-files.com/64e2f6e9e8285220bd834d6e/64e2f6e9e8285220bd834dba_Estately%20Property%20-%20Photo%20Gallery%201.webp"
            alt="placeholder"
            className="property__details--img-2"
          />
          <div className="property__details--img-last">
            <img
              src="https://cdn.prod.website-files.com/64e2f6e9e8285220bd834d6e/64e2f6e9e8285220bd834dbc_Estately%20Property%20-%20Photo%20Gallery%202.webp"
              alt="placeholder"
              className="property__details--img-3"
            />
            <button className="btn btn--secondary"><img src="/placeholder.svg" alt="" />Show All Photos</button>
          </div>
          <div className="property__details--img-btn">   <button className="btn btn--secondary"><img src="/placeholder.svg" alt="" />Show All Photos</button></div>
        </div>

        <div className="property__details--content">
          <div className="property__details--content__wrapper">
            <div className="property__details--info">
              <div className="property__details--info__title">
                <span>
                  <h2>Beacon Homes LLC</h2>
                  <p>3 Leame Close, Hull, HU3 6ND</p>
                </span>

                <button className="btn btn--secondary property__details--info__share"><img src="/share.svg" alt="" /><span>Share</span></button>
              </div>
              <div className="card__facilities">
                <div className="card__facilities--item">
                  <h4>bedrooms</h4>
                  <span>
                    <img src="/bedroom.svg" alt="" /> 4
                  </span>
                </div>
                <div className="card__facilities--item">
                  <h4>Bathrooms</h4>
                  <span>
                    <img src="/bathroom.svg" alt="" /> 4
                  </span>
                </div>
                <div className="card__facilities--item">
                  <h4>Square Area</h4>
                  <span>
                    <img src="/area.svg" alt="" /> 6x8m²
                  </span>
                </div>
                <div className="card__facilities--item">
                  <h4>Square Area</h4>
                  <span>
                  <img src="/area.svg" alt="" /> Modern Loft
                  </span>
                </div>
              </div>
              <div className="property__details--info__description">
                <h4>Description</h4>
                <p>
                  First time on market in 40 years. Detached two unit Victorian
                  - vacant - with excellent bones on rear of huge (4552 sq ft)
                  flat sunny lot on fabulous quiet block accessible to GG Park
                  and neighborhood amenities. This property is tucked away
                  behind a wood fence, and has a curb cut which provides for
                  ample parking. Development opportunity? Income property with
                  huge play space or garden? ADU? The possibilities on this
                  special parcel are virtually endless. Large storage and
                  laundry under rear of building. Quiet block between Arguello &
                  Willard North. Two blocks to Rossi Park to the north, and two
                  blocks to GG Park and the Conservatory of Flowers to the
                  south. Close to multiple markets, cafes, restaurants,
                  transportation.
                </p>
                <div className="tour--link">
                  <img src="/video.svg" alt="" /> <h5>View Video Tour</h5>
                </div>
              </div>
              <hr />
            </div>
          </div>
          <div className="property__details--request">
            <div className="property__details--request__pricing">
              <p>Price</p>
              <span>$15,000</span>
            </div>
            <hr />
            <div className="property__details--request__title">
              <h3>Request a home tour</h3>
            </div>
            <div className="property__details--request__form">
              <div className="tabs">
                <div className="tab active"><img src="/date-filled.svg" alt=""/> <span>Schedule a Tour</span></div>
                <div className="tab"><img src="/message-filled.svg" alt=""/> <span>Request Quote</span></div>
              </div>
              <div className="input-group">
                <span className="icon"><img src="/call-primary.svg" alt=""/></span>
                <input type="text" placeholder="Phone Number" />
              </div>
              <div className="input-group">
                <span className="icon"><img src="/date-primary.svg" alt=""/></span>
                <input type="text" placeholder="Select Date" />
              </div>
              <div className="input-group">
                <span className="icon"><img src="/time-primary.svg" alt=""/></span>
                <input type="text" placeholder="11:00 AM" />
              </div>
              <div className="input-group">
                <span className="icon"><img src="/mail-primary.svg" alt=""/></span>
                <input type="text" placeholder="+ 1 234 567 890" />
              </div>
            </div>
            <button className="btn btn--primary">Schedule a Tour</button>
          </div>

          <div className="property__details--accordion">
            <div className="property__details--accordion__title">
              Property Details
            </div>

            <div className="accordion">
              <div className="accordion__header active">
                Interior Details
                <span className="arrow"><img src="/arrow-down.svg" alt=""/></span>
              </div>
              <div className="accordion__content">
                <div className="section-title">Interior Details</div>
                <div className="details">
                  <div className="details__item">
                    • Basement: Partial, Storage Space
                  </div>
                  <div className="details__item">• Number of Rooms: 10</div>
                </div>
                <hr />
                <div className="section-title">Beds & Baths</div>
                <div className="details">
                  <div className="details__item">• Bedrooms: 5</div>
                  <div className="details__item">• Bathrooms: 5</div>
                </div>
                <hr />
                <div className="section-title">Dimensions and Layout</div>
                <div className="details">
                  <div className="details__item">
                    • Living Area: 2500 Square Feet
                  </div>
                </div>
                <hr />
                <div className="section-title">Heating & Cooling</div>
                <div className="details">
                  <div className="details__item">• Heating: Central</div>
                  <div className="details__item">• Has Heating</div>
                  <div className="details__item">• Heating Fuel: Central</div>
                </div>
              </div>
            </div>

            <div className="accordion">
              <div className="accordion__header">
                Property Size
                <span className="arrow"><img src="/arrow-down.svg" alt=""/></span>
              </div>
            </div>

            <div className="accordion">
              <div className="accordion__header">
                Land Area
                <span className="arrow"><img src="/arrow-down.svg" alt=""/></span>
              </div>
            </div>

            <div className="accordion">
              <div className="accordion__header">
                Year Build
                <span className="arrow"><img src="/arrow-down.svg" alt=""/></span>
              </div>
            </div>
          </div>
          <div className="property__details--agent">
            <h4>Listing By Agents</h4>
            <div className="property__details--agent__info">
              <div className="card__info__header--right">
                <div className="agent__info">
                  <div className="profile__img">
                    <img src="https://cdn.prod.website-files.com/64e2f6e9e8285220bd834d6e/64e2f6e9e8285220bd834da7_Estately%20Agent%20-%20Edwin%20Martins.webp" alt="" />
                  </div>
                  <div className="profile__info">
                    <h4>Edwin Martins</h4>
                    <span>Property Advisor</span>
                  </div>
                </div>
              </div>
              <div className="property__details--agent__contact">
                <button className="btn btn--secondary">Ask Question</button>
                <button className="btn btn--secondary">Contact Agent</button>
              </div>
            </div>
          </div>
          <div className="property__details--map">
            <h4>Map View</h4>
            <PropertyMap />
          </div>
        </div>
        <div className="property__details--others">
          <h2>Similiar Listings</h2>
          <div className="card__wrapper--grid card__wrapper--grid__md-col--1">
            {cardItemsData.map((item, index) => (
              <HomeFeaturedCardItem key={index} itemData={item} />
            ))}


          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default PropertyDetails;
