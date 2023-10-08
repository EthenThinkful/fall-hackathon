import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import "./DashComp.css"; 

export const MonthlyProgress = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="">Monthly Progress</h2>
      <div className="progress-container">
        <p className="progress-text">35 Hours</p>
        <ProgressBar
          completed={9.8}
          bgColor="#7869B9"
          height="50px"
          className="progress-bar"
          borderRadius=""
          baseBgColor="#D0ADDC"
          labelColor="#ffffff"
          labelSize="18px"
          margin="0" /* Remove margin for ProgressBar */
          animateOnRender
          maxCompleted={35}
          customLabel="9.8 hrs / 28%"
        />
        <p className="progress-text">October Goal</p>
      </div>
    </div>
  );
};
