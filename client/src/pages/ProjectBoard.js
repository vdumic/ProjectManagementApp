import ProjectTitle from "../components/Project board/ProjectTitle";
import StatusTasksBox from "../components/Project board/StatusTasksBox";
import HeaderLayout from "../layouts/HeaderLayout";

const inBacklog = [
  {
    name: "Collect analytics data to track user engagement",
    isAssigned: false,
  },
  {
    name: "Coordinate with app stores for publishing the updated version",
    isAssigned: false,
  },
  {
    name: "Provide customer support to address any issues",
    isAssigned: false,
  },
];

const inProgress = [
  {
    name: "Design user-friendly navigation and intuitive interactions",
    isAssigned: true,
    user: "Jacob Evans",
  },
  {
    name: "Upgrade server infrastructure",
    isAssigned: true,
    user: "Harper Reed",
  },
  {
    name: "Update user documentation and help guides",
    isAssigned: true,
    user: "Mia Jenkins",
  },
];

const waitingForReview = [
  {
    name: "Add new feature for in-app messaging",
    isAssigned: true,
    user: "Mia Jenkins",
  },
  {
    name: "Documents API endpoints and data schemas",
    isAssigned: true,
    user: "Amelia Price",
  },
];

const done = [
  {
    name: "Create wireframes and mockups",
    isAssigned: true,
    user: "Amelia Price",
  },
  {
    name: "Implement updated design elements",
    isAssigned: true,
    user: "Jacob Evans",
  },
];

const ProjectBoard = () => {
  return (
    <HeaderLayout title="Project board">
      <div className="flex h-svh w-full flex-wrap">
        <div className="flex h-fit w-full mx-48 my-6">
          <div className="flex h-full w-full flex-wrap justify-start">
            <ProjectTitle title="Software Development: Mobile App Upgrade" />
          </div>
        </div>
        <div className="flex flex-col flex-wrap overflow-auto w-full h-full mx-24">
          <StatusTasksBox status="In backlog" tasks={inBacklog} />
          <StatusTasksBox status="In progress" tasks={inProgress} />
          <StatusTasksBox
            status="Waiting for review"
            tasks={waitingForReview}
          />
          <StatusTasksBox status="Done" tasks={done} />
        </div>
      </div>
    </HeaderLayout>
  );
};

export default ProjectBoard;
