import React from "react";
import "./index.css";

import DonutChart from "react-svg-donut-chart";

function Analysis({ score }) {
  const dataPie = [
    { value: 15 - score.count, stroke: "#438AF61A" },
    { value: 15, stroke: "#438AF6" },
  ];

  return (
    <div className="analysis">
      <div>
        <div className="skill-container-header-title">
          Syllabus wise Analysis
        </div>
      </div>

      <div className="analysis-subTitle">
        <span className="analysis-title">
          {`You scored ${score.count} question correct out of 15. `}
        </span>
        However it still needs some improvements
      </div>
      <DonutChart data={dataPie} />
    </div>
  );
}

export default Analysis;
