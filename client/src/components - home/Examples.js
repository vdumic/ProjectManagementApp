import projectsPage from "../assets/projects_page.png";
import projectBoard from "../assets/project_board.png";

const Examples = () => {
  return (
    <div className="bg-bckgrnd-main container mx-auto my-14 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="flex flex-col md:flex-row items-center justify-between mb-10">
        <div className="md:w-1/2 text-center mr-4 md:text-left mb-6 md:mb-0">
          <h1 className="text-text-dark font-medium text-2xl md:text-3xl py-4">
            Your Projects, All in One Place
          </h1>
          <p className="text-text-dark font-normal text-lg mb-4">
            Stay organized and in control with our intuitive project management app.
          </p>
          <p className="text-text-dark font-normal text-lg">
            View all your projects at a glance, track progress, and manage tasks effortlessly.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src={projectsPage}
            alt="Sprynt application projects page"
            className="w-full max-w-xs md:max-w-lg mx-auto"
          />
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="md:w-1/2 mt-10 mr-4 md:mt-0 text-center md:text-left">
          <h1 className="text-text-dark font-medium text-2xl md:text-3xl py-4">
            Manage Your Tasks Effortlessly
          </h1>
          <p className="text-text-dark font-normal text-lg mb-4">
            Stay on top of your projects with our powerful task management features.
          </p>
          <p className="text-text-dark font-normal text-lg">
            Organize, prioritize, and track your tasks all in one place.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src={projectBoard}
            alt="Sprynt application project board"
            className="w-full max-w-xs md:max-w-lg mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Examples;