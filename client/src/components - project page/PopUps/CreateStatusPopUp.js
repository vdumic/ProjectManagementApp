import { ErrorMessage, Field, Form, Formik } from "formik";
import { useParams } from "react-router-dom";
import * as yup from "yup";

import { request } from "../../axios/axios_helper";

const CreateStatusPopUp = ({ openPopUp, closePopUp, projectChange }) => {
  const { projectId } = useParams();

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
    name: yup.string().required("Status name is required"),
  });

  const handleCreateProject = (name) => {
    request("POST", "/project_statuses/new_status", {
      projectId,
      statusName: name,
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
            Enter status name
          </h2>
        </div>
        <div className="w-full p-3 justify-center items-center">
          <div className="flex justify-center items-center">
            <Formik
              initialValues={{
                name: "",
              }}
              validationSchema={ValidationSchema}
              onSubmit={(values) => {
                handleCreateProject(values.name);
              }}
            >
              <Form className="flex flex-col w-1/2 justify-center items-center">
                <div className="flex flex-col items-start mb-6 w-full">
                  <label className="font-medium text-text-dark">Name</label>
                  <Field name="name" className="border-2 py-2 w-full px-4" />
                  <ErrorMessage name="name" render={renderError} />
                </div>
                <div className="w-full p-3 justify-center items-center py-5">
                  <div className="flex justify-center items-center">
                    <button type="submit" className="bg-button-blue rounded-md">
                      <p className="text-lg py-2 px-5 text-white font-medium text-nowrap">
                        Create status
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

export default CreateStatusPopUp;
