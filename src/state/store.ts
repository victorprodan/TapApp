import {combineReducers, createStore} from 'redux';
import {reducers} from '.';

export const store = createStore(combineReducers(reducers));
