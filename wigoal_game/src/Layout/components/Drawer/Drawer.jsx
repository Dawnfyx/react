import React, {useState, useRef} from 'react';
import {useNavigate} from 'react-router-dom';

import {SearchOutlined} from "@ant-design/icons";
import {Button, Drawer, Tabs} from "antd";
import {ifUserLoginStatus} from "../../../utils/mixin";
import './Drawer.less'

import Login from "./Login"
import Signup from "./Signup"
import SignupAfterPage from "./SignupAfter"

const DrawerContainer = (props) => {

    const {openSwitch, onClose, tabsActive, setTabsActive} = props;

    const onChange = (key) => {
        console.log(key);
    };

    const onTabClick = (key) => {
        setTabsActive(key)
    };

    return (
        <Drawer className="container_drawer black"
                title={tabsActive == '2' ? ifUserLoginStatus() ? '' : 'Create your WigoalGames account for free!' : ''}
                placement="right"
                size={'large'}
                onClose={onClose}
                open={openSwitch}>
            {
                tabsActive == '2'
                    ?   <>
                        {
                            ifUserLoginStatus()
                                ? <SignupAfterPage onClose={onClose}/>
                                : <>
                                    <svg preserveAspectRatio="none" height="170" width="100%" viewBox="0 0 375 170" fill="none"
                                         xmlns="http://www.w3.org/2000/svg"
                                         style={{
                                             position: 'absolute',
                                             zIndex: '-1',
                                             left: '0',
                                             top: '0',
                                         }}
                                    >
                                        <path d="M0 0H375V125.5L295.199 162.826C286.526 166.883 277.007 168.805 267.439 168.432L0 158V0Z"
                                              fill="#6842FF"></path>
                                    </svg>
                                    <Tabs
                                        defaultActiveKey={['1']}
                                        activeKey={tabsActive}
                                        items={[
                                            {
                                                key: '2',
                                                // label: <Button shape="round" size="large" style={{ color: '#2f3148',}}>Sign up</Button>,
                                                label:'',
                                                children: <Signup/>,
                                            },
                                            {
                                                key: '1',
                                                label: <Button shape="round" size="large"
                                                               style={{
                                                                   backgroundColor: 'transparent',
                                                                   borderColor: '#d9d9d9',
                                                                   color: '#d9d9d9',
                                                               }}
                                                >Log in</Button>,
                                                children: '',
                                            },
                                        ]}
                                        onTabClick={onTabClick}
                                        onChange={onChange}
                                    />
                                </>
                        }
                        </>
                    :   <Login onClose={onClose}/>
            }

        </Drawer>
    )
};

export default DrawerContainer;