import React from "react";
import NavBar from "../NavBar/NavBar";
import "./UserProfile.css";
import { useNavigate } from "react-router-dom";

// defines the user profile of the application

function UserProfile() {
  const user = {
    username: "JaneD2013",
    email: "janed2013@gmail.com",
    phone: "+1 (555)-555-5555",
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("../course");
  };

  return (
    <>
      <NavBar />
      <div>
        <div className="profile-header">
          <h1>My Profile</h1>
        </div>
        <div className="name-section">
          <div className="name-pfp-container">
            {/* pfp img */}
            <img
              src="profile-picture.png"
              alt="User Profile Picture"
              className="profile-picture"
            />
            <h2>Jane Doe</h2>
          </div>
        </div>
        {/* user information */}
        <div className="info-section">
          <div className="user-info-container">
            <p>Username</p>
            <p className="info-field">{user.username}</p>
            <p>Email</p>
            <p className="info-field">{user.email}</p>
            <p>Phone</p>
            <p className="info-field">{user.phone}</p>
          </div>
        </div>

        <div>
          <h3>Completed Courses</h3>
          <div className="completed-courses-container">
            {/* will link to courses page */}
            <button className="course-box" onClick={handleSubmit}>
              Click me to go to your courses
            </button>
            <button className="course-box" onClick={handleSubmit}>
              Click me to go to your courses
            </button>
            <button className="course-box" onClick={handleSubmit}>
              Click me to go to your courses
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
