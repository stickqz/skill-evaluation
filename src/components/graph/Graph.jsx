import { useState } from "react";
import { UserData } from "./Data";
import LineChart from "./Line";
import "./Graph.css";

const Graph = ({ score }) => {
  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "",
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["#ffff", "#ffff", "#ffff", "#ffff", "#ffff"],
        borderColor: ["blue"],
        thickness: 0.1,
        fill: false,
        cubicInterpolationMode: "default",
        tension: 0.4,
        spanGaps: false,
        options: {
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      },
    ],
  });

  return (
    <div className="container-graph">
      <div className="graph-top">
        <div className="graph-txt-wrapper">
          <div className="graph-para">
            You scored {score.percentile}% percentile which is lower than the
            average percentile 72% <br />
            of all the engineers who took this assessment
          </div>
        </div>
        <div className="stats-img">📈</div>
      </div>
      <div className="graph-bottom">
        <LineChart chartData={userData} options={options} />
      </div>
    </div>
  );
};

export default Graph;
