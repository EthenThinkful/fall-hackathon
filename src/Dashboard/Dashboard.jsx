import React from "react";
import { YearlyProgress } from "./components/YearlyProgress";
import { MonthlyProgress } from "./components/MonthlyProgress";
import { MyBadges } from "./components/MyBadges";
import "./Dashboard.css";

function Dashboard({ handleSend }) {
  return (
    <div className="dashboard-container">
      {/* <NavBar /> */}
      <div className="dashboard-metrics">
        <MonthlyProgress className="monthly-progress-instance" />
        <YearlyProgress className="two-thousand-and-twenty-three-progress" />
        <MyBadges className="my-badges-instance" />
      </div>
      <div className="dashboard-content">
        <div className="overlap">
          <div />
          <h1>Welcome back Jane! Ready to learn?</h1>
        </div>
        <h3>Pick Up Where You Left Off</h3>
        <h3>
          Because You Liked
          <span className="text-wrapper-13">Traditional Italian Cooking</span>
        </h3>
        <h3>Popular Right Now</h3>
        <h3>Discover</h3>
      </div>
    </div>
  );
}

export default Dashboard;
