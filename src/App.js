import React from 'react';
import Routes from './routes/routes';

import './assets/styles/_basic.scss';
import { Header } from './components';
import { Provider } from 'react-redux';

function App(props) {
  const { store } = props;
  return (
    <Provider store={store}>
      <Header />
      <Routes />
    </Provider>
  );
}

export default App;
