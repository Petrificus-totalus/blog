import "./moonlight.css";
import React, { useEffect } from "react";

import { observer } from "mobx-react-lite";

import Code from "../../components/code";
import ThemeSelect from "../../components/themeSelect";
import { useNavigate } from "react-router-dom";

function Moonlight() {
  const navigate = useNavigate();

  useEffect(() => {
    let stars = document.getElementById("stars");
    let moon = document.getElementById("moon");
    let mountains_behind = document.getElementById("mountains_behind");
    let text = document.getElementById("text");
    let btn = document.getElementById("btn");
    let mountains_front = document.getElementById("mountains_front");
    let header = document.querySelector("header");
    document.addEventListener("scroll", function () {
      let value = window.scrollY;
      stars.style.left = value * 0.25 + "px";
      moon.style.top = value * 1.05 + "px";
      mountains_behind.style.top = value * 0.5 + "px";
      mountains_front.style.top = value * 0 + "px";
      text.style.marginRight = value * 4 + "px";
      text.style.marginTop = value * 1.5 + "px";
      btn.style.marginTop = value * 1.5 + "px";
      header.style.top = value * 0.5 + "px";
    });
  }, []);
  const explore = () => {
    const sec = document.getElementById("sec");
    if (sec) {
      sec.scrollIntoView();
    }
  };

  return (
    <div className="moonlight">
      <header>
        <a
          href="javascript:;"
          className="logo"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </a>
        <ul>
          <li>
            <a href="javascript:;" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="javascript:;">About</a>
          </li>
          <li>
            <a href="javascript:;">Work</a>
          </li>
          <li>
            <a href="javascript:;">Contact</a>
          </li>
        </ul>
      </header>
      <section>
        <img src="/imgs/moonlight/stars.png" alt="" id="stars" />
        <img src="/imgs/moonlight/moon.png" alt="" id="moon" />
        <img
          src="/imgs/moonlight/mountains_behind.png"
          alt=""
          id="mountains_behind"
        />
        <h2 id="text">Moon Light</h2>
        <a href="javascript:;" id="btn" onClick={() => explore()}>
          Explore
        </a>
        <img
          src="/imgs/moonlight/mountains_front.png"
          alt=""
          id="mountains_front"
        />
      </section>
      <div className="sec" id="sec">
        <h2>Parallax Scrolling Effects</h2>
        <div className="themeSelect">
          <ThemeSelect />
        </div>

        <Code {...code} />
      </div>
    </div>
  );
}

const code = {
  html: `<header>
    <a href="#" class="logo">Home</a>
    <ul>
            <li><a href="#" class="active">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Work</a></li>
            <li><a href="#">Contact</a></li>
    </ul>
</header>

<section>
    <img src="stars.png" id="stars" />
    <img src="moon.png" id="moon" />
    <img src="mountains_behind.png" id="mountains_behind" />
    <h2 id="text">Moon Light</h2>
    <a href="#sec" id="btn">Explore</a>
    <img src="mountains_front.png" id="mountains_front" />
</section>

<div class="sec" id="sec">
    <h2>Parallax Scrolling Effects</h2>
    <p>...</p>
</div>`,
  css: `* {
  scroll-behavior: smooth;
}
.moonlight {
    font-family: "Poppins", sans-serif;
    min-height: 100vh;
    box-sizing: border-box;
    background: linear-gradient(#2b1055, #7597de);
    overflow-x: hidden;
}
.moonlight header {
    position: absolute;
    top: 0;    left: 0;
    width: 100%;
    padding: 30px 100px;
    display: flex;    justify-content: space-between;    align-items: center;
    z-index: 1000;
}
.moonlight header .logo {
    color: #fff;
    font-weight: 700;
    text-decoration: none;
    font-size: 2em;
    text-transform: uppercase;
    letter-spacing: 2px;
}
.moonlight header ul {
    display: flex;    justify-content: center;    align-items: center;
}
.moonlight header ul li {
    list-style: none;
    margin-left: 20px;
}
.moonlight header ul li a {
    text-decoration: none;
    padding: 6px 15px;
    color: #fff;
    border-radius: 20px;
}
.moonlight header ul li a:hover,
.moonlight header ul li a.active {
    background: #fff;
    color: #2b1055;
}
.moonlight section {
    position: relative;
    width: 100%;    height: 100vh;
    padding: 10px;
    display: flex;    justify-content: center;    align-items: center;
    overflow: hidden;
}
.moonlight section::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;    height: 100px;
    z-index: 1000;
    background: linear-gradient(to top, #1c0522, transparent);
}
.moonlight section img {
    position: absolute;
    top: 0;    left: 0;
    width: 100%;    height: 100%;
    object-fit: cover;
    pointer-events: none;
}
.moonlight section img#moon {
  mix-blend-mode: screen;
}
.moonlight section img#mountains_front {
    z-index: 10;
}
.moonlight #text {
    position: absolute;
    right: -350px;
    color: #fff;
    white-space: nowrap;
    font-size: 7.5vw;
    z-index: 9;
}
.moonlight #btn {
    text-decoration: none;
    display: inline-block;
    padding: 8px 30px;
    border-radius: 40px;
    background: #fff;
    color: #2b1055;
    font-size: 1.5em;
    z-index: 9;
    transform: translateY(100px);
}
.moonlight .sec {
    position: relative;
    padding: 100px;
    background: #1c0522;
}
.moonlight .sec h2 {
    font-size: 3.5em;
    margin-bottom: 10px;
    color: #fff;
}`,
};
export default observer(Moonlight);
