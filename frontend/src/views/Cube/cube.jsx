import React from "react";
import "./cube.css";

import { observer } from "mobx-react-lite";

import Code from "../../components/code";

const code = {
  html: `<div class="cube">
    <img src="/imgs/cube/1.jpg" alt="" />
    <img src="/imgs/cube/2.jpg" alt="" />
    <img src="/imgs/cube/3.jpg" alt="" />
    <img src="/imgs/cube/4.jpg" alt="" />
    <img src="/imgs/cube/5.jpg" alt="" />
    <img src="/imgs/cube/6.jpg" alt="" />
</div>`,
  css: `html {
    perspective: 800px;
}
.cube {
    width: 200px;
    height: 200px;
    margin: 200px auto;
    transform-style: preserve-3d;
    animation: move 10s linear infinite forwards;
}
@keyframes move {
    to {
            transform: rotateX(2turn) rotateY(2turn) rotateZ(2turn);
  }
}
img {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.7;
}
.cube img:nth-child(1) {
    transform: translateZ(100px);
}
.cube img:nth-child(2) {
    transform: translateX(100px) rotateY(-90deg);   
}
.cube img:nth-child(3) {
    transform: translateZ(-100px);
}
.cube img:nth-child(4) {
    transform: translateX(-100px) rotateY(-90deg);
}
.cube img:nth-child(5) {
    transform: translateY(-100px) rotateX(90deg);
}
.cube img:nth-child(6) {
    transform: translateY(100px) rotateX(-90deg);
}`,
};

function Cube() {
  return (
    <div className="cube-container">
      <div className="cube-left">
        <div className="cube">
          <img src="/imgs/cube/1.jpg" alt="" />
          <img src="/imgs/cube/2.jpg" alt="" />
          <img src="/imgs/cube/3.jpg" alt="" />
          <img src="/imgs/cube/4.jpg" alt="" />
          <img src="/imgs/cube/5.jpg" alt="" />
          <img src="/imgs/cube/6.jpg" alt="" />
        </div>
      </div>
      <div className="cube-code">
        <Code {...code} />
      </div>
    </div>
  );
}

export default observer(Cube);
