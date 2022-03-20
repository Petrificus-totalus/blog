import React from "react";
import ThemeSelect from "../components/themeSelect";
import ToHome from "../components/toHome";
import { Outlet, useLocation } from "react-router-dom";

import "./index.css";

const noThemeSelectPaths = ["/detail/Moonlight"]; // 不加载 ThemeSelect 组件的那些路径

export default function Index() {
  const location = useLocation();
  return (
    <div style={{ position: "relative" }} className="content_main">
      {!noThemeSelectPaths.includes(location.pathname) && (
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
      <Outlet />
    </div>
  );
}
