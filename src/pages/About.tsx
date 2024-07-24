import React from "react";
import BaseLayout from "../Layouts/BaseLayout";
import AboutHero from "../components/About/AboutHero";
import AboutCard from "../components/About/AboutCard";
import AboutBenefits from "../components/About/AboutBenefits";

const About = () => {
  return (
    <BaseLayout>
      <AboutHero />
      <AboutCard/>
      <AboutBenefits/>
    </BaseLayout>
  );
};

export default About;
