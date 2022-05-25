import "../style/App.css";
import React, { useState } from "react";
import Header from "./header.js";
import Score from "./score.js";

const App = () => {
  const [card, setCard] = useState({
    pino: "daniele",
  });

  return (
    <div>
      <Header />
      <Score score={3} />
    </div>
  );
};

export default App;
