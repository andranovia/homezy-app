import HomeBenefits from "./components/Home/HomeBenefits";
import HomeFeatured from "./components/Home/HomeFeatured";
import HomeHero from "./components/Home/HomeHero";
import HomeLayout from "./Layouts/Home";

function App() {
  return (
    <HomeLayout>
      <HomeHero />
      <HomeFeatured/>
      <HomeBenefits/>
    </HomeLayout>
  );
}

export default App;
