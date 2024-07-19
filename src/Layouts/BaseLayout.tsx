import React from "react";
import Navigation from "../components/Navigation/Index";
import Footer from "../components/Footer/Footer";

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max--width">
      <Navigation />

      <div className="home__section container ">{children}</div>
      <Footer />
    </div>
  );
};

export default BaseLayout;
