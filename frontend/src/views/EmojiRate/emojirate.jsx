import "./emojirate.css";
import { observer } from "mobx-react-lite";
import React from "react";
import Code from "../../components/code";

const code = {
  html: `<!-- imageSource: https://www.flaticon.com/packs/smileys-4 -->
<div class="emoji-rating">
    <input type="radio" name="star" id="star1" checked="checked" />
    <label for="star1">
        <img src="5.png" />
        <h4>Loved It</h4>
        </label>
    <input type="radio" name="star" id="star2" />
    <label for="star2">
        <img src="4.png" />
        <h4>Liked It</h4>
    </label>
    <input type="radio" name="star" id="star3" />
    <label for="star3">
        <img src="3.png" />
        <h4>It's OK</h4>
    </label>
    <input type="radio" name="star" id="star4" />
    <label for="star4">
        <img src="2.png" />
        <h4>Dislike It</h4>
    </label>
    <input type="radio" name="star" id="star5" />
    <label for="star5">
        <img src="1.png" />
        <h4>Hated It</h4>
    </label>
</div>`,
  css: `body {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	background-color: #20122d
}

.emoji-rating {
      position: relative;
      display: flex;
      flex-direction: row-reverse;
}

.emoji-rating input {
      display:  none;
}
.emoji-rating label {
      position: relative;
      width: 0;
      height: 128px;
      cursor: pointer;
      transition: 0.5s;
      filter: grayscale(1);
      display: flex;
      flex-direction: column;
      align-items: center;
      opacity: 0;
}

.emoji-rating:hover label {
      width: 160px;
      opacity: 0.2;
}

.emoji-rating input:hover + label,
.emoji-rating input:checked + label {
      filter: grayscale(0);
      opacity: 1;
}
.emoji-rating label h4 {
	color: #fff;
	font-size: 24px;
	padding-top: 10px;
	font-weight: 500;
	white-space: nowrap;
	opacity: 0;
	transform: translateY(-50px) scale(0);
	transition: 0.5s;
}

.emoji-rating input:hover + label h4,
.emoji-rating input:checked + label h4 {
      opacity: 1;
	transform: translateY(0) scale(1);
}

img {
      height: 128px;
}`,
};

function EmojiRate() {
  return (
    <div className="emoji-rate-container">
      <div className="emoji-rate-left">
        <div className="emoji-rating">
          <input type="radio" name="star" id="star1" defaultChecked />
          <label htmlFor="star1">
            <img src="/imgs/rate/5.png" alt="" />
            <h4>Loved It</h4>
          </label>
          <input type="radio" name="star" id="star2" />
          <label htmlFor="star2">
            <img src="/imgs/rate/4.png" alt="" />
            <h4>Liked It</h4>
          </label>
          <input type="radio" name="star" id="star3" />
          <label htmlFor="star3">
            <img src="/imgs/rate/3.png" alt="" />
            <h4>It's OK</h4>
          </label>
          <input type="radio" name="star" id="star4" />
          <label htmlFor="star4">
            <img src="/imgs/rate/2.png" alt="" />
            <h4>Dislike It</h4>
          </label>
          <input type="radio" name="star" id="star5" />
          <label htmlFor="star5">
            <img src="/imgs/rate/1.png" alt="" />
            <h4>Hated It</h4>
          </label>
        </div>
      </div>
      <div className="emoji-rate-code">
        <Code {...code} />
      </div>
    </div>
  );
}

export default observer(EmojiRate);
