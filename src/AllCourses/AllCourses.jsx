import React from "react";
import "./AllCourses.css";
import videoEditingPic from "../Images/video-editing.jpg";
import sarasVideosPic from "../Images/saras-videos.png";
import AllCoursesCarousel from "./AllCoursesCarousel";
import BecauseYouLikedCarousel from "./BecauseYouLikedCarousel";
import RecommendedCarousel from "./RecommendedCarousel";
import { useState, useEffect } from "react";
import users from "../users";
import data from "../data";

function AllCourses({ email, conv, inProgress, user }) {
  const [randomUserCourse, setRandomUserCourse] = useState([]);

  function randomIndex() {
    const randomIndex = Math.floor(Math.random() * user.allCourses.length);
    return user.allCourses[randomIndex];
  }

  useEffect(() => {
    const randoIndex = randomIndex();
    console.log("randomIndexed Course from users allCourses: ", randoIndex)
    setRandomUserCourse(randoIndex);
  }, [])

  return (
    <>
      {inProgress.length > 0 ? (
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
            <div style={{ marginTop: '2rem' }}></div>
            <div style={{ marginTop: '2rem', textAlign: 'left' }}>Popular Right Now</div>
            <AllCoursesCarousel users={users} email={email} user={data} />
            <div style={{ marginTop: '2rem' }}></div>
            <div style={{ marginTop: '2rem', textAlign: 'left' }}>Because You Follow Cooking</div>
            <BecauseYouLikedCarousel users={users} email={email} data={data} user={inProgress} />
            <div style={{ marginTop: '2rem' }}></div>
            <div style={{ marginTop: '2rem', textAlign: 'left' }}>Recommended for you (Generative AI)</div>
            <RecommendedCarousel user={inProgress} conv={conv} data={data} users={users} email={email} />
            <div style={{ marginTop: '4rem' }}></div>
          </div>
        </div>)
        : null}
    </>
  );
}

export default AllCourses;
