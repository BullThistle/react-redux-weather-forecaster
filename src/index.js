import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducers from "./reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
