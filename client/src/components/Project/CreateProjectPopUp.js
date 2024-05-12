import { useState, useContext } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { Hanko, UnauthorizedError } from "@teamhanko/hanko-elements";

import AppContext from "../../store/app-context";

const hankoApi = process.env.REACT_APP_HANKO_API_URL;

const CreateProjectPopUp = ({
  openPopUp,
  closePopUp,
  openCreatedProjectPopUp,
  openFailedProjectPopUp,
}) => {
  const appCtx = useContext(AppContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState("");
  const [response, setResponse] = useState({});

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
  });

  const addProjectToDatabase = async () => {
    console.log(name, description, email, userId);
    let response;
    try {
      const body = {
        name: name,
        description: description,
        createdBy: userId,
      };
      await fetch("http://localhost:8080/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }).then((response) => {
        if (response.status === 200) {
          openCreatedProjectPopUp();
        } else {
          openFailedProjectPopUp();
        }
      });
    } catch (error) {
      console.error(error.message);
    }
    return response;
  };

  const getUserEmail = async () => {
    const hanko = new Hanko(hankoApi);

    try {
      const { email } = await hanko.user.getCurrent();
      setEmail(email);
    } catch (e) {
      if (e instanceof UnauthorizedError) {
        appCtx.handleLogout();
      }
    }
  };

  const getUserDatabaseId = async () => {
    try {
      const response = await fetch(`http://localhost:8080/users/id/${email}`);
      const { id } = await response.json();
      setUserId(id);
    } catch (error) {
      console.error(error.message);
    }
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
            Enter data for your project
          </h2>
        </div>
        <div className="w-full p-3 justify-center items-center">
          <div className="flex justify-center items-center">
            <Formik
              initialValues={{
                name: "",
                description: "",
              }}
              validationSchema={ValidationSchema}
              onSubmit={(values) => {
                const { name, description } = { ...values };
                setName(name);
                setDescription(description);
                getUserEmail();
                getUserDatabaseId();
                addProjectToDatabase();
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
                <div className="w-full p-3 justify-center items-center py-5">
                  <div className="flex justify-center items-center">
                    <button type="submit" className="bg-button-blue rounded-xl">
                      <p className="text-lg py-2 px-5 text-white font-medium">
                        Create project
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

export default CreateProjectPopUp;
