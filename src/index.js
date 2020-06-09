import App from './components/App';
import LocalStorageService from './services/LocalStorageService';
import React from 'react';
import ReactDOM from 'react-dom';

import "nes.css/css/nes.min.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import './index.scss';

const services = Object.freeze({
   localStorageService: new LocalStorageService()
});

ReactDOM.render(
    <React.StrictMode>
        <App services={services} />
    </React.StrictMode>,
    document.getElementById('root')
);
