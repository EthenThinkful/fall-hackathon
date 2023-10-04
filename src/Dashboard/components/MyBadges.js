import React from "react";
import "./DashComp.css";

export const MyBadges = ({ className }) => {
  return (
    <div className={`my-badges ${className}`}>
      <h2>My Badges</h2>
      <div className="badge" />
      <div className="div" />
      <div className="badge-2" />
      <div className="badge-3" />
    </div>
  );
};
