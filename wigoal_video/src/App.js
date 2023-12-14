import React, {useState, useEffect} from 'react';
import { Provider } from 'react-redux';
import storeReduex from "./store/redux";

import RouteConfig from "./router";

import './App.css';

import {MobileOrTabletLog} from "./utils/mixin";

function App() {

  useEffect(() => {
    MobileOrTabletLog();
  }, [])

  return (
      <Provider store={storeReduex}>
        <div className="App">
          <RouteConfig></RouteConfig>
        </div>
      </Provider>
  );
}

export default App;
