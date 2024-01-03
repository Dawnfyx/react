import React, {useState, useEffect, forwardRef} from 'react';
import {useNavigate} from "react-router-dom";

import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined
} from "@ant-design/icons";
import {Layout, Menu} from "antd";

import MenuContainer from "./Menu";

import './Sider.less'

const { Sider } = Layout;

const SiderContainer = (props) => {

    const {collapsed, setCollapsed, refMenu} = props;

    const [collapsedFlag, setCollapsedFlag] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        if (refMenu.current) {
            refMenu.current.addEventListener("mouseenter", (el)=>{
                // console.log('mouseenter', el)
                setCollapsedFlag(false)
            });
            refMenu.current.addEventListener("mouseleave", (el)=>{
                // console.log('mouseleave', el)
                setCollapsedFlag(true)
            });
        }
        return () => {
            if (refMenu.current) {
                refMenu.current.removeEventListener("mouseenter", (el)=>{
                    console.log('removeEventListener mouseenter', el)
                });
                refMenu.current.removeEventListener("mouseleave", (el)=>{
                    console.log('removeEventListener mouseleave', el)
                });
            }
        }
    }, [])

    return (
        <Sider
            className={collapsed ? "container_sider left_visibility" : "container_sider"}
            width={200}
            trigger={null}
            breakpoint="md"
            ref={refMenu}
            collapsible
            collapsedWidth={60}
            collapsed={collapsedFlag}
        >
            <MenuContainer collapsed={collapsed} setCollapsed={setCollapsed} collapsedFlag={collapsedFlag}></MenuContainer>
        </Sider>
    )
}

export default forwardRef(SiderContainer);