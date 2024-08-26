import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        <div className="navbar__brand">

          <Link to={"/"} className="custom-link">
            <img src="https://assets-global.website-files.com/64e2f6e9e8285220bd834d6e/64e2f6e9e8285220bd834dd5_homezy.svg" alt="Homezy Logo" />
          </Link>
        </div>
        <div className="navbar__links">
          <ul className="navbar__links__wrapper">
            <li className="navbar__link--item">
              <Link to={"#"} className="custom-link">
                Home
              </Link>
            </li>
            <li className="navbar__link--item ">
              <Link to={"#"} className="custom-link">
                Properties
              </Link>
            </li>
            <li className="navbar__link--item">
              <Link to={"#"} className="custom-link">
                Agents
              </Link>
            </li>
            <li className="navbar__link--item">
              <Link to={"#"} className="custom-link">
                Pages
              </Link>
              <svg width="20" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.8328 7.45825L11.3995 12.8916C10.7578 13.5333 9.70781 13.5333 9.06615 12.8916L3.63281 7.45825" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </li>
          </ul>
        </div>
        <div className="navbar__contact">
          <Link to={"/contact"} className="custom-link">
            Contact Us
          </Link>
        </div>
        <div className="navbar__dropdown">
          <img src="/hamburger.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
