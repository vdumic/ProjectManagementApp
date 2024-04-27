import board from "../../assets/board_example.png";

const Examples = () => {
  return (
    <div className="bg-bckgrnd-main container mx-auto my-14">
      <div className="flex items-center justify-between mx-40 pl-14">
        <div className="mx-24">
          <h1 className="text-text-dark text-3xl py-4 text-center break-normal">
            Example project #1
          </h1>
          <p className="text-text-dark font-normal text-lg break-normal">
            Organize your project <br />
            Create custom task status <br />
            Add your colleagues to project
          </p>
        </div>
        <img src={board} alt="Sprynt application hero section" width="550" />
      </div>
      <div className="flex items-center justify-between mx-40 mt-10 pr-14">
        <img src={board} alt="Sprynt application hero section" width="550" />
        <div className="mx-24">
          <h1 className="text-text-dark text-3xl py-4 text-center break-normal">
            Example project #2
          </h1>
          <p className="text-text-dark font-normal text-lg break-normal">
            Organize your project <br />
            Create custom task status <br />
            Add your colleagues to project
          </p>
        </div>
      </div>
    </div>
  );
};

export default Examples;
