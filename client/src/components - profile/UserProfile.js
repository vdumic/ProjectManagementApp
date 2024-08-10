import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { register } from "@teamhanko/hanko-elements";
import { Helmet } from "react-helmet";

import { request } from "../axios/axios_helper";

import ProjectHeader from "../components - project page/ProjectHeader";
import MobileHeader from "../components - projects list/Header/MobileHeader";
import EditButton from "./Buttons/EditButton";
import EditProfilePopUp from "./PopUps/EditProfilePopUp";

const hankoApi = process.env.REACT_APP_HANKO_API_URL;

const UserProfile = () => {
  const [user, setUser] = useState([]);
  const [editProfilePopUp, setEditProfilePopUp] = useState(false);

  const { userId } = useParams();

  const fetchUser = useCallback(() => {
    request("GET", `/users/profile/${userId}`, {})
      .then((response) => response.data)
      .then((data) => setUser(data))
      .catch((error) => console.log(error));
  }, [userId]);

  useEffect(() => {
    register(hankoApi).catch((error) => {
      console.log(error);
    });

    fetchUser();
  }, [fetchUser]);

  const handleEditProfileClicked = () => {
    setEditProfilePopUp(true);
  };

  return (
    <div className="min-h-screen bg-bckgrnd-main">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sprynt / Profile</title>
      </Helmet>
      <ProjectHeader userId={userId} />
      <MobileHeader />
      <div className="flex flex-col w-full items-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-lg mt-12 bg-white rounded-lg shadow-lg p-6 sm:p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-semibold text-text-dark">
              User Profile
            </h1>
          </div>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row justify-start items-center">
              <p className="font-medium text-text-dark">
                First Name: {user.firstname}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-start items-center">
              <p className="font-medium text-text-dark">
                Last Name: {user.lastname}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-start items-center">
              <p className="font-medium text-text-dark">
                Username: {user.username}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-start items-center">
              <p className="font-medium text-text-dark">
                Organization: {user.organization}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-start items-center">
              <p className="font-medium text-text-dark">
                Job Title: {user.jobtitle}
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <EditButton handleClick={handleEditProfileClicked} />
          </div>
        </div>
      </div>
      <EditProfilePopUp
        user={user}
        openPopUp={editProfilePopUp}
        closePopUp={() => setEditProfilePopUp(false)}
        userChange={fetchUser}
      />
    </div>
  );
};

export default UserProfile;
