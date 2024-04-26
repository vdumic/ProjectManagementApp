const HeroButton = ({ title }) => {
  return (
    <button className="bg-button-blue rounded-xl">
      <p className="text-lg py-2 px-5 text-white font-medium">{title}</p>
    </button>
  );
};

export default HeroButton;
