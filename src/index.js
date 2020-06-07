import App from './components/App';
import React from 'react';
import ReactDOM from 'react-dom';

import "nes.css/css/nes.min.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
