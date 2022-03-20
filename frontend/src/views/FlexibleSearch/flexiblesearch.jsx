import "./flexiblesearch.css";
import React, { useState } from "react";

import { observer } from "mobx-react-lite";

import Code from "../../components/code";

const code = {
  html: `<div class="search">
    <div class="icon"></div>
    <div class="input">
        <input type="text" placeholder="Search" id="mysearch">
    </div>  
    <span class="clear" onclick="document.getElementById('mysearch').value = ''"></span>     
</div>
<script type="text/javascript">
        const icon = document.querySelector('.icon');
        const search = document.querySelector('.search');
        icon.onclick=function(){
            search.classList.toggle('active')
        }
</script>`,
  css: `.search  {
    position: relative;
    width: 60px;    height: 60px;
    background-color: #fff;
    border-radius: 60px;
    transition: 0.5s;
    box-shadow: 0 0 0 5px #2573ef;
    overflow: hidden;
} 
.search.active{
    width: 360px;
}
.search .icon {
    position: absolute;
    top: 0;   left: 0;
    width: 60px;    height: 60px;
    background-color: #fff;
    border-radius: 60px;
    display: flex;    justify-content: center;    align-items: center;
    z-index: 100;
    cursor:pointer;
}
.search .icon::before {
    position: absolute;
    content: "";
    width: 15px;    height :15px;
    border-radius: 60px;
    border:3px solid #287dfc;
    transform: translate(-4px, -4px) ; 
}
.search .icon::after {
    position: absolute;
    content: "";
    width: 3px;    height :12px;
    background-color: #287dfc;
    transform: translate(6px, 6px) rotate(315deg);
}
.search .input{
    position: relative;
    width: 300px;   height: 60px;
    left: 60px;
    display: flex;    justify-content: center;    align-items: center;
}
.search .input input {
    position: absolute;
    top: 0;
    width: 100%;    height: 100%;
    border:none;    outline: none;
    font-size: 18px;
    padding: 10px 0;
}
.clear {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 15px;    height: 15px;    right: 15px;
    cursor: pointer;
    display: flex;    justify-content: center;    align-items: center;
}
.clear::before{
    position: absolute;
    content: '';
    width: 1px;    height: 15px;
    background-color: #999;
    transform: rotate(45deg);
}
.clear::after{
    position: absolute;
    content: '';
    width: 1px;    height: 15px;
    background-color: #999;
    transform: rotate(315deg); 
}`,
};

function FlexibleSearch() {
  const [active, setActive] = useState(false);
  return (
    <div className="flexiblesearch-container">
      <div className="flexiblesearch-left">
        <div className={`flexiblesearch  ${active ? "active" : ""}`}>
          <div
            className="icon"
            onClick={() => {
              setActive(!active);
            }}
          ></div>
          <div className="input">
            <input type="text" placeholder="Search" id="mysearch" />
            <span
              className="clear"
              onClick={() => {
                document.getElementById("mysearch").value = "";
              }}
            ></span>
          </div>
        </div>
      </div>
      <div className="flexiblesearch-code code">
        <Code {...code} />
      </div>
    </div>
  );
}

export default observer(FlexibleSearch);
