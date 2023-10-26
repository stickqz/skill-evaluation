import React from "react";
import "./index.css";
import StatItem from "../stats/StatItem";
import { html } from "../../assets/png";
import Syllabus from "../syllabus";
import Analysis from "../analysis";
import Graph from "../graph/Graph";

function Content({ showMe, score }) {
  return (
    <section className="content">
      <div className="content-container">
        <div className="content-first">
          <div className="skill-container">
            <div className="skill-container-header">
              <img className="skill-container-img" src={html} alt="html" />
              <div className="skill-container-header-text">
                <div className="skill-container-header-title">
                  Hypertext Markup Language
                </div>
                <div className="skill-container-header-subTitle">
                  Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
                </div>
              </div>
            </div>
            <div className="skill-container-btn" onClick={showMe}>
              Update
            </div>
          </div>
          <div className="stats-container">
            <div className="skill-container-header-title">Quick Statistics</div>
            <div className="stats-item-container">
              <StatItem rank={score.rank} type="YOUR RANK" icon="🏆" />
              <div className="line" />
              <StatItem rank={score.percentile} type="PERCENTILE" icon="📋" />
              <div className="line" />
              <StatItem
                rank={`${score.count} / 15`}
                type="CORRECT ANSWERS"
                icon="✅"
              />
            </div>
          </div>
          <div>
            <div className="skill-container-header-title">Comparison Graph</div>
            <Graph score={score} />
          </div>
        </div>
        <div className="content-second">
          <Syllabus />
          <Analysis score={score} />
        </div>
      </div>
    </section>
  );
}

export default Content;
