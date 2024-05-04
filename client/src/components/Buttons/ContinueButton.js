import { SlArrowRight } from "react-icons/sl";

const ContinueButton = () => {
  return (
    <button
      className="flex justify-center text-white font-medium mt-10 py-2.5 pr-3.5 pl-5 bg-button-blue rounded-full shadow-xl "
      type="submit"
    >
      Continue
      <SlArrowRight className="h-5 w-5 sm:inline cursor-pointer pt-1 pl-1" />
    </button>
  );
};

export default ContinueButton;
