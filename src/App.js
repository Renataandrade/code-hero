import React from 'react';
import Routes from './routes/routes';

import './assets/styles/_basic.scss';
import { Header } from './components';

function App() {
  return (<>
    <Header />
    <Routes />
  </>);
}

export default App;
