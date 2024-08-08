import { SlArrowRight } from "react-icons/sl";

const ContinueButton = () => {
  return (
    <button
      className="flex items-center justify-center text-white font-medium mt-6 py-2 px-4 bg-button-blue rounded-xl shadow-xl"
      type="submit"
    >
      Continue
      <SlArrowRight className="h-5 w-5 ml-2" />
    </button>
  );
};

export default ContinueButton;
