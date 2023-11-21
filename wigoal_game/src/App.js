import React, { useState, useEffect } from 'react';
import RouteConfig from "./router";

import { ConfigProvider} from "antd";

import './App.css';

import {MobileOrTabletLog} from "./utils/mixin";

function App() {

    useEffect(() =>{
        MobileOrTabletLog();
    }, [])

  return (
      <ConfigProvider
          theme={{
              token: {
                  colorPrimary: '#8668FF',
                  colorPrimaryHover: '#A48EFF',
                  colorText: '#FFFFFF',
                  colorTextPlaceholder: '#AAADBE',
                  colorLink: '#FFFFFF',
                  // colorBgContainer: 'red',
                  // colorBgLayout: 'red',
              },
              components: {
                  Layout: {
                      bodyBg: '#0C0D14', //test
                      headerBg: '#212233',
                      siderBg: '#0C0D14',
                  },
                  Card: {
                      colorBgContainer: '#1D1E25',
                      colorBorderSecondary: '#1F2030',
                      colorText: '#373952',
                      colorTextHeading: '#373952',
                      colorTextDescription: '#373952',
                  },
                  Menu: {
                      darkItemBg: '#0C0D14',
                      darkItemHoverBg: '#0C0D14',
                      darkItemSelectedBg: '#0C0D14',
                      darkItemSelectedColor: '#8668FF',
                      activeBarWidth: 6,
                      activeBarBorderWidth: 6,
                  },
                  // Input: {
                  //     activeBg: '373952',
                  //     activeBorderColor: '373952',
                  //     hoverBg: '373952',
                  //     hoverBorderColor: '373952',
                  // },
              }
          }}
      >
        <div className="App">
          <RouteConfig></RouteConfig>
        </div>
      </ConfigProvider>
  );
}

export default App;
