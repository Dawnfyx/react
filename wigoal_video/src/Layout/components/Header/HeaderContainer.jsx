import React from 'react';

import {Layout, Space, Menu, Button, theme, Drawer, Avatar} from 'antd';

import LogoContainer from "../Logo/logo";

const HeaderContainer = (props) => {
    // const {  } = props;
    return(
        <div className="container_header">
            <LogoContainer></LogoContainer>
            <Space>
                building
            </Space>
        </div>
    )
}

export default HeaderContainer;