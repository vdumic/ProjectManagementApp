import HeaderLayout from "../../layouts/HeaderLayout";
import HeaderButton from "../Buttons/HeaderButton";

const UserHome = () => {
  return (
    <HeaderLayout title="User home">
      <div className="flex">
        <div className="w-1/4 mx-4">
          <div>
            <h1>My projects</h1>
            <div>
              <p>Website Redesign for Cleaning Company</p>
              <p>Software Development: Mobile App Upgrade</p>
            </div>
          </div>
          <div>
            <h1>Other projects</h1>
            <div>
              <p>Design and Development of a Video Conferencing Application</p>
              <p>Building an Inventory Management System for Retail</p>
              <p>Implementation of a Chatbot for Customer Support</p>
            </div>
          </div>
          <HeaderButton title="Create project" />
        </div>
        <div className="w-3/4">
          <p>Project</p>
        </div>
      </div>
    </HeaderLayout>
  );
};

export default UserHome;
