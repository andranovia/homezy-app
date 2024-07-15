import HomeFeatured from "./components/Home/HomeFeatured";
import HomeHero from "./components/Home/HomeHero";
import HomeLayout from "./Layouts/Home";

function App() {
  return (
    <HomeLayout>
      <HomeHero />
      <HomeFeatured/>
    </HomeLayout>
  );
}

export default App;
