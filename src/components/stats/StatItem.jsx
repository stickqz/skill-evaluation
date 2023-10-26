import React from "react";
import "./StatItem.css";

function StatItem(props) {
  return (
    <div className="stats-item">
      <div className="stats-img">{props.icon}</div>
      <div className="state-text-container">
        <div className="state-title">{props.rank}</div>
        <div className="state-subTitle">{props.type}</div>
      </div>
    </div>
  );
}

export default StatItem;
