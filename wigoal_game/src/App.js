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
