import React from "react";
import "./AllCourses.css";

function AllCourses() {
  return (
    <>
      <div className="main">
        <div className="all-courses-header">
          <div className="all-courses">All Courses</div>
        </div>
        <div className="all-courses-left-section">
          <div className="all-courses-left">All Courses</div>
          <div className="courses-genre-container">
            {/* <div className="creative-container"> */}
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
            {/* </div> */}
            {/* <div className="tech-container"> */}
            <div className="left-course-headers">
              TECH <hr />
            </div>
            <div className="left-courses-list">
              <p>Coding</p>
              <p>Cyber Security</p>
              <p>Data Science</p>
              <p>Information Technology</p>
            </div>
            {/* </div> */}
            {/* <div className="lifestyle-container"> */}
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
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default AllCourses;
