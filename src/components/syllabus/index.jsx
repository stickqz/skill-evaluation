import React from "react";
import "./index.css";

const list = [
  {
    title: "HTML Tools, Forms, History",
    percent: 80,
    color: "rgba(67, 138, 246, 1)",
    lightColor: "rgba(67, 138, 246, 0.1)",
  },
  {
    title: "Tags & References in HTML",
    percent: 60,
    color: "rgba(255, 145, 66, 1)",
    lightColor: "rgba(255, 145, 66, 0.1)",
  },
  {
    title: "Tables & CSS Basics",
    percent: 24,
    color: "rgba(251, 94, 94, 1)",
    lightColor: "rgba(251, 94, 94, 0.1)",
  },
  {
    title: "Tables & CSS Basics",
    percent: 96,
    color: "rgba(46, 201, 113, 1)",
    lightColor: "rgba(46, 201, 113, 0.1)",
  },
];

function Syllabus() {
  return (
    <div className="syllabus">
      <div className="skill-container-header-title">Syllabus wise Analysis</div>
      <div className="syllabus-container">
        {list.map((item) => {
          return (
            <div className="syllabus-item">
              <div className="syllabus-title">{item.title}</div>
              <div className="syllabus-item-percent">
                <div
                  className="syllabus-percent"
                  style={{ backgroundColor: item.lightColor }}
                >
                  <div
                    className="syllabus-percent-item"
                    style={{
                      width: `${item.percent}%`,
                      height: "100%",
                      backgroundColor: item.color,
                    }}
                  ></div>
                </div>
                <div>{item.percent}%</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Syllabus;
