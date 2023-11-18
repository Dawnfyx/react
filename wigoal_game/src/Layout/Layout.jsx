import React, {useState, useEffect, useRef} from 'react';
import {Outlet} from 'react-router-dom';

import {
    HeartOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import {Layout, Space, Menu, Button, theme, Drawer, Avatar} from 'antd';
import "./Layout.less";

import LogoContainer from "./components/Logo/logo";
import SearchContainer from "./components/Search/Search";
import SearchMobileContainer from "./components/Search/SearchMobile";
import SiderContainer from "./components/Sider/Sider";

const {Header, Content} = Layout;

const LayoutContainer = () => {
    // const {
    //     token: {
    //         colorBgContainer
    //     },
    // } = theme.useToken();

    const [collapsed, setCollapsed] = useState(false);
    const [mobileFlag, setMobileFlag] = useState(false);

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
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
        }
    }, [])

    return (
        <Layout className={mobileFlag ? 'container mobile': 'container'}>
            {
                mobileFlag
                    ? <Header className="container_header">
                        <Space style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <Button
                                className="container_button"
                                type="text"
                                icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                                onClick={() => setCollapsed(!collapsed)}
                            />
                            <LogoContainer collapsed={collapsed}></LogoContainer>

                            <Button type="primary" shape="round" onClick={showDrawer}>
                                Log&nbsp;in
                            </Button>
                            <Button shape="circle" icon={<UserOutlined/>} onClick={showDrawer}
                                    style={{
                                        backgroundColor: 'transparent'
                                    }}
                            />
                        </Space>
                        <SearchMobileContainer></SearchMobileContainer>
                    </Header>
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
                            <Button type="link" icon={<HeartOutlined/>} onClick={showDrawer}>My&nbsp;game</Button>
                            <Button type="primary" shape="round" onClick={showDrawer}>
                                Log&nbsp;in
                            </Button>
                            <Button shape="circle" icon={<UserOutlined/>} onClick={showDrawer}
                                    style={{
                                        backgroundColor: 'transparent'
                                    }}
                            />
                        </Space>
                    </Header>
            }
            <Layout>
                <SiderContainer collapsed={collapsed} ref={refMenu}></SiderContainer>
                <Content style={{padding: 16}}>
                    <Outlet></Outlet>
                </Content>
            </Layout>
            <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </Layout>
    );
};

export default LayoutContainer;