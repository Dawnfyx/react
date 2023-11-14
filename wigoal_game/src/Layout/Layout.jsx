import React, { useState } from 'react';

import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Space, Menu, Button, theme, Drawer  } from 'antd';

import Logo from "./components/Logo/logo";
import Search from "./components/Search/Search";

import "./Layout.less";
import SearchContainer from "./components/Search/Search";

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
                        <Logo collapsed={collapsed}></Logo>
                        <div className="logoText">
                            WigoalGame
                        </div>
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
                            },
                            {
                                key: '2',
                                icon: <VideoCameraOutlined />,
                                label: 'nav 2',
                            },
                            {
                                key: '3',
                                icon: <UploadOutlined />,
                                label: 'nav 3',
                            },
                        ]}
                    />
                </Sider>
                <Content>
                    Content
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