import HeaderLayout from "../layouts/HeaderLayout";

const myProjects = [
  {
    name: "Website Redesign for Cleaning Company",
  },
  {
    name: "Software Development: Mobile App Upgrade",
  },
];

const otherProjects = [
  {
    name: "Design and Development of a Video Conferencing Application",
  },
  {
    name: "Building an Inventory Management System for Retail",
  },
  {
    name: "Implementation of a Chatbot for Customer Support",
  },
];

const ProjectsPage = () => {
  return (
    <HeaderLayout title="Projects page">
      <div className="w-1/4 bg-bckgrnd-blue_dark h-screen overflow-clip"></div>
    </HeaderLayout>
  );
};

export default ProjectsPage;
