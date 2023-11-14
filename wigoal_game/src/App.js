import RouteConfig from "./router";

import { ConfigProvider} from "antd";

import './App.css';

function App() {
  return (
      <ConfigProvider
          theme={{
              token: {
                  colorPrimary: '#A48EFF',
                  colorText: '#ffffff',
              },
              components: {
                  Layout: {
                      bodyBg: '#0C0D14', //test
                  },
                  Card: {
                      colorBgContainer: '#1d1e25',
                      colorBorderSecondary: '#1f2030',
                      colorText: '#373952',
                      colorTextHeading: '#373952',
                      colorTextDescription: '#373952',
                  }
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
