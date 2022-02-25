import "./shadows.css";
import { observer } from "mobx-react-lite";
import React from "react";
import FlipCard from "../../components/flipcard";
import Code from "../../components/code";

function Shadows() {
  return (
    <div className="shadows-container">
      <div className="shadows">
        {content.map((item, index) => {
          return (
            <FlipCard key={item}>
              <div className={`box shadow${index + 1}`}>CSS Code</div>
              <div className="shadow-code">
                <Code css={item} showLineNumbers={true} />
              </div>
            </FlipCard>
          );
        })}
      </div>
    </div>
  );
}
const content = [
  `.box1{
      box-shadow: -20px 20px 13px rgba(0, 0, 0, 0.3);
}



`,
  `.box2::before {
      content: "";
      position: absolute;
      bottom: 6px;    left: 10%;
      width: 90%;    height: 33px;
      background: rgba(0, 0, 0, 0.3);
      transform-origin: left;
      transform: skewY(5deg);
      z-index: -1;
      filter: blur(4px);
}`,
  `.box3::before {
    content: "";
    position: absolute;
    bottom: 0;    left: 0;
    width: 50%;    height: 20px;
    background: rgba(0, 0, 0, 0.3);
    transform-origin: right;
    transform: skewY(-8deg);
    z-index: -1;
    filter: blur(6px);
}
.box3::after {
    content: "";
    position: absolute;
    bottom: 0;    right: 0;
    width: 50%;    height: 20px;
    background: rgba(0, 0, 0, 0.3);
    transform-origin: left;
    transform: skewY(8deg);
    z-index: -1;
    filter: blur(6px);
}`,
  `.box4::before {
    content: "";
    position: absolute;
    bottom: -33px;    left: 5%;
    width: 90%;    height: 13px;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    z-index: -1;
    filter: blur(6px);
}`,
  `.box5::before {
    content: "";
    position: absolute;
    bottom: -15%;    left: 5%;
    width: 90%;    height: 90%;
    background: rgba(0, 0, 0, 0.3);
    z-index: -1;
    filter: blur(6px);
}`,
  `.box6 {
    background: #2ec194;
    border-radius: 10px;
    box-shadow: 
      -10px -10px 10px rgba(255, 255, 255, 0.2),
      10px 10px 10px rgba(0, 0, 0, 0.1);
}`,
  `.box7 {
    background: #2ec194;
    border-radius: 10px;
    box-shadow: 
      -10px -10px 10px rgba(255, 255, 255, 0.2),
      10px 10px 10px rgba(0, 0, 0, 0.1),
      inset -4px -4px 4px rgba(255, 255, 255, 0.2),
      inset 4px 4px 4px rgba(0, 0, 0, 0.1);
}`,
];

export default observer(Shadows);
