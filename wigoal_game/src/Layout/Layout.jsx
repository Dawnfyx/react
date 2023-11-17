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
import SiderContainer from "./components/Sider/Sider";

const {Header, Content} = Layout;

const LayoutContainer = () => {
    // const {
    //     token: {
    //         colorBgContainer
    //     },
    // } = theme.useToken();

    const [collapsed, setCollapsed] = useState(false);

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const refMenu = useRef();

    return (
        <Layout className="container">
            <Header className="container_header">
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