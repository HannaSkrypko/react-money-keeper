import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import './main.css';
import App from './App';

import accountReducer from './store/reducers/account';
import transferReducer from './store/reducers/transfer';


const logger = store => {
    return next => {
        return action => {
            const result = next(action);
            return result;
        }
    }
}

const rootReducer = combineReducers({
    account: accountReducer, 
    transfer: transferReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));