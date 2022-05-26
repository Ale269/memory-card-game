import React from "react";
import Favicon from "../img/favicon.png";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h3>
          <img src={Favicon} alt="logo" width="50px" />
        </h3>
      </div>
      <div className="game-explanation">
        <p>
          Click on each image but only once for each of them. <br />
          Each clicked image will increase the score by one point. <br />
          If you click the same image twice, the score will return to zero.
        </p>
      </div>
    </header>
  );
};

export default Header;
