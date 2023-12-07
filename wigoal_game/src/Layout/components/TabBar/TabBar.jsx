import React, { useState } from 'react';
import {Link, useNavigate} from "react-router-dom";

import {
    HomeOutlined,
    HeartOutlined,
} from '@ant-design/icons';

const TabBarContainer = (props) => {

    const { openMyGame, setOpenMyGame } = props;

    const [tabbarActive, setTabbarActive] = useState(true);
    const navigate = useNavigate();

    const onHandleMyGame = () => {
        setTabbarActive(false)
        setOpenMyGame(!openMyGame)
    }
    const onBackHome = () => {
        setTabbarActive(true)
        setOpenMyGame(false)
        navigate('')
    }

    return(
        <div className="container_tab_bar">
            <div className="container_tab_bar_wrap">
                <div className={tabbarActive ? 'container_tab_bar_item container_tab_bar_item_active' : 'container_tab_bar_item'}>
                    <div className="adm-badge-wrapper" onClick={onBackHome}>
                        <div className="adm-tab-bar-item-icon">
                            <HomeOutlined style={{fontSize: '24px'}}></HomeOutlined>
                        </div>
                    </div>
                    <div className="container_tab_bar_item-title" onClick={onBackHome}>Home</div>
                </div>
                <div className={tabbarActive ? 'container_tab_bar_item' : 'container_tab_bar_item container_tab_bar_item_active'}>
                    <div className="adm-badge-wrapper" onClick={onHandleMyGame}>
                        <div className="adm-tab-bar-item-icon">
                            <HeartOutlined style={{fontSize: '24px'}}></HeartOutlined>
                        </div>
                    </div>
                    <div className="container_tab_bar_item-title" onClick={onHandleMyGame}>My&nbsp;games</div>
                </div>
            </div>
        </div>
    )
};

export default TabBarContainer;