import Examples from "../components/Home/Examples";
import HeroSection from "../components/Home/HeroSection";
import Spacer from "../components/Spacer";
import HeaderFooterLayout from "../layouts/HeaderFooterLayout";

const Home = () => {
  return (
    <HeaderFooterLayout title="Sprynt / Home">
      <HeroSection />
      <Spacer />
      <Examples />
    </HeaderFooterLayout>
  );
};

export default Home;
