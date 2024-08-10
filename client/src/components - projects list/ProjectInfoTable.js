import DateFormat from "../functions/DateFormat";

const ProjectInfoTable = ({
  project,
  updateName,
  updateDescription,
  updateStatus,
}) => {
  return (
    <div className="w-full md:w-11/12 p-2">
      <table className="min-w-full bg-white border border-bckgrnd-blue_dark">
        <tbody>
          <tr className="border border-bckgrnd-blue_dark">
            <td className="py-2 px-2 md:py-2.5 md:px-4 text-sm md:text-lg text-text-dark font-medium text-nowrap">
              Name
            </td>
            <td className="py-2 px-2 md:py-2.5 md:px-4 text-sm md:text-lg text-text-dark w-3/6">
              {project.projectName}
            </td>
            <td className="py-2 px-2 md:py-2.5 md:px-4">
              <button
                className="bg-bckgrnd-main text-text-dark border drop-shadow-md px-2 md:px-3 py-1 rounded text-nowrap"
                onClick={updateName}
              >
                Update name
              </button>
            </td>
          </tr>
          <tr className="border border-bckgrnd-blue_dark">
            <td className="py-2 px-2 md:py-2.5 md:px-4 text-sm md:text-lg text-text-dark font-medium">
              Description
            </td>
            <td className="py-2 px-2 md:py-2.5 md:px-4 text-sm md:text-lg text-text-dark">
              {project.description}
            </td>
            <td className="py-2 px-2 md:py-2.5 md:px-4">
              <button
                className="bg-bckgrnd-main text-text-dark border drop-shadow-md px-2 md:px-3 py-1 rounded"
                onClick={updateDescription}
              >
                Update description
              </button>
            </td>
          </tr>
          <tr className="border border-bckgrnd-blue_dark">
            <td className="py-2 px-2 md:py-2.5 md:px-4 text-sm md:text-lg text-text-dark font-medium text-nowrap">
              Project creator
            </td>
            <td className="py-2 px-2 md:py-2.5 md:px-4 text-sm md:text-lg text-text-dark">
              {project.userName}
            </td>
          </tr>
          <tr className="border border-bckgrnd-blue_dark">
            <td className="py-2 px-2 md:py-2.5 md:px-4 text-sm md:text-lg text-text-dark font-medium text-nowrap">
              Created at
            </td>
            <td className="py-2 px-2 md:py-2.5 md:px-4 text-sm md:text-lg text-text-dark">
              <DateFormat timestamp={project.createdAt} />
            </td>
          </tr>
          <tr className="border border-bckgrnd-blue_dark">
            <td className="py-2 px-2 md:py-2.5 md:px-4 text-sm md:text-lg text-text-dark font-medium text-nowrap">
              Project status
            </td>
            <td className="py-2 px-2 md:py-2.5 md:px-4 text-sm md:text-lg text-text-dark">
              {project.active ? "Active" : "Inactive"}
            </td>
            <td className="py-2 px-2 md:py-2.5 md:px-4">
              <button
                className={`${
                  project.active ? "bg-bckgrnd-high" : "bg-bckgrnd-low"
                } text-white border drop-shadow-md px-2 md:px-3 py-1 rounded`}
                onClick={updateStatus}
              >
                {project.active ? "Deactivate" : "Activate"}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProjectInfoTable;
