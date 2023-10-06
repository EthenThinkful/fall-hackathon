import React from "react";
import "./UserProfile.css";
import { useNavigate } from "react-router-dom";
import userPfp from "../Image/user-pfp.png";
import italianPic from "../Image/italian-for-travelers.jpg";
import dots from "../Image/3-buttons.png";

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
      <div className="main-container">
        <div className="profile-header">
          <h1>My Profile</h1>
        </div>
        {/* <img src={userHeader} alt="User Header Image" className="name-pfp-container"/> */}

        <div className="name-pfp-container">
          <div className="profile-container">
            <div className="edit-profile">
              <img
                src={userPfp}
                alt="User Profile Picture"
                className="profile-picture"
              />
              <h2>Jane Doe</h2>
              <button className="edit-profile-btn">Edit Profile</button>
            </div>
            {/* <h2>Jane Doe</h2> */}
          </div>
        </div>
        <h3>Completed Courses</h3>

        {/* user information */}
        <div className="info-section">
          <div className="user-info-container">
            <p style={{ fontWeight: "700", margin: "4px 0" }}>Username</p>
            <p className="info-field">{user.username}</p>
            <p style={{ fontWeight: "700", margin: "0" }}>Email</p>
            <p className="info-field">{user.email}</p>
            <p style={{ fontWeight: "700", margin: "0" }}>Phone</p>
            <p className="info-field">{user.phone}</p>
          </div>
          <div className="completed-courses-container">
            {/* will link to courses page */}
            {/* style this */}
            <div className="course-img">
              <img className="course-box-two" src={italianPic}></img>
              <div className="testPTag">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  Painting with Acrylic - 10 Lessons
                  <img src={dots}></img>
                </div>
                <div style={{display: "flex"}}>Maisy's Studio</div>
              </div>
            </div>
            {/* style this */}
            <div className="course-img">
              <img className="course-box-two" src={italianPic}></img>
              <div className="testPTag">
              <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  Painting with Acrylic - 10 Lessons
                  <img src={dots}></img>
                </div>
                <div style={{display: "flex"}}>Maisy's Studio</div>
              </div>
            </div>
            {/* style this */}
            <div className="course-img">
              <img className="course-box-two" src={italianPic}></img>
              <div className="testPTag">
              <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  Painting with Acrylic - 10 Lessons
                  <img src={dots}></img>
                </div>
                <div style={{display: "flex"}}>Maisy's Studio</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
