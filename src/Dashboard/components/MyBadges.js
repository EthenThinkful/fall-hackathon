import React from "react";
import "./DashComp.css"; // Import your CSS styles here
import Badge01 from "./badges/Badge01.png";
import Badge02 from "./badges/Badge02.png";
import Badge03 from "./badges/Badge03.png";
import Badge04 from "./badges/Badge04.png";
import Badge05 from "./badges/Badge05.png";
import Badge06 from "./badges/Badge06.png";
import Badge07 from "./badges/Badge07.png";

// Import the Tooltip component
import Tooltip from "./Tooltip";

export const MyBadges = ({ className }) => {
  return (
    <div className={`my-badges ${className}`}>
      <h2 className="metrics-heading">My Badges</h2>
      <div className="badge-container">
        {/* Wrap each badge with Tooltip component */}
        <Tooltip text="Congratulations on starting your first lesson!">
          <div className="badge">
            <img src={Badge01} alt="Badge 01" />
          </div>
        </Tooltip>
        <Tooltip text="You spent over an hour learning! Great job!">
          <div className="badge">
            <img src={Badge02} alt="Badge 02" />
          </div>
        </Tooltip>
        <Tooltip text="You signed up in advance for a future course!">
          <div className="badge">
            <img src={Badge03} alt="Badge 03" />
          </div>
        </Tooltip>
        <Tooltip text="You joined a Cooking course!">
          <div className="badge">
            <img src={Badge04} alt="Badge 04" />
          </div>
        </Tooltip>
        <Tooltip text="You left your first review! Thank you!">
          <div className="badge">
            <img src={Badge05} alt="Badge 05" />
          </div>
        </Tooltip>
        <Tooltip text="You completed your first course! Nice work!">
          <div className="badge">
            <img src={Badge06} alt="Badge 06" />
          </div>
        </Tooltip>
        <Tooltip text="You joined a Language course!">
          <div className="badge">
            <img src={Badge07} alt="Badge 07" />
          </div>
        </Tooltip>
        {/* Add Tooltip components for other badges... */}
      </div>
    </div>
  );
};
