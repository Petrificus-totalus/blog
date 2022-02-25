import { makeAutoObservable } from "mobx";
import { gradientDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

class AppStore {
  constructor() {
    makeAutoObservable(this);
  }

  collapse = true;
  themeStyle = gradientDark;
  themeName = "gradientDark";

  changeThemeStyle = (theme, name) => {
    this.themeStyle = theme;
    this.themeName = name;
  };
  changeCollapse = () => {
    this.collapse = !this.collapse;
  };
}

const store = new AppStore();
export default store;
