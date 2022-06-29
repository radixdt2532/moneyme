import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from './CombineReducer'; // root reducers

const store = createStore(rootReducer, applyMiddleware(thunk));

export {store};
