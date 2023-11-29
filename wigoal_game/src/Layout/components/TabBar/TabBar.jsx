import React, { useState } from 'react';
import {Link, useNavigate} from "react-router-dom";

import {
    HomeOutlined,
    HeartOutlined,
} from '@ant-design/icons';

const TabBarContainer = (props) => {

    const { showDrawerMyGame } = props;

    const navigate = useNavigate();

    const onBackHome = () => {
        navigate('')
    }

    return(
        <div className="container_tab_bar">
            <div className="container_tab_bar_wrap">
                <div className="container_tab_bar_item container_tab_bar_item_active">
                    <div className="adm-badge-wrapper" onClick={onBackHome}>
                        <div className="adm-tab-bar-item-icon">
                            <HomeOutlined style={{fontSize: '24px'}}></HomeOutlined>
                        </div>
                    </div>
                    <div className="container_tab_bar_item-title" onClick={onBackHome}>Home</div>
                </div>
                <div className="container_tab_bar_item">
                    <div className="adm-badge-wrapper" onClick={showDrawerMyGame}>
                        <div className="adm-tab-bar-item-icon">
                            <HeartOutlined style={{fontSize: '24px'}}></HeartOutlined>
                        </div>
                    </div>
                    <div className="container_tab_bar_item-title" onClick={showDrawerMyGame}>My&nbsp;game</div>
                </div>
            </div>
        </div>
    )
};

export default TabBarContainer;