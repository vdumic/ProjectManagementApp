import projectsPage from "../../assets/projects_page.png";
import projectBoard from "../../assets/project_board.png";

const Examples = () => {
  return (
    <div className="bg-bckgrnd-main container mx-auto my-14">
      <div className="flex items-center justify-between mx-40 pl-14">
        <div className="mx-24">
          <h1 className="text-text-dark font-medium text-2xl py-4 text-center break-normal">
            Your Projects, All in One Place
          </h1>
          <p className="text-text-dark font-normal text-lg break-normal text-center">
            Stay organized and in control with our intuitive project management
            app.
          </p>
          <p className="text-text-dark font-normal text-lg break-normal text-center">
            View all your projects at a glance, track progress, and manage tasks
            effortlessly.
          </p>
        </div>
        <img
          src={projectsPage}
          alt="Sprynt application hero section"
          width="550"
        />
      </div>
      <div className="flex items-center justify-between mx-40 mt-10 pr-14">
        <img
          src={projectBoard}
          alt="Sprynt application hero section"
          width="550"
        />
        <div className="mx-24">
          <h1 className="text-text-dark font-medium text-2xl py-4 text-center break-normal">
            Manage Your Tasks Effortlessly
          </h1>
          <p className="text-text-dark font-normal text-lg break-normal text-center">
            Stay on top of your projects with our powerful task management
            features.
          </p>
          <p className="text-text-dark font-normal text-lg break-normal text-center">
            Organize, prioritize, and track your tasks all in one place.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Examples;
