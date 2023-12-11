import React, {useState, useEffect} from 'react';
// import {Provider} from "react-redux";

// import store from "./store"
import RouteConfig from "./router";

import {ConfigProvider} from "antd";

import './App.css';

import {MobileOrTabletLog} from "./utils/mixin";

function App() {

    const handleUserInfo = () => {
        const random12DigitNumber = Math.floor(100000000000 + Math.random() * 900000000000);
        let temp = {
            "provider": "facebook",
            "data": {
                "userID": random12DigitNumber,
                "expiresIn": 5170499,
                "id": random12DigitNumber,
                "first_name": "H5",
                "last_name": "Games",
                "name": "H5 Games",
                "name_format": "{H5} {Games}",
                "short_name": "H5",
            }
        }
        window.localStorage.setItem("userInfo", JSON.stringify(temp));
    }
    handleUserInfo();

    useEffect(() => {
        MobileOrTabletLog();
    }, [])

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#6842ff',
                    colorPrimaryHover: '#A48EFF',
                    colorText: '#FFFFFF',
                    colorTextPlaceholder: '#AAADBE',
                    colorLink: '#FFFFFF',
                    fontFamily: 'Nunito,Arial,"Helvetica Neue",Helvetica,sans-serif',
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
                        collapsedIconSize: 20,
                        iconSize: 20,
                    },
                    Modal: {
                        contentBg: '#212233',
                    },
                    Message: {
                        contentBg: '#212233',
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
            {/*<Provider store={store}>*/}
                <div className="App">
                    <RouteConfig></RouteConfig>
                </div>
            {/*</Provider>*/}
        </ConfigProvider>
    );
}

export default App;
