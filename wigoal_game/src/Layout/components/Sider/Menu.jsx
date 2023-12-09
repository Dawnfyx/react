import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {
    HomeOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    TrophyOutlined,
    ThunderboltOutlined,
    InstagramOutlined,
    SketchOutlined,
    BlockOutlined,
} from "@ant-design/icons";
import {Input, Menu, Space} from 'antd';


import AboutContainer from "../About/About";

import "./Menu.less"
import {getHomedata} from "../../../api";

const { Search } = Input;

const MenuContainer = (props) => {
    const { collapsed, setCollapsed, collapsedFlag} = props;

    const [menuItems, setMenuItems] = useState([])

    const navigate = useNavigate();

    const handleNavigate = (url) => {
        setCollapsed(true);
        navigate(url.key)
    }

    // const iconMap = (index) => {
    //     let Menuicon = [<UserOutlined key='UserOutlined'/>, <VideoCameraOutlined/>, <UploadOutlined/>, <VideoCameraOutlined/>, <UploadOutlined/>];
    //     return (
    //         Menuicon[index]
    //     )
    // }
    const SiderPageData = () => {
        let Menuicon = [
            <BlockOutlined  key='BlockOutlined'/>,
            <UserOutlined key='UserOutlined' />,
            <VideoCameraOutlined key='VideoCameraOutlined' />,
            <SketchOutlined  key='SketchOutlined'/>,
            <InstagramOutlined  key='InstagramOutlined'/>,
            <UploadOutlined  key='UploadOutlined'/>,
            <TrophyOutlined  key='TrophyOutlined'/>,
            <ThunderboltOutlined  key='ThunderboltOutlined'/>];
        let temp = [{
            key: "",
            icon: <HomeOutlined/>,
            label: "Home",
            onClick: handleNavigate,
        }];
        if(window.localStorage.getItem('category')){
            JSON.parse(window.localStorage.getItem('category')).map((item, index) => {
                temp.push({
                    key: "/page/category?type=" + item.type,
                    icon: Menuicon[index],
                    label: item.name,
                    onClick: handleNavigate,
                })
            });
        } else {
            getHomedata().then(res => {
                res.data.category.map((item, index) => {
                    temp.push({
                        key: "/page/category?type=" + item.type,
                        icon: Menuicon[index],
                        label: item.name,
                        onClick: handleNavigate,
                    })
                });
            })
        }

        setMenuItems(temp);
    }

    useEffect(() => {
        SiderPageData();
    }, []);

    return(
        <div
            className="sider_menu"
            style={{
                // display: 'flex',
                // flexDirection: 'column',
                // justifyContent: 'space-between',
                // paddingBottom: '150px',
                position: 'relative',
                height: 'inherit',
            }}
        >
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['']}
                items={menuItems}
            />
            {
                collapsedFlag
                    ? ''
                    : <AboutContainer></AboutContainer>
            }
        </div>
    )
};

export default MenuContainer;