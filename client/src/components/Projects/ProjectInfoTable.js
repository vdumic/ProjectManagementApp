import DateFormat from "../../functions/DateFormat";

const ProjectInfoTable = ({
  project,
  updateName,
  updateDescription,
  updateStatus,
}) => {
  return (
    <div className="flex justify-start mx-auto p-4">
      <table className="min-w-full bg-white border border-bckgrnd-blue_dark">
        <tbody>
          <tr className="border border-bckgrnd-blue_dark">
            <td className="py-2.5 px-4 text-lg text-text-dark font-medium">
              Name
            </td>
            <td className="py-2.5 px-4 text-lg text-text-dark w-3/6">
              {project.projectName}
            </td>
            <td className="py-2.5 px-4">
              <button
                className="bg-bckgrnd-main text-text-dark border drop-shadow-md px-3 py-1 rounded mr-2"
                onClick={updateName}
              >
                Update name
              </button>
            </td>
          </tr>
          <tr className="border border-bckgrnd-blue_dark">
            <td className="py-2.5 px-4 text-lg text-text-dark font-medium">
              Description
            </td>
            <td className="py-2.5 px-4 text-lg text-text-dark">
              {project.description}
            </td>
            <td className="py-2.5 px-4">
              <button
                className="bg-bckgrnd-main text-text-dark border drop-shadow-md px-3 py-1 rounded mr-2"
                onClick={updateDescription}
              >
                Update description
              </button>
            </td>
          </tr>
          <tr className="border border-bckgrnd-blue_dark">
            <td className="py-2.5 px-4 text-lg text-text-dark font-medium">
              Project creator
            </td>
            <td className="py-2.5 px-4 text-lg text-text-dark">
              {project.userName}
            </td>
          </tr>
          <tr className="border border-bckgrnd-blue_dark">
            <td className="py-2.5 px-4 text-lg text-text-dark font-medium">
              Created at
            </td>
            <td className="py-2.5 px-4 text-lg text-text-dark">
              <DateFormat dateString={project.createdAt} />
            </td>
          </tr>
          <tr className="border border-bckgrnd-blue_dark">
            <td className="py-2.5 px-4 text-lg text-text-dark font-medium">
              Project status
            </td>
            <td className="py-2.5 px-4 text-lg text-text-dark">
              {project.active === true ? "Active" : "Unactive"}
            </td>
            <td className="py-2.5 px-4">
              {project.active && (
                <button
                  className="bg-bckgrnd-high text-white border drop-shadow-md px-3 py-1 rounded mr-2"
                  onClick={updateStatus}
                >
                  Deactivate
                </button>
              )}
              {!project.active && (
                <button
                  className="bg-bckgrnd-low text-white border drop-shadow-md px-3 py-1 rounded mr-2"
                  onClick={updateStatus}
                >
                  Activate
                </button>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProjectInfoTable;
