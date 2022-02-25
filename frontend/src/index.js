import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import Detail from "./views";

import { HashRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Switch>
        <Route path="/detail" component={Detail}></Route>
        <Route path="/" exact component={Home}></Route>
      </Switch>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
