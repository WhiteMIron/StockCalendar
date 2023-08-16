import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import axios from 'axios';

import App from './layouts/App';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'http://localhost:3095' : 'http://localhost:3095';

render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.querySelector('#app'),
);
