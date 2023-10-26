import React from "react";
import "./App.css";
import Header from "./components/header";
import Body from "./components/body";
import UpdateScore from "./components/update/UpdateScore";

function App() {
  const [show, setSetshow] = React.useState(false);
  const [score, setScore] = React.useState({
    rank: 12890,
    count: 7,
    percentile: 37,
  });

  const updateScore = (score) => {
    if (isNaN(score.rank)) return;
    if (isNaN(score.count)) return;
    if (isNaN(score.percentile)) return;

    if (score.count > 15) return;

    setScore(score);
    setSetshow(false);
  };

  const cancel = () => {
    setSetshow(false);
  };
  const showMe = () => {
    setSetshow(true);
  };

  return (
    <div className="App">
      {show && (
        <div className="modal-bg">
          <UpdateScore
            updateScore={updateScore}
            score={score}
            cancel={cancel}
          />
        </div>
      )}
      <Header />
      <Body score={score} showMe={showMe} />
    </div>
  );
}

export default App;
