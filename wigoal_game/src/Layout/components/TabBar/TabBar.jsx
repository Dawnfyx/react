import React, { useState } from 'react';
import {Link} from "react-router-dom";

import {
    HomeOutlined,
    HeartOutlined,
} from '@ant-design/icons';

const TabBarContainer = (props) => {

    const { collapsed } = props;

    return(
        <div className="container_tab_bar">
            <div className="container_tab_bar_wrap">
                <div className="container_tab_bar_item container_tab_bar_item_active">
                    <div className="adm-badge-wrapper">
                        <div className="adm-tab-bar-item-icon">
                            <HomeOutlined style={{fontSize: '24px'}}></HomeOutlined>
                        </div>
                    </div>
                    <div className="container_tab_bar_item-title">消息</div>
                </div>
                <div className="container_tab_bar_item">
                    <div className="adm-badge-wrapper">
                        <div className="adm-tab-bar-item-icon">
                            <HeartOutlined style={{fontSize: '24px'}}></HeartOutlined>
                        </div>
                    </div>
                    <div className="container_tab_bar_item-title">消息</div>
                </div>
            </div>
        </div>
    )
};

export default TabBarContainer;