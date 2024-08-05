
import PropertyMap from "../map/PropertyMap";

const ContactLocation = () => {
  return (
    <div className="location__wrapper">
      <div className="location__map">
        <h5>Where to Find Us</h5>
        <PropertyMap />
        </div>
        <div className="location__detail">
          <p>United States</p>
          <h5>Greenwich Village</h5>
        </div>
        <div className="location__contact">
          <p>+1 234 567 890</p>
          <p>hello@homezy.co</p>
        </div>
    
    </div>
  );
};

export default ContactLocation;
