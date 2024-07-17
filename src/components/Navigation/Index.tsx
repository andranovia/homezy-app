
const Navigation = () => {
  return (
    <div className="container">
      <div className="navbar__wrapper">
        <div className="navbar__brand">
          <img src="/placeholder.svg" alt="Homezy Logo" />
          <span>Homezy</span>
        </div>
        <div className="navbar__links">
          <ul className="navbar__links__wrapper">
            <li className="navbar__link--item">Home</li>
            <li className="navbar__link--item">Properties</li>
            <li className="navbar__link--item">Agents</li>
            <li className="navbar__link--item">Pages</li>
          </ul>
        </div>
        <div className="navbar__contact">Contact Us</div>
        <div className="navbar__dropdown"><img src="/placeholder.svg" alt="" /></div>
      </div>
    </div>
  );
};

export default Navigation;
