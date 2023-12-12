import React, {useState, useEffect} from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './store/RootReducer';
const store = createStore(rootReducer);

import RouteConfig from "./router";

import './App.css';

import {MobileOrTabletLog} from "./utils/mixin";

function App() {

  useEffect(() => {
    MobileOrTabletLog();
  }, [])

  return (
      <Provider store={store}>
        <div className="App">
          <RouteConfig></RouteConfig>
        </div>
      </Provider>
  );
}

export default App;
