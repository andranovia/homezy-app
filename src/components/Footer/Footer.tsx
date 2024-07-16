const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section footer__section--branding">
          <div className="footer__logo">
            <img src="/placeholder.svg" alt="Homezy Logo" />
            <span>Homezy</span>
          </div>
          <p className="footer__text">
            We are creative people who provide the best way to you who want to
            have a new comfortable and suitable place to live
          </p>
          <div className="footer__socials">
            <a href="#" className="footer__social">
              {" "}
              <img src="/placeholder.svg" alt="Homezy Logo" />
            </a>
            <a href="#" className="footer__social">
              {" "}
              <img src="/placeholder.svg" alt="Homezy Logo" />
            </a>
            <a href="#" className="footer__social">
              {" "}
              <img src="/placeholder.svg" alt="Homezy Logo" />
            </a>
            <a href="#" className="footer__social">
              {" "}
              <img src="/placeholder.svg" alt="Homezy Logo" />
            </a>
          </div>
        </div>
        <div className="footer__section--wrapper">
          <div className="footer__section footer__section--links">
            <h4 className="footer__heading">Pages</h4>
            <ul className="footer__list">
              <li>
                <a href="#" className="footer__link">
                  Home V1
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Home V2
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Search Properties V1
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Search Properties V2
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Property Details V1
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Property Details V2
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Agent List V1
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Agent List V2
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__section footer__section--links">
            <h4 className="footer__heading"></h4>
            <ul className="footer__list">
              <li>
                <a href="#" className="footer__link">
                  Agent Details V1
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Agent Details V2
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  About Us V1
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  About Us V2
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Contact Us V1
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Contact Us V2
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__section footer__section--utility">
            <h4 className="footer__heading">Utility Pages</h4>
            <ul className="footer__list">
              <li>
                <a href="#" className="footer__link">
                  Sign In
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Sign Up
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Forgot Password
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Reset Password
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  404 Error Page
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Style Guides
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Licenses
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Change Log
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>©2023 Homezy. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
