import React, {useState, useEffect} from 'react';

import RouteConfig from "./router";

import './App.css';

import {MobileOrTabletLog} from "./utils/mixin";

function App() {

  useEffect(() => {
    MobileOrTabletLog();
  }, [])

  return (
    <div className="App">
      <RouteConfig></RouteConfig>
    </div>
  );
}

export default App;
