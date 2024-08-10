import { useParams } from "react-router-dom";
import { Field, Form, Formik } from "formik";

import { request } from "../../axios/axios_helper";

const UpdateProjectDescriptionPopUp = ({
  project,
  openPopUp,
  closePopUp,
  projectChange,
}) => {
  const { userId } = useParams();

  const handleClosePopUp = (e) => {
    if (e.target.id === "ModelContainer") {
      closePopUp();
    }
  };

  if (openPopUp !== true) return null;

  const handleUpdateProjectDescription = async (projectDescription) => {
    request("PUT", "/projects/description", {
      projectId: project.projectId,
      userId: userId,
      name: null,
      description: projectDescription,
    })
      .then(() => {
        closePopUp();
        projectChange();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div
      id="ModelContainer"
      onClick={handleClosePopUp}
      className="fixed z-10 inset-0 bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm"
    >
      <div className="p-2 bg-white w-10/12 md:w-1/2 lg:1/3 shadow-inner border-e-emerald-600 rounded-lg py-5">
        <div className="w-full p-3 justify-center items-center">
          <h2 className="font-semibold py-3 text-center text-xl">
            Enter new project description
          </h2>
        </div>
        <div className="w-full p-3 justify-center items-center">
          <div className="flex justify-center items-center">
            <Formik
              initialValues={{
                description: project.description,
              }}
              onSubmit={(values) => {
                const { description } = { ...values };
                handleUpdateProjectDescription(description);
              }}
            >
              <Form className="flex flex-col sm:w-3/5 md:w-1/2 justify-center items-center">
                <div className="flex flex-col items-start mb-6 w-full">
                  <label className="font-medium text-text-dark">
                    Description
                  </label>
                  <Field
                    name="description"
                    className="border-2 py-2 w-full px-4"
                  />
                </div>
                <div className="w-full p-3 justify-center items-center py-5">
                  <div className="flex justify-center items-center">
                    <button type="submit" className="bg-button-blue rounded-md">
                      <p className="text-lg py-2 px-5 text-white font-medium text-nowrap">
                        Update project description
                      </p>
                    </button>
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProjectDescriptionPopUp;
