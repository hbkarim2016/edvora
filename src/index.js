import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import Store from './content/redux/Store';
import {HashRouter} from "react-router-dom";

ReactDOM.render(
  <HashRouter>
    <Provider store={Store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById('root')
);
