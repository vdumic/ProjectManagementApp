import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProjectHeader from "../components/ProjectHeader";
import ProjectTitle from "../components/Project/ProjectTitle";

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

const ProjectPage = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState({});

  const fetchProject = useCallback(async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/projects/${projectId}`
      );

      if (response.ok) {
        const data = await response.json();
        setProject(data);
      } else {
        console.error("Failed to fetch project:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }, []);

  useEffect(() => {
    fetchProject();
  }, [fetchProject]);

  console.log(projectId);

  console.log(project);

  return (
    <div className="h-screen flex">
      <div className="w-full h-full bg-bckgrnd-main flex-col justify-start">
        <div className="h-1/6">
          <ProjectHeader />
          <ProjectTitle project={project} />
        </div>
        <div className="h-5/6 overflow-y-auto mx-8">
          <p>TASK</p>
          <p>TASK</p>
          <p>TASK</p>
          <p>TASK</p>
          <p>TASK</p>
          <p>TASK</p>
        </div>
      </div>
    </div>
    //   <div className="flex h-svh w-full flex-wrap">
    //     <div className="flex h-fit w-full mx-48 my-6">
    //       <div className="flex h-full w-full flex-wrap justify-start">
    //         <ProjectTitle title="Software Development: Mobile App Upgrade" />
    //       </div>
    //     </div>
    //     <div className="flex flex-col flex-wrap overflow-auto w-full h-full mx-24">
    //       <StatusTasksBox status="In backlog" tasks={inBacklog} />
    //       <StatusTasksBox status="In progress" tasks={inProgress} />
    //       <StatusTasksBox
    //         status="Waiting for review"
    //         tasks={waitingForReview}
    //       />
    //       <StatusTasksBox status="Done" tasks={done} />
    //     </div>
    //   </div>
  );
};

export default ProjectPage;
