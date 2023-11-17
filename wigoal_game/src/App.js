import React, { useState } from 'react';
import RouteConfig from "./router";

import { ConfigProvider} from "antd";

import './App.css';

function App() {
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
                      // popupBg: '#000000',
                      darkDangerItemActiveBg: '#000000',
                      activeBarWidth: 6,
                      itemBg: '#0C0D14',
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
