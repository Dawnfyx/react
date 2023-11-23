import React, {useState, useEffect, forwardRef} from 'react';
import {useNavigate} from "react-router-dom";

import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined
} from "@ant-design/icons";
import {Layout, Menu} from "antd";

import MenuContainer from "./Menu";

const { Sider } = Layout;

const SiderContainer = (props, ref) => {

    const {collapsed, setCollapsed} = props;

    const [collapsedFlag, setCollapsedFlag] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        if (ref.current) {
            ref.current.addEventListener("mouseenter", (el)=>{
                // console.log('mouseenter', el)
                setCollapsedFlag(false)
            });
            ref.current.addEventListener("mouseleave", (el)=>{
                // console.log('mouseleave', el)
                setCollapsedFlag(true)
            });
        }
        return () => {
            if (ref.current) {
                ref.current.removeEventListener("mouseenter", (el)=>{
                    console.log('removeEventListener mouseenter', el)
                });
                ref.current.removeEventListener("mouseleave", (el)=>{
                    console.log('removeEventListener mouseleave', el)
                });
            }
        }
    }, [])

    return (
        <Sider
            className={collapsed ? "container_sider left-visibility" : "container_sider"}
            width={200}
            trigger={null}
            breakpoint="md"
            ref={ref}
            collapsible
            collapsedWidth={60}
            collapsed={collapsedFlag}
        >
            <MenuContainer collapsed={collapsed} setCollapsed={setCollapsed}></MenuContainer>
        </Sider>
    )
}

export default forwardRef(SiderContainer);