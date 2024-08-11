import { useParams } from "react-router-dom";
import { Field, Form, Formik } from "formik";

import { request } from "../../axios/axios_helper";

const DeleteStatusPopUp = ({
  statuses,
  openPopUp,
  closePopUp,
  setStateChanged
}) => {
    const {projectId} = useParams();

  const handleClosePopUp = (e) => {
    if (e.target.id === "ModelContainer") {
      closePopUp();
    }
  };

  if (openPopUp !== true) return null;

  const handleDeleteStatus =  (statusId) => {
    request("DELETE", `/project_statuses/${projectId}/${statusId}`, {
    })
      .then((response) => response.data)
      .then(() => {
        closePopUp();
        setStateChanged();
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
            Remove status from project
          </h2>
        </div>
        <div className="w-full p-3 justify-center items-center">
          <div className="flex justify-center items-center">
            <Formik
              initialValues={{
                status: statuses[0].statusId,
              }}
              onSubmit={(values) => {
                handleDeleteStatus(values.status);
              }}
            >
              <Form className="flex flex-col w-1/2 justify-center items-center">
                <div className="flex flex-col items-start mb-6 w-full">
                  <label className="font-medium text-text-dark">Status</label>
                  <Field as="select" name="status">
                    {statuses.map((status) => {
                      return (
                        <option key={status.statusId} value={status.statusId}>
                          {status.status}
                        </option>
                      );
                    })}
                  </Field>
                </div>
                <div className="w-full p-3 justify-center items-center py-5">
                  <div className="flex justify-center items-center">
                    <button type="submit" className="bg-button-blue rounded-md">
                      <p className="text-lg py-2 px-5 text-white font-medium text-nowrap">
                        Delete status
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

export default DeleteStatusPopUp;
