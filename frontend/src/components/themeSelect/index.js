import { Menu, Dropdown, Icon } from "antd";

import React from "react";
import themes from "./themes";

import store from "../../store";
import { observer } from "mobx-react-lite";

function ThemeSelect() {
  const change = (theme) => {
    import(`react-syntax-highlighter/dist/esm/styles/hljs/${theme.key}`).then(
      (module) => {
        // changeThemeStyle(vscode, 'vscode')
        store.changeThemeStyle(module.default, theme.key);
      }
    );
  };
  const menu = (
    <Menu>
      {themes.map((item) => (
        <Menu.Item
          key={item}
          onClick={(theme) => {
            change(theme);
          }}
        >
          {item}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div>
      <Dropdown
        overlay={menu}
        overlayStyle={{ height: "100vh", overflow: "scroll" }}
      >
        <span
          className="ant-dropdown-link"
          style={{ padding: "5px", border: "1px solid #000", color: "#fff" }}
        >
          <Icon type="align-left" />
          <span className="text" style={{ margin: "0 7px" }}>
            {store.themeName}
          </span>
          <Icon type="down" />
        </span>
      </Dropdown>
    </div>
  );
}
export default observer(ThemeSelect);
