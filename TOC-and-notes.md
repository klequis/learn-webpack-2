# Project TOC and Notes

## /01
Just enough to get react to build with nothing rendered

### Packages
#### Dev
babel-core babel-loader babel-preset-es2015 babel-preset-react webpack webpack-dev-server
#### Prod
react react-dom

## /02
Page now loads /Hello.jsx
- build/index.html updated to script app.js
- added devServer.contentBaseBuild so that static content will be served from /build

## /03
- Changed component structure to
  - Hello/
    - index.js
    - styls.js
- Added styles to /Hello
  - backgroundColor
  - color

## /04

**Changing <Hello /> to <RootContainer />**

Implement hot-module ...
Following guide: SurviveJS
### Adding Modules
### Dev
- react-hot-loader@next --save

### Changes
#### .babelrc
````javascript
{
  "plugins": {"?", "?", "react-hot-loader"}
}
````
#### webpack.config.js
````javascript
module.exports {
  entry: {
    app: env === 'production' ? appDir : ['react-hot-loader/patch', appDir],
  },
  ...
  devServer: {
    hot: true, // add this
    contentBase: 'build',
  }
}
````

#### app/index.js
````javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
````
**becomes**
````javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import { AppContainer } from 'react-hot-loader';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
````
