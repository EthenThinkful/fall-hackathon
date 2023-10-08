import React, { useEffect, useState } from "react";
import "./UserProfile.css";
import { useNavigate, Link } from "react-router-dom";
import userPfp from "../Images/user-pfp.png";
import italianPic from "../Images/italian-for-travelers.jpg";
import toolsPic from "../Images/choosing-your-tools.jpg";
import aiPic from "../Images/what-is-ai.jpg";
import dots from "../Images/3-buttons.png";
import ethen from "../Images/ethenpfp.jpeg";

// defines the user profile of the application

function UserProfile({ user }) {
  // const user = {
  //   username: "JaneD2013",
  //   email: email,
  //   phone: "+1 (555)-555-5555",
  // };

  return (
    <>
      {user !== null ? (
        <div className="main-container">
          <div className="profile-header">
            <h1>My Profile</h1>
          </div>
          <div className="name-pfp-container">
            <div className="profile-container">
              <div className="edit-profile">
                <img
                  src={ethen}
                  alt="User Profile Picture"
                  className="profile-picture"
                />
                <h2>{user.name}</h2>
                <button className="edit-profile-btn">Edit Profile</button>
              </div>
            </div>
          </div>
          <h3>Completed Courses</h3>
          {/* user information */}
          <div className="info-section">
            <div className="user-info-container">
              <p
                style={{ fontSize: "15px", fontWeight: "700", margin: "4px 0" }}
              >
                Username
              </p>
              <p className="info-field">{user.userName}</p>
              <p style={{ fontSize: "15px", fontWeight: "700", margin: "0" }}>
                Email
              </p>
              <p className="info-field">{user.email}</p>
              <p style={{ fontSize: "15px", fontWeight: "700", margin: "0" }}>
                Phone
              </p>
              <p className="info-field">{user.phone}</p>
            </div>
            <div className="completed-courses-container">
              {/* will link to courses page */}
              {user.completedCourses.map((course) => (
                <div key={course.id} className="course-img">
                  {" "}
                  {/* Use a unique key for each course */}
                  <Link to={`/course/${course.title.replace(/\s+/g, "-").toLowerCase()}`} className="link">
                    <img
                      className="course-box-two"
                      src={course.image}
                      alt={course.title}
                    />

                    <div className="testPTag">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        {course.title} - {course.lessons} Lessons
                        <img src={dots} className="dot-menu" alt="Dots" />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          fontWeight: "700",
                          marginTop: "10px",
                        }}
                      >
                        {course.instructor}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default UserProfile;
