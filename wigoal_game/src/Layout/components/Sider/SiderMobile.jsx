import React, {useState, useEffect, forwardRef} from 'react';
import {useNavigate} from "react-router-dom";

import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined
} from "@ant-design/icons";
import {Layout, Menu} from "antd";

const { Sider } = Layout;

const SiderMobileContainer = (props) => {

    const {collapsed} = props;


    const navigate = useNavigate();

    return (
        <Sider
            className={collapsed ? "container_sider left-visibility" : "container_sider"}
            width={200}
            trigger={null}
            breakpoint="md"
            collapsible
            collapsedWidth={60}
            collapsed={false}
        >
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={[
                    {
                        key: '1',
                        icon: <UserOutlined/>,
                        label: 'nav 1',
                        onClick: () => navigate(''),
                    },
                    {
                        key: '2',
                        icon: <VideoCameraOutlined/>,
                        label: 'nav 2',
                        onClick: () => navigate('/category'),
                    },
                    {
                        key: '3',
                        icon: <UploadOutlined/>,
                        label: 'nav 3',
                        onClick: () => navigate('/category'),
                    },
                ]}
            />
        </Sider>
    )
}

export default SiderMobileContainer;