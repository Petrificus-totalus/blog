import React from "react";
import ReactDOM from "react-dom";

import { HashRouter } from "react-router-dom";
import App from "./routes"; // 所有路由配置文件

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
