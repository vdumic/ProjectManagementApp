import heroImage from "../assets/hero_section_image.png";
import HeroButton from "../components - home/Buttons/HeroButton";

const HeroSection = () => {
  return (
    <div className="bg-bckgrnd-main container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 sm:pt-8 md:pt-8">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-text-dark font-medium text-2xl md:text-4xl break-normal mb-6 sm:pt-8">
            Speed Up Your Workflow, Amplify Your Results: Choose Sprynt!
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src={heroImage}
            alt="Sprynt application hero section"
            className="w-full max-w-xs md:max-w-lg mx-auto"
          />
        </div>
      </div>
      <div className="flex items-center justify-center mt-6 mb-14">
        <HeroButton title="Start for free!" path="/register" />
      </div>
    </div>
  );
};

export default HeroSection;