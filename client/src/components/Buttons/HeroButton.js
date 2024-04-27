const HeroButton = ({ title }) => {
  return (
    <button className="bg-button-blue rounded-xl drop-shadow-lg">
      <p className="text-2xl py-3 px-10 text-white font-medium">{title}</p>
    </button>
  );
};

export default HeroButton;
