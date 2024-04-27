import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Spacer from "../components/Spacer";

const Home = () => {
  return (
    <div className="bg-bckgrnd-main">
      <Header />
      <HeroSection />
      <Spacer />
      <Footer />
    </div>
  );
};

export default Home;
