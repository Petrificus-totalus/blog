import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { observer } from "mobx-react-lite";
import store from "./store";

import { useNavigate } from "react-router-dom";

import "swiper/css";
import "./Home.css";
import { slides } from "./constant";
import "swiper/css/effect-coverflow";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import "swiper/css/grid";

import {
  Mousewheel,
  EffectCoverflow,
  Scrollbar,
  Pagination,
  History,
  Keyboard,
  Grid,
} from "swiper";
import VanillaTilt from "vanilla-tilt";

function Home() {
  const navigate = useNavigate();
  const [currentSwiperIndex, setCurrentSwiperIndex] = useState(0);
  useEffect(() => {
    // slide 3D 效果
    VanillaTilt.init(document.querySelectorAll(".slide"), {
      max: 10,
      speed: 300,
    });
  });
  const detail = (name) => {
    navigate(`/detail/${name}`);
  };

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <header
        style={{ position: "absolute", top: "0", left: "0", zIndex: "10" }}
      >
        <button
          onClick={() => {
            store.changeCollapse();
          }}
        >
          toggle
        </button>
      </header>
      {store.collapse && (
        <section className="collapse-section">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            mousewheel={{
              invert: false,
            }}
            history={{
              key: "slide",
            }}
            pagination={{
              clickable: true,
            }}
            scrollbar={{ draggable: true }}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[
              Keyboard,
              Pagination,
              EffectCoverflow,
              Scrollbar,
              Mousewheel,
              History,
            ]}
            spaceBetween={20}
            keyboard={{
              enabled: true,
            }}
            slidesPerView={3}
            onKeyPress={(swiper, keyCode) => {
              // 默认有左右了，这两个是上下键
              if (keyCode === 40) {
                swiper.slideNext();
              } else if (keyCode === 38) {
                swiper.slidePrev();
              }
            }}
            onSlideChange={(swiper) => {
              // 把刚刚的暂停
              swiper.el.querySelectorAll("video")[currentSwiperIndex].pause();
              // 获得当前的index
              let index = swiper.activeIndex;
              setCurrentSwiperIndex(index);
              // 播放当前的video
              swiper.el.querySelectorAll("video")[index].play();
            }}
            onSwiper={(swiper) => {
              swiper.el.querySelectorAll("video")[swiper.activeIndex].play();
            }}
          >
            {slides.map((item) => {
              return (
                <SwiperSlide
                  data-history={item.name}
                  key={item.name}
                  className="slide"
                  onClick={() => detail(item.name)}
                >
                  <div className="clip">
                    <video
                      poster={item.preloadImg}
                      src={item.videoSrc}
                      type="video/mp4"
                      width="100%"
                      loop
                      muted
                    ></video>
                  </div>
                  <div className="content">
                    <p>{item.desc}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </section>
      )}
      {!store.collapse && (
        <section className="grid-section">
          <Swiper
            slidesPerView={3}
            grid={{
              rows: 2,
            }}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            mousewheel={{
              invert: false,
            }}
            modules={[Grid, Pagination, Mousewheel]}
          >
            {slides.map((item) => {
              return (
                <SwiperSlide
                  key={item.name}
                  className="slide"
                  onClick={() => detail(item.name)}
                  onMouseOver={(e) => {
                    if (e.target.play) {
                      // video
                      e.target.play();
                    } else if (e.target.nodeName === "P") {
                      // p
                      e.target.parentNode.parentNode
                        .querySelector("video")
                        .play();
                    } else {
                      // section
                      e.target.querySelector("video").play();
                    }
                  }}
                  onMouseOut={(e) => {
                    if (e.target.pause) {
                      e.target.pause();
                    } else if (e.target.nodeName === "P") {
                      e.target.parentNode.parentNode
                        .querySelector("video")
                        .pause();
                    } else {
                      e.target.querySelector("video").pause();
                    }
                  }}
                >
                  <div className="clip">
                    <video
                      poster={item.preloadImg}
                      src={item.videoSrc}
                      type="video/mp4"
                      width="100%"
                      loop
                      muted
                    ></video>
                  </div>
                  <div className="content">
                    <p>{item.desc}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </section>
      )}
    </div>
  );
}
export default observer(Home);
