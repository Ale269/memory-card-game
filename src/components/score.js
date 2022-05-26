import React from "react";

const Score = (props) => {
  return (
    <div className="score-container">
      <h3>Score: {props.score}</h3>
      <h3>Best score: {props.bestScore}</h3>
    </div>
  );
};

export default Score;
