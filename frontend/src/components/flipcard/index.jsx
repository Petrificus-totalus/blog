import React, { useState } from "react";
import "./index.css";

export default function FlipCard(props) {
  const [frontTurn, setFrontTurn] = useState(false);
  const [backTurn, setBackTurn] = useState(false);

  return (
    <div
      className="boxs"
      onClick={() => {
        setFrontTurn(!frontTurn);
        setBackTurn(!backTurn);
      }}
    >
      <div className={`front ${frontTurn ? "frontturn" : ""}`}>
        {props.children[0]}
      </div>
      <div className={`back ${backTurn ? "backturn" : ""}`}>
        {props.children[1]}
      </div>
    </div>
  );
}
