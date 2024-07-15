import React from "react";

const Navigation = () => {
  return (
    <div className="container">
      <div className="navbar__wrapper">
        <div className="navbar__brand">Homezy</div>
        <div className="navbar__links">
          <ul className="navbar__links__wrapper">
            <li className="navbar__link--item">Home</li>
            <li className="navbar__link--item">Properties</li>
            <li className="navbar__link--item">Agents</li>
            <li className="navbar__link--item">Pages</li>
          </ul>
        </div>
        <div className="navbar__contact">Contact Us</div>
      </div>
    </div>
  );
};

export default Navigation;
