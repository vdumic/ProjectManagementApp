import Examples from "../components - home/Examples";
import HeroSection from "../components - home/HeroSection";
import Spacer from "../components - home/Spacer";
import HeaderFooterLayout from "../layouts/HeaderFooterLayout";

const Home =  () => {
  return (
    <HeaderFooterLayout title="Sprynt / Home">
      <HeroSection />
      <Spacer />
      <Examples />
    </HeaderFooterLayout>
  );
};

export default Home;
