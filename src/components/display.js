import React from "react";

const Display = (props) => {
  const array = props.state.map((element) => {
    return (
      <div className="card" data-name={element.name}>
        <img src={element.img} alt={element.name} width="100%" />
      </div>
    );
  });

  return <>{array}</>;
};

export default Display;
