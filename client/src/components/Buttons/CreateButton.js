const CreateButton = ({ title }) => {
  return (
    <button className="bg-bckgrnd-light rounded-2xl border-2 border-button-blue drop-shadow-md mx-2">
      <p className="text-lg py-2 px-5 text-button-blue font-bold">{title}</p>
    </button>
  );
};

export default CreateButton;
