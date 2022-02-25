import React from "react";
import ThemeSelect from "../components/themeSelect";
import ToHome from "../components/toHome";

import Cube from "../views/Cube/cube";
import NeonText from "../views/NeonText/neontext";
import GlassyCard from "../views/GlassyCard/glassycard";
import EmojiRate from "../views/EmojiRate/emojirate";
import FlexibleSearch from "../views/FlexibleSearch/flexiblesearch";
import Moonlight from "../views/Moonlight/moonlight";
import Shadows from "../views/Shadows/shadows";
import SmokeText from "../views/SmokeText/smoketext";

import { Route, Switch } from "react-router-dom";

const noThemeSelectPaths = ["/detail/Moonlight"]; // 不加载 ThemeSelect 组件的那些路径

export default function index(props) {
  return (
    <div style={{ position: "relative" }}>
      {!noThemeSelectPaths.includes(props.location.pathname) && (
        <div
          style={{
            width: "100%",
            position: "absolute",
            top: "0",
            left: "0",
            display: "flex",
            justifyContent: "space-between",
            zIndex: 100000,
          }}
        >
          <ToHome />
          <ThemeSelect />
        </div>
      )}
      <Switch>
        <Route path="/detail/Cube" component={Cube}></Route>
        <Route path="/detail/NeonText" component={NeonText}></Route>
        <Route path="/detail/GlassyCard" component={GlassyCard}></Route>
        <Route path="/detail/EmojiRate" component={EmojiRate}></Route>
        <Route path="/detail/FlexibleSearch" component={FlexibleSearch}></Route>
        <Route path="/detail/Moonlight" component={Moonlight}></Route>
        <Route path="/detail/Shadows" component={Shadows}></Route>
        <Route path="/detail/SmokeText" component={SmokeText}></Route>
      </Switch>
    </div>
  );
}
