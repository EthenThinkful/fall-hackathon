// YearlyProgress.js
import React from "react";
import { Chart } from "react-google-charts";
import "./DashComp.css";

export const data = [
  ["Category", "Hours"],
  ["Cooking", 11],
  ["Graphic Design", 2],
  ["Language", 15],
  ["Photography", 22],
  ["Art", 7],
];

export const options = {
  pieHole: 0.5,
  is3D: false,
  pieSliceText: "value", // Display the value (hours) on each slice
};

export const YearlyProgress = ({ className }) => {
  return (
    <div className={`yearly-progress ${className}`}>
      <h2>2023 Progress</h2>
      <div className="chart-container">
        <Chart
          chartType="PieChart"
          width="100%" // Set width to 100% to make it responsive
          height="400px" // You can adjust the height as needed
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};
