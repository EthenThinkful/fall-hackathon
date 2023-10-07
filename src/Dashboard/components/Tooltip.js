import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: "relative", display: "inline-block" }}
    >
      {children}
      {showTooltip && (
        <div
          style={{
            position: "absolute",
            backgroundColor: "#7869b9",
            color: "#fff",
            padding: "5px",
            borderRadius: "4px",
            left: "50%",
            transform: "translateX(-50%)",
            bottom: "100%",
            whiteSpace: "nowrap",
            fontSize: "16px", // Adjust text size as needed
          }}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
