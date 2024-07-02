const ProjectInfoView = ({ project }) => {
  return (
    <div>
      <div className="flex justify-start mx-auto p-4">
        <p className="text-xl py-3 text-text-dark font-bold">
          Update project details
        </p>
      </div>
      <div className="flex justify-start mx-auto p-4">
        <table className="min-w-full bg-white border border-bckgrnd-blue_dark">
          <tbody>
            <tr className="border border-bckgrnd-blue_dark">
              <td className="py-2.5 px-4 text-lg text-text-dark font-medium">
                Name
              </td>
              <td className="py-2.5 px-4 text-lg text-text-dark">
                Project name
              </td>
              <td className="py-2.5 px-4">
                <button className="bg-bckgrnd-main text-text-dark border drop-shadow-md px-3 py-1 rounded mr-2">
                  Update name
                </button>
              </td>
            </tr>
            <tr className="border border-bckgrnd-blue_dark">
              <td className="py-2.5 px-4 text-lg text-text-dark font-medium">
                Description
              </td>
              <td className="py-2.5 px-4 text-lg text-text-dark">
                Project description
              </td>
              <td className="py-2.5 px-4">
                <button className="bg-bckgrnd-main text-text-dark border drop-shadow-md px-3 py-1 rounded mr-2">
                  Update description
                </button>
              </td>
            </tr>
            <tr className="border border-bckgrnd-blue_dark">
              <td className="py-2.5 px-4 text-lg text-text-dark font-medium">
                Project creator
              </td>
              <td className="py-2.5 px-4 text-lg text-text-dark">User name</td>
            </tr>
            <tr className="border border-bckgrnd-blue_dark">
              <td className="py-2.5 px-4 text-lg text-text-dark font-medium">
                Created at
              </td>
              <td className="py-2.5 px-4 text-lg text-text-dark">Date</td>
            </tr>
            <tr className="border border-bckgrnd-blue_dark">
              <td className="py-2.5 px-4 text-lg text-text-dark font-medium">
                Project status
              </td>
              <td className="py-2.5 px-4 text-lg text-text-dark">Active</td>
              <td className="py-2.5 px-4">
                <button className="bg-bckgrnd-high text-white border drop-shadow-md px-3 py-1 rounded mr-2">
                  Deactivate
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectInfoView;
