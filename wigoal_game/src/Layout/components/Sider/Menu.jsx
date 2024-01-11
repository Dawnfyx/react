import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {
    HomeOutlined,
    ThunderboltOutlined,
    SketchOutlined,
    CrownOutlined,
    CoffeeOutlined,
    CalculatorOutlined,
    TrophyOutlined,
    SmileOutlined,
} from "@ant-design/icons";
import {Input, Menu, Space} from 'antd';


import AboutContainer from "../About/About";

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
    const SiderPageData = async () => {
        let Menuicon = [
            <CalculatorOutlined key='CalculatorOutlined'/>,
            <SmileOutlined key='SmileOutlined' />,
            <TrophyOutlined key='TrophyOutlined' />,
            <SketchOutlined  key='SketchOutlined'/>,
            <CoffeeOutlined  key='CoffeeOutlined'/>,
            <CrownOutlined  key='CrownOutlined'/>,
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
            let category = await getHomedata().then(res => {
                return res.data.category;
                // res.data.category.map((item, index) => {
                //     temp.push({
                //         key: "/page/category?type=" + item.type,
                //         icon: Menuicon[index],
                //         label: item.name,
                //         onClick: handleNavigate,
                //     })
                // });
            })
            category.map((item, index) => {
                temp.push({
                    key: "/page/category?type=" + item.type,
                    icon: Menuicon[index],
                    label: item.name,
                    onClick: handleNavigate,
                })
            });
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
            <AboutContainer collapsedFlag={collapsedFlag}></AboutContainer>
        </div>
    )
};

export default MenuContainer;