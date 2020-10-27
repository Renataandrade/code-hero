import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import ApiServices from './services/ApiServices';
import store from './store';

ApiServices.setup();

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);