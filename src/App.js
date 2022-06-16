import React from 'react';

import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'
import routes from './router';
import { Provider } from 'react-redux'
import store from './store'

import MSHeader from './components/header';
import MSFooter from './components/footer';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <MSHeader />
        {renderRoutes(routes)}
        <MSFooter />
      </HashRouter>
    </Provider>
  );
}

export default App;
