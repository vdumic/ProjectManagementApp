import { Field, Form, Formik } from "formik";
import { request } from "../../axios/axios_helper";

const AddNewUserPopUp = ({
  project,
  openPopUp,
  closePopUp,
  projectChange,
  roles,
  allUsers,
}) => {
  const handleClosePopUp = (e) => {
    if (e.target.id === "ModelContainer") {
      closePopUp();
    }
  };

  if (openPopUp !== true) return null;

  const handleAddUser = async (userId, roleId) => {
    request("POST", "/on_projects", {
      userId,
      projectId: project.projectId,
      roleId,
    })
      .then(async (response) => {
        if (response.status === 200) {
          const data = await response.data;
          console.log("User added successfully:", data.name);
          projectChange();
        } else {
          console.error("Failed to add user:", response.statusText);
        }
        closePopUp();
      })
      .catch((error) => {
        console.log(error);
      });
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
            Choose user to add
          </h2>
        </div>
        <div className="w-full p-3 justify-center items-center">
          <div className="flex justify-center items-center">
            <Formik
              initialValues={{
                user: allUsers[0].id,
                role: roles[0].id,
              }}
              onSubmit={(values) => {
                console.log(values.user);
                console.log(values.role);
                handleAddUser(values.user, values.role);
              }}
            >
              <Form className="flex flex-col w-1/2 justify-center items-center">
                <div className="flex flex-col items-start mb-6 w-full">
                  <label className="font-medium text-text-dark">User</label>
                  <Field as="select" name="user">
                    {allUsers.map((user) => {
                      return (
                        <option key={user.id} value={user.id}>
                          {user.firstname} {user.lastname}
                        </option>
                      );
                    })}
                  </Field>
                </div>
                <div className="flex flex-col items-start mb-6 w-full">
                  <label className="font-medium text-text-dark">Role</label>
                  <Field as="select" name="role">
                    {roles.map((role) => {
                      return (
                        <option key={role.id} value={role.id}>
                          {role.name}
                        </option>
                      );
                    })}
                  </Field>
                </div>
                <div className="w-full p-3 justify-center items-center py-5">
                  <div className="flex justify-center items-center">
                    <button type="submit" className="bg-button-blue rounded-md">
                      <p className="text-lg py-2 px-5 text-white font-medium">
                        Add user
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

export default AddNewUserPopUp;
