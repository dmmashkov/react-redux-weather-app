import { createStore, applyMiddleware } from 'redux';
import { weatherReducer } from '../reducers/weater';
import thunk from 'redux-thunk';

export const store = createStore(weatherReducer, applyMiddleware(thunk));