import React, { useState } from 'react';
import {Link} from "react-router-dom";

import {
    MenuFoldOutlined,
    MenuUnfoldOutlined
} from "@ant-design/icons";
import {Button, Layout, Space} from "antd";
import Logo from "../Logo/logo";
import Search from "../Search/Search";

const { Header } = Layout;

const HeaderContainer = (props) => {
    const { collapsed } = props;
    return(
        <div>

        </div>
    )
};

export default HeaderContainer;