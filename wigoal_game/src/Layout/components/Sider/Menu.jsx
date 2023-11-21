import React from 'react';
import {useNavigate} from 'react-router-dom';

import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined
} from "@ant-design/icons";
import {Input, Menu, Space} from 'antd';

const { Search } = Input;

const MenuContainer = (props) => {
    const { collapsed, setCollapsed } = props;

    const navigate = useNavigate();

    const handleNavigate = (url) => {
        setCollapsed(true);
        navigate(url.key)
    }

    return(
        <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
                {
                    key: '',
                    icon: <UserOutlined/>,
                    label: 'nav 1',
                    onClick: handleNavigate,
                },
                {
                    key: '/page/details?gid=1',
                    icon: <VideoCameraOutlined/>,
                    label: 'nav 2',
                    onClick: handleNavigate,
                },
                {
                    key: '/page/category?type=2',
                    icon: <UploadOutlined/>,
                    label: 'nav 3',
                    onClick: handleNavigate,
                },
            ]}
        />
    )
};

export default MenuContainer;