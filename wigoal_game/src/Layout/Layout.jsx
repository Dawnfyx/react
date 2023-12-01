import React, {useState, useEffect, useRef} from 'react';
import {Outlet} from 'react-router-dom';

import {
    HeartOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    MenuOutlined,
    UserOutlined,
} from '@ant-design/icons';
import {Layout, Space, Menu, Button, theme, Drawer, Avatar} from 'antd';

import "./Layout.less";

import LogoContainer from "./components/Logo/logo";
import SearchContainer from "./components/Search/Search";
import SearchMobileContainer from "./components/Search/SearchMobile";
import SiderContainer from "./components/Sider/Sider";
import SiderMobileContainer from "./components/Sider/SiderMobile";
import TabBarContainer from "./components/TabBar/TabBar";
import DrawerContainer from "./components/Drawer/Drawer";
import DramerMyGameContainer from "./components/Drawer/DrawerMyGame";

const {Header, Content} = Layout;

const LayoutContainer = () => {
    // const {
    //     token: {
    //         colorBgContainer
    //     },
    // } = theme.useToken();

    const [collapsed, setCollapsed] = useState(false);
    const [mobileFlag, setMobileFlag] = useState(false);
    const [tabsActive, setTabsActive] = useState('1');

    const [open, setOpen] = useState(false);
    const [openMyGame, setOpenMyGame] = useState(false);

    const showDrawer = (value, e) => {
        console.log(value, e)
        setTabsActive(value);
        setOpen(true);
    };

    const showDrawerMyGame = () => {
        setOpenMyGame(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    const onCloseMyGame = () => {
        setOpenMyGame(false);
    };

    const refMenu = useRef();

    const isMobileOrTablet = () =>{
        // 获取 User-Agent 字符串
        const userAgent = window.navigator.userAgent;

        // 获取屏幕宽度
        const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        // 判断是否是手机
        const isMobile = /Mobile/i.test(userAgent) && screenWidth < 768;

        return isMobile;
    }

    useEffect(() =>{
        if(isMobileOrTablet()){
            setMobileFlag(true);
            setCollapsed(true);
        } else {
            setMobileFlag(false);
            setCollapsed(false);
        }
    }, [])

    return (
        <Layout className={mobileFlag ? 'container mobile': 'container computer'}>
            {
                mobileFlag
                    ? <SiderMobileContainer collapsed={collapsed} setCollapsed={setCollapsed}></SiderMobileContainer>
                    : <Header className="container_header">
                        <Space style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            height: 'inherit'
                        }}>
                            <Button
                                className="container_button"
                                type="text"
                                icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                                onClick={() => setCollapsed(!collapsed)}
                            />
                            <LogoContainer collapsed={collapsed}></LogoContainer>
                        </Space>
                        <Space>
                            <SearchContainer></SearchContainer>
                        </Space>
                        <Space>
                            <Button type="link" icon={<HeartOutlined/>} onClick={showDrawer.bind(this, "3")}>My&nbsp;game</Button>
                            <Button type="primary" shape="round" onClick={showDrawer.bind(this, "1")}>
                                Log&nbsp;in
                            </Button>
                            <Button shape="circle" icon={<UserOutlined/>} onClick={showDrawer.bind(this, "2")}
                                    style={{
                                        backgroundColor: 'transparent'
                                    }}
                            />
                        </Space>
                    </Header>
            }
            <Layout>
                {
                    mobileFlag
                        ? <Header className="container_header">
                            <Space style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                width: '100%',
                            }}>
                                <Button
                                    className="container_button"
                                    type="text"
                                    icon={<MenuOutlined />}
                                    onClick={() => setCollapsed(!collapsed)}
                                    style={{
                                        zIndex: collapsed? '1': '-1'
                                    }}
                                />
                                <LogoContainer collapsed={collapsed}></LogoContainer>

                                <Button type="primary" shape="round" onClick={showDrawer.bind(this, "1")}>
                                    Log&nbsp;in
                                </Button>
                                <Button shape="circle" icon={<UserOutlined/>} onClick={showDrawer.bind(this, "2")}
                                        style={{
                                            backgroundColor:'transparent',
                                        }}
                                />
                            </Space>
                            <SearchMobileContainer ></SearchMobileContainer>
                        </Header>
                        : <SiderContainer collapsed={collapsed} setCollapsed={setCollapsed} ref={refMenu}></SiderContainer>
                }
                <Content className="container_content" style={{padding: 10}}>
                    <Outlet></Outlet>
                </Content>
                {
                    mobileFlag
                        ? <TabBarContainer showDrawerMyGame={showDrawerMyGame}></TabBarContainer>
                        : ''
                }
            </Layout>
            <DrawerContainer openSwitch={open} onClose={onClose} tabsActive={tabsActive} setTabsActive={setTabsActive}></DrawerContainer>
            <DramerMyGameContainer openSwitch={openMyGame} onClose={onCloseMyGame}></DramerMyGameContainer>
        </Layout>
    );
};

export default LayoutContainer;