import React from "react";
import "./neontext.css";
import { observer } from "mobx-react-lite";
import Code from "../../components/code";

const code = {
  html: `<h2>
  <!-- 利用var()给字母排序，以实现依次闪烁效果 -->
  <span style="--o: 1">O</span>
  <span style="--o: 2">n</span>
  <span style="--o: 3">e</span>
  <span style="--o: 4">P</span>
  <span style="--o: 5">i</span>
  <span style="--o: 6">e</span>
  <span style="--o: 7">c</span>
  <span style="--o: 8">e</span>
</h2>`,
  css: `h2 {
    width: 100%;
    /* flex布局 */
    display: flex;
    /* 初始文字透明 */
    color: transparent;
    /* 文字水平垂直居中显示 */
    justify-content: center;
    align-items: center;
    /* h2高度 */
    height: 100vh;
    /* 字号 */
    font-size: 5vw;
}
h2 span:nth-child(4) {
    /* 单词间隙 */
    margin-left: 5vw;
}
h2 span {
    animation: LetterColor 3s linear infinite;
    /* 计算每个字的动画起始时间 */
    animation-delay: calc(0.1s * var(--o));
}
@keyframes LetterColor {
    0% {
            color: #fff;
            /* 利用模糊距离不同的阴影实现霓虹灯光晕效果 */
            text-shadow: 0 0 10px #00b3ff, 0 0 20px #00b3ff, 0 0 40px #00b3ff,
                0 0 80px #00b3ff, 0 0 120px #00b3ff, 0 0 200px #00b3ff, 0 0 300px #00b3ff,
                0 0 400px #00b3ff;
            /* 设置高斯模糊与色调，实现模糊效果和颜色变换 */
            filter: blur(2px) hue-rotate(0deg);
   }
    30%,
    70% {
            color: #fff;
            /* 减少光晕大小 */
            text-shadow: 0 0 10px #00b3ff, 0 0 20px #00b3ff, 0 0 40px #00b3ff,
                0 0 80px #00b3ff, 0 0 120px #00b3ff, 0 0 200px #00b3ff;
            /* 色调变换360度 */
            filter: blur(2px) hue-rotate(360deg);
   }
    100% {
            /* 动画结束字变透明 */
            color: transparent;
            /* 动画结束消除阴影 */
            text-shadow: none;
            /* 动画结束色调重置 */
            filter: blur(2px) hue-rotate(0deg);
   }
}`,
};
function NeonText() {
  return (
    <div className="neon-text-container">
      <div className="neon-text">
        <h2>
          {/* 利用var()给字母排序，以实现依次闪烁效果  */}
          <span style={{ "--o": 1 }}>O</span>
          <span style={{ "--o": 2 }}>n</span>
          <span style={{ "--o": 3 }}>e</span>
          <span style={{ "--o": 4 }}>P</span>
          <span style={{ "--o": 5 }}>i</span>
          <span style={{ "--o": 6 }}>e</span>
          <span style={{ "--o": 7 }}>c</span>
          <span style={{ "--o": 8 }}>e</span>
        </h2>
      </div>
      <div className="neon-text-code code">
        <Code {...code} />
      </div>
    </div>
  );
}

export default observer(NeonText);
