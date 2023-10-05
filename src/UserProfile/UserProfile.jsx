import React from "react";
import NavBar from "../NavBar/NavBar";
import "./UserProfile.css";
import { useNavigate } from "react-router-dom";
import userPfp from "../Image/user-pfp.png";

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
      <div className="main-container">
        <div className="profile-header">
          <h1>My Profile</h1>
        </div>
        <div className="name-section">
          {/* <img src={userHeader} alt="User Header Image" className="name-pfp-container"/> */}
          <div className="name-pfp-container">
            {/* pfp img */}
            <img
              src={userPfp}
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
            {/* style this */}
            <div className="course-img-1">
              <button className="course-box" onClick={handleSubmit}></button>
              <p>Painting with Acrylic - 10 Lessons</p>
            </div>
            {/* style this */}
            <div className="course-img-2">
              <button className="course-box" onClick={handleSubmit}></button>
              <p>Italian Appetizers - 12 Lesson</p>
            </div>
            {/* style this */}
            <div className="course-img-3">
              <button className="course-box" onClick={handleSubmit}></button>
              <p>Watercolor Patterns - 6 Lessons</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
