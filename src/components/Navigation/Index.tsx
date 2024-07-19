import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className=" navbar">
      <div className="navbar__wrapper">
        <div className="navbar__brand">
          <img src="/placeholder.svg" alt="Homezy Logo" />
          <Link to={"#"} className="custom-link">
            Homezy
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
            </li>
          </ul>
        </div>
        <div className="navbar__contact">
          <Link to={"#"} className="custom-link">
            Contact Us
          </Link>
        </div>
        <div className="navbar__dropdown">
          <img src="/placeholder.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
