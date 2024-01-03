import React, {useState, useEffect, forwardRef} from 'react';
import {useNavigate} from "react-router-dom";

import {
    CloseOutlined,
    MenuOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from "@ant-design/icons";
import {Button, Layout, Menu} from "antd";

import MenuContainer from "./Menu";

const { Sider } = Layout;

const SiderMobileContainer = (props) => {

    const {collapsed, setCollapsed} = props;

    return (
        <Sider
            className={collapsed ? "container_sider left_visibility" : "container_sider"}
            width={200}
            trigger={null}
            breakpoint="md"
            collapsible
            collapsedWidth={60}
            collapsed={false}
        >
            <Button
                className="header_mobile_menu_btn"
                type="text"
                size="large"
                icon={<CloseOutlined style={{fontSize: '24px'}} />}
                onClick={() => setCollapsed(!collapsed)}
            />
            <MenuContainer collapsed={collapsed} setCollapsed={setCollapsed} collapsedFlag={false}></MenuContainer>
            <div className="ant-drawer" onClick={() => setCollapsed(!collapsed)}>
                <div className="ant-drawer-mask"></div>
            </div>
        </Sider>
    )
}

export default SiderMobileContainer;