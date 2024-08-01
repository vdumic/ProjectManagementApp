import heroImage from "../assets/hero_section_image.png";
import HeroButton from "../components - home/Buttons/HeroButton";

const HeroSection = () => {
  return (
    <div className="bg-bckgrnd-main container mx-auto">
      <div className="flex items-center justify-between mx-32">
        <div className="mx-24">
          <p className="text-text-dark font-medium text-4xl break-normal text-center">
            Speed Up Your Workflow, Amplify Your Results: Choose Sprynt!
          </p>
        </div>
        <img
          src={heroImage}
          alt="Sprynt application hero section"
          width="550"
        />
      </div>
      <div className="flex items-center justify-center mb-14 mt-6">
        <HeroButton title="Start for free!" path="/register" />
      </div>
    </div>
  );
};

export default HeroSection;
