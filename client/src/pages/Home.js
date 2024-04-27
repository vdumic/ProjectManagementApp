import Footer from "../components/Footer";
import Header from "../components/Header";
import Examples from "../components/Home/Examples";
import HeroSection from "../components/Home/HeroSection";
import Spacer from "../components/Spacer";

const Home = () => {
  return (
    <div className="bg-bckgrnd-main">
      <Header />
      <HeroSection />
      <Spacer />
      <Examples />
      <Spacer />
      <Footer />
    </div>
  );
};

export default Home;
