# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# vanilla-tilt

`npm i vanilla-tilt`

```html
<div class="ele" data-tilt></div>
```

```javascript
import VanillaTilt from "vanilla-tilt";

VanillaTilt.init(document.querySelectorAll(".ele"), {
  max: 25,
  speed: 300,
});
```

# mobx

`npm i mobx`
`npm i mobx-react-lite` ???????????????????????????

# antd

`npm i antd@3`

## ????????????

antd ?????? 3.x

1. `yarn add react-app-rewired customize-cra babel-plugin-import`

2. ?????? `config-overrides.js` ??? `package.json` ??????

   ```javascript
   // config-overrides.js
   const { override, fixBabelImports } = require("customize-cra");
   module.exports = override(
     fixBabelImports("import", {
       libraryName: "antd",
       libraryDirectory: "es",
       style: "css",
     })
   );
   ```

3. `package.json` ?????????????????? `"start": "react-app-rewired start"`

4. ????????? `import { Button} from 'antd'`

# FlipCard

```jsx
// ???????????????????????????????????????????????????????????????
<FlipCard>
  <div className={`box shadow${index + 1}`}>CSS Code</div>
  <Code css={item} showLineNumbers={true} />
</FlipCard>
// ???FlipCard???props.children[0] ??? [1] ??????
```

# swiper.js

?????? History ????????? ??????????????? HashRouter
