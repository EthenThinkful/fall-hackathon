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
  pieSliceText: "value", // Display the value (hours) on each slice
  colors: ["#7869B9", "violet", "#D0ADDC", "purple"],
  legend: "bottom",
  alignment: "start",
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
          width="100%" // Set width to 100% to make it responsive
          height="400px" // Adjust the height as needed (e.g., 400px)
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};
