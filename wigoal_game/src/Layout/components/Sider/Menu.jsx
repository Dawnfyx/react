import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {
    HomeOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined
} from "@ant-design/icons";
import {Input, Menu, Space} from 'antd';

const { Search } = Input;

const MenuContainer = (props) => {
    const { collapsed, setCollapsed } = props;

    const [menuItems, setMenuItems] = useState([])

    const navigate = useNavigate();

    const handleNavigate = (url) => {
        setCollapsed(true);
        navigate(url.key)
    }

    // const Menuicon = [<UserOutlined/>, <VideoCameraOutlined/>, <UploadOutlined/>, <VideoCameraOutlined/>, <UploadOutlined/>]

    const SiderPageData = () => {
        let temp = [{
            key: "",
            icon: <HomeOutlined/>,
            label: "Home",
            onClick: handleNavigate,
        }];
        JSON.parse(window.localStorage.getItem('category')).map((item, index) => {
            temp.push({
                key: "/page/category?type=" + item.type,
                icon: <UserOutlined/>,
                label: item.name,
                onClick: handleNavigate,
            })
        });

        setMenuItems(temp);
    }

    useEffect(() => {
        SiderPageData();
    }, []);

    return(
        <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['']}
            items={menuItems}
        />
    )
};

export default MenuContainer;