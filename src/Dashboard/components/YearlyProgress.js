// YearlyProgress.js
import React from "react";
import { Chart } from "react-google-charts";

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
  colors: ['#7869B9','violet','#D0ADDC','purple'],
  legend: 'bottom',
  alignment: 'start',
};

export const YearlyProgress = ({ className }) => {
  return (
    <div className={`yearly-progress ${className}`}>
      <h2>2023 Progress</h2>
      <div className="chart-container">
        <Chart
          chartType="PieChart"
          width="80%" // Set width to 100% to make it responsive
          height="400px" // You can adjust the height as needed
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};
