import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { Input, Space } from 'antd';

const { Search } = Input;

const SearchContainer = (props) => {
    const { collapsed } = props;

    const navigate = useNavigate();

    const onSearch = (value, _e, info) => {
        console.log(info?.source, value);
        navigate('details')
    }

    return(
        <Space>
            <Search placeholder="input search text" onSearch={onSearch} enterButton />
        </Space>
    )
};

export default SearchContainer;