import "../style/App.css";
import React, { useState, useEffect } from "react";
import Header from "./header.js";
import Score from "./score.js";
import Display from "./display.js";
import initialCardModels from "./cardModels.js";
let _ = require("lodash");

const App = () => {
  const cardModels = JSON.parse(JSON.stringify(initialCardModels));

  const [cardList, setCardList] = useState(cardModels);

  const [score, setScore] = useState(0);

  const [bestScore, setBestScore] = useState(0);

  const updateState = (event) => {
    const name = event.target.closest("div").dataset.name;
    if (name === undefined) {
      return;
    }

    const index = _.findIndex(cardList, (element) => {
      return element.name === name;
    });

    if (cardList[index].clicked === true) {
      resetState();
      return;
    }

    setCardList((oldState) => {
      oldState[index].clicked = true;
      return oldState;
    });

    setScore((score) => {
      const newScore = score + 1;
      if (newScore > bestScore) {
        setBestScore(newScore);
      }
      return newScore;
    });
  };

  const resetState = () => {
    setCardList((oldState) => {
      oldState = JSON.parse(JSON.stringify(initialCardModels));
      return oldState;
    });
    setScore(0);
  };

  const resetGame = () => {
    resetState();
    setBestScore(0);
  };

  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  };

  useEffect(() => {
    setCardList(shuffle(cardList));
  });

  return (
    <>
      <Header />
      <Score score={score} bestScore={bestScore} />
      <button className="reset-game" onClick={resetGame}>
        Reset the game
      </button>
      <div
        className="card-container"
        onClick={(event) => {
          updateState(event);
        }}
      >
        <Display state={cardList} />
      </div>
    </>
  );
};

export default App;
