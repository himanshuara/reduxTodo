import { createStore } from 'redux';
import { todoApp } from '../reducers/reducer';

var defaultState = {
  todo: {
    items: []
  }
};
var store = createStore(todoApp, defaultState);

module.exports = {store:store}