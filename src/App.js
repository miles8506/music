import React from 'react';

import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'
import routes from './router';

import MSHeader from './components/header';
import MSFooter from './components/footer';

function App() {
  return (
    <HashRouter>
      <MSHeader />
      {renderRoutes(routes)}
      <MSFooter />
    </HashRouter>
  );
}

export default App;
