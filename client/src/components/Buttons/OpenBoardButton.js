const OpenBoardButton = ({ title }) => {
  return (
    <button className="bg-bckgrnd-light rounded-xl border-4 border-button-blue drop-shadow-md">
      <p className="text-xl py-2 px-5 text-button-blue font-bold">{title}</p>
    </button>
  );
};

export default OpenBoardButton;
