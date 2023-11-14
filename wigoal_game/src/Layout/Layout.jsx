import React, { useState } from 'react';
import {Link, useNavigate, Outlet} from 'react-router-dom';

import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import {Layout, Space, Menu, Button, theme, Drawer, Avatar} from 'antd';
import "./Layout.less";

import Logo from "./components/Logo/logo";
import Search from "./components/Search/Search";


const { Header, Sider, Content } = Layout;


const LayoutContainer = () => {
    const {
        token: {
            // colorBgContainer
        },
    } = theme.useToken();

    const [collapsed, setCollapsed] = useState(true);

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const navigate = useNavigate();

    return (
        <Layout className="container">
            <Header className="container_header">
                <Space style={{
                    display: 'flex',
                    flexDirection: 'row',
                    paddingLeft: '8px',
                    alignItems: 'center',
                    height: 'inherit'
                }}>
                    <Button
                        className="container_button"
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                    />
                    <div className="container_logo">
                        <Link to=''>
                            <Logo collapsed={collapsed}></Logo>
                            <div className="logoText">
                                WigoalGame
                            </div>
                        </Link>
                    </div>
                </Space>
                <Space>
                    <Search></Search>
                </Space>
                <Space>
                    <Button type="primary" onClick={showDrawer}>
                        Open
                    </Button>
                </Space>
            </Header>
            <Layout>
                <Sider
                    width={200}
                    collapsedWidth={60}
                    trigger={null}
                    collapsible
                    collapsed={collapsed}
                    breakpoint="md"
                >
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={[
                            {
                                key: '1',
                                icon: <UserOutlined />,
                                label: 'nav 1',
                                onClick: () => navigate(''),
                            },
                            {
                                key: '2',
                                icon: <VideoCameraOutlined />,
                                label: 'nav 2',
                                onClick: () => navigate('/category'),
                            },
                            {
                                key: '3',
                                icon: <UploadOutlined />,
                                label: 'nav 3',
                                onClick: () => navigate('/category'),
                            },
                        ]}
                    />
                </Sider>
                <Content style={{ padding: 16}}>
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