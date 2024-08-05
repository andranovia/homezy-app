
import Navigation from "../components/Navigation/Index";
import Footer from "../components/Footer/Footer";
import Newsletter from "../components/Newsletter";

const BaseLayout = ({ children, newsletter }: { children: React.ReactNode, newsletter: boolean }) => {
  return (
    <div className="max--width">
      <Navigation />

      <div className="home__section container ">{children} {newsletter ? <Newsletter /> : null}</div>
      <Footer />
    </div>
  );
};

export default BaseLayout;
