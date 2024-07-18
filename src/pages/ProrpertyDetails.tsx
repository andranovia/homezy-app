import HomeFeaturedCardItem from "../components/Home/HomeFeaturedCardItem";
import BaseLayout from "../Layouts/BaseLayout";

const PropertyDetails = () => {
  return (
    <BaseLayout>
      <div className="property__details--wrapper container">
        <div className="property__details--images">
          <img
            src="/placeholder.svg"
            alt="placeholder"
            className="property__details--img-1"
          />
          <img
            src="/placeholder.svg"
            alt="placeholder"
            className="property__details--img-2"
          />
          <img
            src="/placeholder.svg"
            alt="placeholder"
            className="property__details--img-3"
          />
        </div>
        <div className="property__details--content">
          <div className="property__details--content__wrapper">
            <div className="property__details--info">
              <div className="property__details--info__title">
                <span>
                  <h2>Beacon Homes LLC</h2>
                  <p>3 Leame Close, Hull, HU3 6ND</p>
                </span>

                <button className="btn btn--secondary">Share</button>
              </div>
              <div className="card__facilities">
                <div className="card__facilities--item">
                  <h4>bedrooms</h4>
                  <span>
                    <img src="/placeholder.svg" alt="" /> 4
                  </span>
                </div>
                <div className="card__facilities--item">
                  <h4>Bathrooms</h4>
                  <span>
                    <img src="/placeholder.svg" alt="" /> 4
                  </span>
                </div>
                <div className="card__facilities--item">
                  <h4>Square Area</h4>
                  <span>
                    <img src="/placeholder.svg" alt="" /> 6x8m²
                  </span>
                </div>
                <div className="card__facilities--item">
                  <h4>Square Area</h4>
                  <span>
                    <img src="/placeholder.svg" alt="" /> Modern Loft
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
                  <img src="/placeholder.svg" alt="" /> <h5>View Video Tour</h5>
                </div>
                
              </div>
              <hr />
            </div>

            
            <div className="property__details--feature"></div>
            <div className="property__details--agent"></div>
            <div className="property__details--map"></div>
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
                <div className="tab active">Schedule a Tour</div>
                <div className="tab">Request Quote</div>
              </div>
              <div className="input-group">
                <span className="icon">📞</span>
                <input type="text" placeholder="Phone Number" />
              </div>
              <div className="input-group">
                <span className="icon">📅</span>
                <input type="text" placeholder="Select Date" />
              </div>
              <div className="input-group">
                <span className="icon">⏰</span>
                <input type="text" placeholder="11:00 AM" />
              </div>
              <div className="input-group">
                <span className="icon">📧</span>
                <input type="text" placeholder="+ 1 234 567 890" />
              </div>
            </div>
            <button className="btn btn--primary">Schedule a Tour</button>
          </div>

          
          <div className="property__details--accordion">
            <div className="property__details--accordion__title">Property Details</div>

            <div className="accordion">
              <div className="accordion__header active">
                Interior Details
                <span className="arrow">▶</span>
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
                <span className="arrow">▶</span>
              </div>
            
            </div>

            <div className="accordion">
              <div className="accordion__header">
                Land Area
                <span className="arrow">▶</span>
              </div>
            
            </div>

            <div className="accordion">
              <div className="accordion__header">
                Year Build
                <span className="arrow">▶</span>
              </div>
            
            </div>
          </div>
        </div>
        <div className="property__details--others">
          <h2>Similiar Listings</h2>
          <div className="card__wrapper--flex">
            <HomeFeaturedCardItem />
            <HomeFeaturedCardItem />
            <HomeFeaturedCardItem />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default PropertyDetails;
