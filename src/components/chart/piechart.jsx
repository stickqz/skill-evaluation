import React from "react";

const dataPie = [
  { value: 500000, stroke: "red" },
  { value: 400000, stroke: "yellow" },
  { value: 300000, stroke: "green" },
  { value: 200000, stroke: "grey" },
];

function PieChart() {
  return (
    <div>
      <svg viewBox="0 0 42 42">
        <circle
          cx="21"
          cy="21"
          r="15.915494309189533"
          fill="none"
          stroke="#438AF61A"
          stroke-width={5}
        />
        <circle
          cx="21"
          cy="21"
          r="15.915494309189533"
          fill="none"
          stroke="yellow"
          stroke-width="5"
          stroke-dasharray="85 15"
          stroke-dashoffset="25"
        />
        <circle
          cx="21"
          cy="21"
          r="15.915494309189533"
          fill="none"
          stroke="red"
          stroke-width="5"
          stroke-dasharray="15 85"
          stroke-dashoffset="40"
        />
      </svg>
    </div>
  );
}

export default PieChart;
