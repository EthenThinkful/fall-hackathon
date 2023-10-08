import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import "./DashComp.css";

export const data = [
  ["Category", "Hours"],
  ["Language", 15],
  ["Cooking", 11],
  ["Art", 7],
];

export const options = {
  pieHole: 0.5,
  is3D: false,
  pieSliceText: "value",
  colors: ["#7869B9", "violet", "#D0ADDC", "77588a"],
  legend: {
    position: "top",
    alignment: "center",
    textStyle: {
      color: "black", // You can adjust the text color here
      fontSize: 20,   // Adjust the font size as needed
      fontName: "Nobile",
    },
  },
  backgroundColor: "transparent",
};


export const YearlyProgress = ({ className }) => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Update the current year in real-time
    const interval = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000 * 60); // Update every minute (adjust as needed)

    return () => clearInterval(interval); // Clean up the interval
  }, []);

  return (
    <div className={`yearly-progress ${className}`}>
      <div className="chart-header">
        <h2 className="metrics-heading">{currentYear} Progress</h2>
      </div>
      <div className="chart-container">
        <Chart
          chartType="PieChart"
          width="100%" 
          height="400px" 
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};
