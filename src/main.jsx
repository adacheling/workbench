/* eslint-env browser */
import React    from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './main.scss';

import App from './components/App';

// mount our App at #container
render(
  <Router>
    <App />
  </Router>,
  document.querySelector('#container'),
);
