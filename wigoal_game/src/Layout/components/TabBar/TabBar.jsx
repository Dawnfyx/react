import React, { useState, useEffect } from 'react';
import {useLocation} from "react-router";
import {Link, useNavigate} from "react-router-dom";

import {
    HomeOutlined,
    HeartOutlined,
} from '@ant-design/icons';

const TabBarContainer = (props) => {

    const { openMyGame, setOpenMyGame } = props;

    const [tabbarActive, setTabbarActive] = useState(1);

    const navigate = useNavigate();
    const {search} = useLocation()


    const onHandleMyGame = () => {
        setTabbarActive(2)
        setOpenMyGame(!openMyGame)
        if(!openMyGame){
            setTabbarActive(2)
        } else {
            setTabbarActive(0)
        }
    }
    const onBackHome = () => {
        setTabbarActive(1)
        setOpenMyGame(false)
        navigate('')
    }

    useEffect( () =>{
        if(search == '') {
            setTabbarActive(1)
        } else {
            setTabbarActive(0)
        }
    }, [search])

    return(
        <div className="container_tab_bar">
            <div className="container_tab_bar_wrap">
                <div className={tabbarActive == 1 ? 'container_tab_bar_item container_tab_bar_item_active' : 'container_tab_bar_item'}>
                    <div className="adm-badge-wrapper" onClick={onBackHome}>
                        <div className="adm-tab-bar-item-icon">
                            <HomeOutlined style={{fontSize: '24px'}}></HomeOutlined>
                        </div>
                    </div>
                    <div className="container_tab_bar_item-title" onClick={onBackHome}>Home</div>
                </div>
                <div className={tabbarActive == 2 ? 'container_tab_bar_item container_tab_bar_item_active' : 'container_tab_bar_item'}>
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