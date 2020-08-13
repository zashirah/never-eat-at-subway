import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'

// font-family: 'Allura', cursive;
// font-family: 'Amatic SC', cursive;
// font-family: 'Calligraffitti', cursive;
// font-family: 'Damion', cursive;
// font-family: 'Dancing Script', cursive;
// font-family: 'Homemade Apple', cursive;
// font-family: 'Mr Dafoe', cursive;
// font-family: 'Mrs Saint Delafield', cursive;
// font-family: 'Orbitron', sans-serif;
// font-family: 'Satisfy', cursive;
// font-family: 'Tangerine', cursive;

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
