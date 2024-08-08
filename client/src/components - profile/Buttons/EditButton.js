const EditButton = ({ handleClick }) => {
  return (
    <button
      className="bg-white rounded-full border-2 border-gray-500 shadow-lg py-2 w-40 mx-6 hover:bg-gray-100"
      onClick={handleClick}
    >
      Edit profile
    </button>
  );
};

export default EditButton;
