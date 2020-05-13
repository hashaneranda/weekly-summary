/**
 * Author : Hashan Eranda Jayalath
 * Copyrights: Hashan Eranda Jayalath
 * Version:
 * Description: Redux store configuration
 * Date: 12-06-2020
 */

import { createStore, compose } from "redux";

import rootReducer from "../Redux/RootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  return {
    ...createStore(rootReducer, composeEnhancers()),
  };
};

export default configureStore;
