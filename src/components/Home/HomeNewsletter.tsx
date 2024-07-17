import { useMediaQuery } from "@uidotdev/usehooks";

const HomeNewsletter = () => {
  const isMobile = useMediaQuery("only screen and (max-width : 768px)");
  return (
    <div className="container">
      <div className="newsletter__wrapper">
        <div className="newsletter__content">
          <h2>Subscribe to Our Newsletter</h2>
          <span>
            Joinn our newsletter to stay up to date on features and release
          </span>
          <div className="newsletter__cta">
            <div className="newsletter__cta--input">
              <p>Enter Your Email Address</p>
            </div>
            {!isMobile ? (
            <div className="newsletter__cta--btn">
              <button className="btn btn--primary">Subscribe</button>
            </div>
          ) : null}
          </div>
          {isMobile ? (
            <div className="newsletter__cta--btn">
              <button className="btn btn--primary">Subscribe</button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default HomeNewsletter;
