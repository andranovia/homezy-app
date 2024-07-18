import HomeAgents from "./components/Home/HomeAgents";
import HomeBenefits from "./components/Home/HomeBenefits";
import HomeCities from "./components/Home/HomeCities";

import HomeFeatured from "./components/Home/HomeFeatured";
import HomeFeaturedCategory from "./components/Home/HomeFeaturedCategory";
import HomeHero from "./components/Home/HomeHero";
import HomeTestimonial from "./components/Home/HomeTestimonial";
import HomeNewsletter from "./components/Home/HomeNewsletter";
import BaseLayout from "./Layouts/BaseLayout";

function App() {
  return (
    <BaseLayout>
      <HomeHero />
        <HomeFeatured/>
        <HomeBenefits/>
        <HomeFeaturedCategory/>
        <HomeCities/>
        <HomeAgents/>
        <HomeTestimonial/>
        <HomeNewsletter/>
    </BaseLayout>
  );
}

export default App;
