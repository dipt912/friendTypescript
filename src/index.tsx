import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'
import './index.css';
import App from './container/App/index';
import * as serviceWorker from './serviceWorker';
import { rootReducer } from './Reducers/index'
import 'tachyons';
const rootReducers = combineReducers(rootReducer)
const logger = createLogger();
const store = createStore(rootReducers, applyMiddleware(logger));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
