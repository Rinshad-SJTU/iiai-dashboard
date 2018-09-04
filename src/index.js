import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

// const path = require.context('./processed_images', true);
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();