import React, { useEffect } from "react";
import "./smoketext.css";
import { observer } from "mobx-react-lite";
import Code from "../../components/code";

const code = {
  html: `<section>
  <p class="text">
    There are many apple trees in a garden. They’re good friends. One day
    an old tree is ill. There are many pests in the tree. Leaves of the
    tree turn yellow. The old tree feels very sad and unwell. Another tree
    sends for a doctor for him. At first, they send for a pigeon, but she
    has no idea about it. Then they send for an oriole, and she can’t
    treat the old tree well. Then they send for a woodpecker. She is a
    good doctor. She pecks a hole in the tree and eats lots of pests. At
    last the old tree becomes better and better.
  </p>
</section>
<script>
    const text=document.querySelector('.text');
    text.innerHTML=text.textContent.replace(/\S/g,"<span>$&</span>")
    const letters = document.querySelectorAll("span");
    for(let i=0;i<letters.length;i++){
        letters[i].addEventListener('mouseover',function(){
            letters[i].classList.add('active')
            letters[i].classList.add('active'+i)
            // 恢复
            setTimeout(()=>{
                let letter = document.querySelector('.active'+i)
                letter.classList.remove("active");
                letter.classList.add("show");
            },2000)          
        })
    }
</script>`,
  css: `section{
    position: relative;
    display: flex;    justify-content: center;    align-items: center;
    width: 100%;    height: 100vh;
    background-color: #111;
    overflow: hidden;
}

section .text{
    position: relative;
    color: #fff;
    margin: 20px;
    max-width: 800px;
  user-select: none;
}

section .text span{
    position: relative;
    display: inline-block;
    cursor: pointer;
}

section .text span.active{
    animation: smoke 2s linear forwards;
    transform-origin: bottom;
}

.show{
    animation: show-letter .5s linear forwards;
}

@keyframes show-letter{
    0%{
        opacity: 0;
        transform: rotate(0deg) scale(1);
    }
    50%{
        opacity: 0.5;
        transform: rotate(45deg) scale(1.1);
    }
    100%{
        opacity: 1;
        transform: rotate(0deg) scale(1);
    }
}

@keyframes smoke{
    0%{
        opacity: 1;
        filter: blur(0);
        transform: translateX(0) translateY(0) rotate(0deg) scale(1);
    }
    100%{
        opacity: 0;
        filter: blur(20px);
        transform: translateX(300px) translateY(-300px) rotate(720deg) scale(4);
    }
}`,
};
function SmokeText() {
  useEffect(() => {
    const text = document.querySelector(".smoketext");
    text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
    // 定义几秒后恢复
    let goBackTime = 2;

    const letters = document.querySelectorAll(
      ".smoketext-container section span"
    );
    for (let i = 0; i < letters.length; i++) {
      letters[i].addEventListener("mouseover", function () {
        letters[i].classList.add("active");
        letters[i].classList.add("active" + i);
        // 恢复,用lambda表达式
        setTimeout(() => {
          let letter = document.querySelector(".active" + i);
          letter.classList.remove("active");
          letter.classList.add("show");
        }, goBackTime * 1000);
      });
    }
  }, []);
  return (
    <div className="smoketext-container">
      <section>
        <p className="smoketext">
          There are many apple trees in a garden. They’re good friends. One day
          an old tree is ill. There are many pests in the tree. Leaves of the
          tree turn yellow. The old tree feels very sad and unwell. Another tree
          sends for a doctor for him. At first, they send for a pigeon, but she
          has no idea about it. Then they send for an oriole, and she can’t
          treat the old tree well. Then they send for a woodpecker. She is a
          good doctor. She pecks a hole in the tree and eats lots of pests. At
          last the old tree becomes better and better.
        </p>
      </section>

      <div className="smoketext-code code">
        <Code {...code} />
      </div>
    </div>
  );
}

export default observer(SmokeText);
