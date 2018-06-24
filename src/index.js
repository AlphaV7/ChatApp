import React from 'react';
import ReactDOM from 'react-dom';
import './views/css/index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

// Store
import store from './store/index';

// Views
import { App, Home } from './views/Components/index';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Route exact path='/' component={Home}/>
      </App>
    </Router>
  </Provider>
  , document.getElementById('root'));

registerServiceWorker(); // eslint-disable-line no-undef
