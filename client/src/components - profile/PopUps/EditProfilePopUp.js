import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

import { request } from "../../axios/axios_helper";

const EditProfilePopUp = ({ user, openPopUp, closePopUp, userChange }) => {
  const handleClosePopUp = (e) => {
    if (e.target.id === "ModelContainer") {
      closePopUp();
    }
  };

  if (!openPopUp) return null;

  const renderError = (message) => (
    <p className="italic text-red-500 text-center w-full">{message}</p>
  );

  const ValidationSchema = yup.object().shape({
    firstname: yup.string().required("Firstname name is required"),
    lastname: yup.string().required("Lastname name is required"),
    username: yup.string().required("Username is required"),
    organization: yup.string(),
    jobtitle: yup.string(),
  });

  const handleEditProfile = async (
    firstname,
    lastname,
    username,
    organization,
    jobtitle
  ) => {
    request("PUT", "/users/profile", {
      id: user.id,
      firstname,
      lastname,
      username,
      organization,
      jobtitle,
    })
      .then((response) => response.data)
      .then(() => {
        userChange();
        closePopUp();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div
      id="ModelContainer"
      onClick={handleClosePopUp}
      className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center backdrop-blur-sm"
    >
      <div className="bg-white w-11/12 md:w-1/2 lg:w-1/3 shadow-lg rounded-lg py-6 px-4 sm:px-8">
        <h2 className="font-semibold py-3 text-center text-xl">
          Edit profile data
        </h2>
        <Formik
          initialValues={{
            firstname: user.firstname,
            lastname: user.lastname,
            username: user.username,
            organization: user.organization,
            jobtitle: user.jobtitle,
          }}
          validationSchema={ValidationSchema}
          onSubmit={(values) => {
            handleEditProfile(
              values.firstname,
              values.lastname,
              values.username,
              values.organization,
              values.jobtitle
            );
          }}
        >
          <Form className="flex flex-col space-y-6">
            <div className="flex flex-col">
              <label className="font-medium text-text-dark">Firstname</label>
              <Field
                name="firstname"
                className="border-2 py-2 px-4 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage name="firstname" render={renderError} />
            </div>
            <div className="flex flex-col">
              <label className="font-medium text-text-dark">Lastname</label>
              <Field
                name="lastname"
                className="border-2 py-2 px-4 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage name="lastname" render={renderError} />
            </div>
            <div className="flex flex-col">
              <label className="font-medium text-text-dark">Username</label>
              <Field
                name="username"
                className="border-2 py-2 px-4 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage name="username" render={renderError} />
            </div>
            <div className="flex flex-col">
              <label className="font-medium text-text-dark">Organization</label>
              <Field
                name="organization"
                className="border-2 py-2 px-4 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage name="organization" render={renderError} />
            </div>
            <div className="flex flex-col">
              <label className="font-medium text-text-dark">Job title</label>
              <Field
                name="jobtitle"
                className="border-2 py-2 px-4 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage name="jobtitle" render={renderError} />
            </div>
            <div className="flex justify-center">
              <button type="submit" className="bg-button-blue rounded-md">
                <p className="text-lg py-2 px-5 text-white font-medium">
                  Edit profile
                </p>
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default EditProfilePopUp;
