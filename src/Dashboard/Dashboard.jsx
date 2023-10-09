import React, { useEffect, useState } from "react";
import { YearlyProgress } from "./components/YearlyProgress";
import { MonthlyProgress } from "./components/MonthlyProgress";
import { MyBadges } from "./components/MyBadges";
import ImageCarousel from "./components/ImageCarousel"; // Import the ImageCarousel component
import BecauseYouLikedCarousel from "../AllCourses/BecauseYouLikedCarousel";
import { courses } from "../data"; // Import the courses data
import "./Dashboard.css";


function Dashboard({email, users, conv, data, user, inProgress}) {
  const shuffledData = [...data];
  for (let i = shuffledData.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]];
  }
  const shuffledDataTwo = [...data];
  for (let i = shuffledData.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]];
  }

const [languageCourses, setLanguageCourses] = useState([]);
useEffect(() => {
  const languageCourses = data.filter((course) => course.category === "language");
  setLanguageCourses(languageCourses);
},[]);

  return (
    <>
    {languageCourses.length > 0 ? (
    <div className="body">
      <div className="dashboard-metrics-container">
        <MonthlyProgress className="monthly-progress" />
        <YearlyProgress className="yearly-progress" />
        <MyBadges className="my-badges" />
      </div>
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h1 className="welcome-message">
            {`Welcome back ${user.name}! Ready to learn?`}
          </h1>
          <div></div>
        </div>
        <div className="dashboard-content">
          <div className="overlap">
            <div />
          </div>
          <h3>Pick Up Where You Left Off</h3>
          <ImageCarousel users={users} email={email} conv={conv} data={data} user={inProgress}/>
          <h3>
            Because You Liked&nbsp;
            <em>{user.completedCourses[0].title}</em>
          </h3>
          <ImageCarousel users={users} email={email} conv={conv} data={data} user={languageCourses}/>
          <h3>Popular Right Now</h3>
          <ImageCarousel users={users} email={email} conv={conv} data={data} user={shuffledData}/>
          <h3>Discover</h3>
          <ImageCarousel users={users} email={email} conv={conv} data={data} user={shuffledDataTwo}/>
        </div>
        <div style={{marginTop: '4rem'}}></div>
      </div>
    </div>
    ): null}
    </>
  );
}

export default Dashboard;
