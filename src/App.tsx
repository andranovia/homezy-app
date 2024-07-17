import HomeAgents from "./components/Home/HomeAgents";
import HomeBenefits from "./components/Home/HomeBenefits";
import HomeCities from "./components/Home/HomeCities";

import HomeFeatured from "./components/Home/HomeFeatured";
import HomeFeaturedCategory from "./components/Home/HomeFeaturedCategory";
import HomeHero from "./components/Home/HomeHero";
import HomeTestimonial from "./components/Home/HomeTestimonial";
import HomeLayout from "./Layouts/Home";
import HomeNewsletter from "./components/Home/HomeNewsletter";

function App() {
  return (
    <HomeLayout>
      <HomeHero />
        <HomeFeatured/>
        <HomeBenefits/>
        <HomeFeaturedCategory/>
        <HomeCities/>
        <HomeAgents/>
        <HomeTestimonial/>
        <HomeNewsletter/>
    </HomeLayout>
  );
}

export default App;
