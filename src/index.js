import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './css/styles.css';
import * as serviceWorker from './serviceWorker';
import Quantity from './components/Quantity';

ReactDOM.render(
  <React.StrictMode>
    <Quantity />
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
