import React from "react";
import BaseLayout from "../Layouts/BaseLayout";
import AboutHero from "../components/About/AboutHero";
import AboutCard from "../components/About/AboutCard";
import AboutBenefits from "../components/About/AboutBenefits";
import AboutAgents from "../components/About/AboutAgents";

const About = () => {
  return (
    <BaseLayout>
      <AboutHero />
      <AboutCard/>
      <AboutBenefits/>
      <AboutAgents/>
    </BaseLayout>
  );
};

export default About;
