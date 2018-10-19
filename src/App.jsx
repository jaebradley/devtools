import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  MuiThemeProvider,
} from '@material-ui/core/styles';
import {
  whyDidYouUpdate,
} from 'why-did-you-update';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import theme from './theme';

import Section from './containers/Section';
import Clipboard from './containers/Clipboard';
import rootSaga from './sagas';
import reducer from './reducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

if (process.env.NODE_ENV !== 'production') {
  whyDidYouUpdate(React);
}

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <div>
        <Section />
        <Clipboard />
      </div>
    </MuiThemeProvider>
  </Provider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
