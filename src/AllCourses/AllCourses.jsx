import React from "react";
import "./AllCourses.css";
import videoEditingPic from "../Images/video-editing.jpg";
import sarasVideosPic from "../Images/saras-videos.png";

function AllCourses() {
  return (
    <>
      <div className="main">
        <div className="all-courses-left-section">
          <div className="all-courses-left">All Courses</div>
          <div className="courses-genre-container">
            <div className="left-course-headers">
              CREATIVE <hr />
              <div />
            </div>
            <div className="left-courses-list">
              <p>Animation</p>
              <p>Cooking</p>
              <p>Fine Art</p>
              <p>Graphic Design</p>
              <p>Music</p>
              <p>Photography</p>
            </div>
            <div className="left-course-headers">
              TECH <hr />
            </div>
            <div className="left-courses-list">
              <p>Coding</p>
              <p>Cyber Security</p>
              <p>Data Science</p>
              <p>Information Technology</p>
            </div>
            <div className="left-course-headers">
              LIFESTYLE
              <hr />
            </div>
            <div className="left-courses-list">
              <p>Fashion and Beauty</p>
              <p>Health and Wellness</p>
              <p>Home and Garden</p>
              <p>Travel</p>
            </div>
          </div>
        </div>

        <div className="all-courses-right-section">
          <div className="all-courses">All Courses</div>
          <div className="staff-pick-left-section">
            <div className="staff-pick-container">
              <div className="staff-pick-header">Staff Pick</div>
              <div
                style={{
                  fontSize: "15px",
                  width: "14rem",
                  textAlign: "left",
                  margin: "1rem",
                  marginBottom: "38px",
                }}
              >
                Video Editing for Absolute Beginners - 22 Lessons
              </div>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <img
                  style={{ marginLeft: "11px" }}
                  src={sarasVideosPic}
                  className="saras-videos-img"
                ></img>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: "12px",
                    justifyContent: "center",
                    marginLeft: "12px",
                  }}
                >
                  <div style={{ fontWeight: "700" }}>Sara's Videos</div>
                  <div>5K Likes</div>
                </div>
              </div>
            </div>
            <div className="staff-pick-img">
              <img src={videoEditingPic}></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllCourses;
