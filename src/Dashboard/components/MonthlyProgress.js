import React from "react";
import "./DashComp.css";
import ProgressBar from "@ramonak/react-progress-bar";


export const MonthlyProgress = ({ className }) => {
  return (
    <div>
      <h2>Monthly Progress</h2>
      <ProgressBar completed={28} />
      <p>October Goal: 35 Hours</p>
    </div>
  );
};
