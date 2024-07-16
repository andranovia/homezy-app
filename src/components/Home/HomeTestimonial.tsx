
import HomeTestimonialItem from "./HomeTestimonialItem";

const HomeTestimonial = () => {
  return (
    <div className="container">
      <div className="testimonial__wrapper">
        <div className="testimonial__header">
          <h2>Kind Words From Our Customers</h2>
        </div>
        <div className="card__wrapper--flex">
          <HomeTestimonialItem/>
          <HomeTestimonialItem/>
        </div>
      </div>
    </div>
  );
};

export default HomeTestimonial;
