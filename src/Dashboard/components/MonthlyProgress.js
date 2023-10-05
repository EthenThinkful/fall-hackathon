import React from "react";
import "./DashComp.css";

export const MonthlyProgress = ({ className }) => {
  return (
    <div className={`monthly-progress ${className}`}>
      <h2>Monthly Progress</h2>
      <div className="overlap-group-2">
        <div className="rectangle-4" />
        <div className="text-wrapper-7">October Goal</div>
        <div className="rectangle-5" />
        <div className="text-wrapper-8">28%</div>
      </div>
      <div className="text-wrapper-9">35 Hours</div>
    </div>
  );
};