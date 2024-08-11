import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

import { request } from "../../axios/axios_helper";

const EditTaskPopUp = ({ task, openPopUp, closePopUp, projectChange }) => {
  const handleClosePopUp = (e) => {
    if (e.target.id === "ModelContainer") {
      closePopUp();
    }
  };

  if (openPopUp !== true) return null;

  const renderError = (message) => (
    <p className="italic text-red-500 text-center w-full">{message}</p>
  );

  const ValidationSchema = yup.object().shape({
    name: yup.string().required("Project name is required"),
    description: yup.string(),
    storyPoints: yup.number(),
  });

  const handleEditTask = async (name, description, storyPoints) => {
    request("PUT", "/tasks", {
      taskId: task.taskId,
      taskName: name,
      description: description,
      storyPoints: storyPoints,
    })
      .then((response) => response.data)
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
      className="fixed inset-0 bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm"
    >
      <div className="p-2 bg-white w-10/12 md:w-1/2 lg:1/3 shadow-inner border-e-emerald-600 rounded-lg py-5">
        <div className="w-full p-3 justify-center items-center">
          <h2 className="font-semibold py-3 text-center text-xl">
            Enter data for new task
          </h2>
        </div>
        <div className="w-full p-3 justify-center items-center">
          <div className="flex justify-center items-center">
            <Formik
              initialValues={{
                name: task.taskName,
                description: task.description,
                storyPoints: task.storyPoints,
              }}
              validationSchema={ValidationSchema}
              onSubmit={(values) => {
                handleEditTask(
                  values.name,
                  values.description,
                  values.storyPoints
                );
              }}
            >
              <Form className="flex flex-col w-1/2 justify-center items-center">
                <div className="flex flex-col items-start mb-6 w-full">
                  <label className="font-medium text-text-dark">Name</label>
                  <Field name="name" className="border-2 py-2 w-full px-4" />
                  <ErrorMessage name="name" render={renderError} />
                </div>
                <div className="flex flex-col items-start mb-6 w-full">
                  <label className="font-medium text-text-dark">
                    Description
                  </label>
                  <Field
                    name="description"
                    className="border-2 py-2 w-full px-4"
                  />
                  <ErrorMessage name="description" render={renderError} />
                </div>
                <div className="flex flex-col items-start mb-6 w-full">
                  <label className="font-medium text-text-dark">
                    Story points
                  </label>
                  <Field
                    name="storyPoints"
                    className="border-2 py-2 w-full px-4"
                  />
                  <ErrorMessage name="storyPoints" render={renderError} />
                </div>
                <div className="w-full p-3 justify-center items-center py-5">
                  <div className="flex justify-center items-center">
                    <button type="submit" className="bg-button-blue rounded-md">
                      <p className="text-lg py-2 px-5 text-white font-medium">
                        Edit task
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

export default EditTaskPopUp;
