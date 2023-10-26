import { arrow, html } from "../../assets/png";
import React from "react";
import "./UpdateScore.css";

const UpdateScore = (props) => {
  const [rank, setRank] = React.useState(props.score.rank);
  const [percentile, setPercentile] = React.useState(props.score.percentile);
  const [count, setCount] = React.useState(props.score.count);

  return (
    <div className="update-wrapper">
      <div className="update-top">
        <div className="heading">Update Scores</div>
        <img className="update-img" src={html} alt="html" />
      </div>
      <div className="update-bottom">
        <div className="update-item">
          <div className="update-heading">
            <div className="no">1</div>
            <div className="update-title">
              Update your <span className="update-head">rank</span>
            </div>
          </div>
          <input
            type="text"
            value={rank}
            className="input"
            onChange={(e) => setRank(e.target.value)}
          />
        </div>
        <div className="update-item">
          <div className="update-heading">
            <div className="no">2</div>
            <div className="update-title">
              Update your <span className="update-head">percentile</span>
            </div>
          </div>
          <input
            type="text"
            value={percentile}
            className="input"
            onChange={(e) => setPercentile(e.target.value)}
          />
        </div>
        <div className="update-item">
          <div className="update-heading">
            <div className="no">3</div>
            <div className="update-title">
              Update your{" "}
              <span className="update-head">current score (out of 15)</span>
            </div>
          </div>
          <input
            type="text"
            value={count}
            className="input"
            onChange={(e) => setCount(e.target.value)}
          />
        </div>
      </div>
      <div className="update-end">
        <div className="update-btn" onClick={props.cancel}>
          Cancel
        </div>
        <div
          className="update-btn"
          style={{ backgroundColor: "#142683", color: "white" }}
          onClick={() => props.updateScore({ rank, percentile, count })}
        >
          Save{" "}
          <img style={{ width: "16px", height: "16px" }} src={arrow} alt="" />{" "}
        </div>
      </div>
    </div>
  );
};

export default UpdateScore;
