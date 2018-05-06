import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import sidebarReducer from './store/reducers/sidebarReducer';
import loginReducer from './store/reducers/loginReducer';

const rootReducer = combineReducers({
  side: sidebarReducer,
  login: loginReducer
})

const logger = store => {
  return next => {
    return action => {
      console.log('[Middleware] Dispatching : ', action);
      const result = next(action);
      console.log('[Middleware] next state', store.getState())
      return result;
    }
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App /> 
    </Provider>
  </BrowserRouter>

, document.getElementById('root'));
registerServiceWorker();
