import 'react-hot-loader/patch';
import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import RootContainer from './components/RootContainer';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
}

render(RootContainer);

if (module.hot) {
  module.hot.accept('./components/RootContainer', () => { render(RootContainer) });
}




/* think this is the webpack 1 way
import React from 'react';
import ReactDOM from 'react-dom';
import 'react-hot-loader/patch';
import { AppContainer } from 'react-hot-loader';

import RootContainer from './components/RootContainer'

const render = Component => {
  REACT.render(
    <AppContainer>
      <Cmoponent />
    </AppContainer>,
    document.getElementById('root')
  );
}

render(RootContainer);

if (module.hot) {
  module.hot.accept('./app/components/RootContainer.js', () => {
    const NextRootContainer = require('./app/components/RootContainer.js').default;
    render(NextRootContainer);
  }
}
*/
