import React from "react";
import "./glassycard.css";
import { observer } from "mobx-react-lite";
import Code from "../../components/code";

const code = {
  html: `<div class="glassy-card">
    <span style="--i": 0"></span>
    <span style="--i": 1"></span>
    <span style="--i": 2"></span>
    <span style="--i": 3"></span>
    <div class="glass">
        <div>
       Jin Nanhao
            <br />
            <i>jnh981103@gmail.com</i>
        </div>
    </div>
</div>`,
  css: `.glassy-card {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
  
.glassy-card span {
    position: absolute;
    top: 0;
    width: 160px;
    height: 160px;
    display: block;
    border-radius: 50%;
    transform-origin: 80px 0;
    transform: rotate(calc(90deg * var(--i)));
    filter: blur(55px);
    opacity: 0.75;
}
  
.glassy-card span:nth-child(1) {
    background-color: #01b2fe;
}
.glassy-card span:nth-child(2) {
    background-color: #ff008c;
}
.glassy-card span:nth-child(3) {
    background-color: #ffcd00;
}
.glassy-card span:nth-child(4) {
    background-color: #00c456;
}
  
.glassy-card .glass {
    position: absolute;
    width: 300px;
    height: 200px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 12px;
    border: 1px solid #fff;
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
}
  
.glassy-card .glass::before {
    content: "";
    position: absolute;
    top: 0;
    left: -50%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
    pointer-events: none;
    transform: skewX(345deg);
}
  
.glassy-card .glass div {
    padding: 10px;
    font-weight: 400;
    width: 100%;
    background: rgba(255, 255, 255, 0.2);
    color: #333;
    text-align: end;
}
  
.glassy-card .glass div i {
    font-weight: 300;
    font-size: 0.75em;
    font-style: normal;
}`,
};
function GlassyCard() {
  return (
    <div className="glassy-card-container">
      <div className="glassy-card-left">
        <div className="glassy-card">
          <span style={{ "--i": 0 }}></span>
          <span style={{ "--i": 1 }}></span>
          <span style={{ "--i": 2 }}></span>
          <span style={{ "--i": 3 }}></span>
          <div className="glass">
            <div>
              Jin Nanhao
              <br />
              <i>jnh981103@gmail.com</i>
            </div>
          </div>
        </div>
      </div>
      <div className="glassy-code">
        <Code {...code} />
      </div>
    </div>
  );
}

export default observer(GlassyCard);
