import React, { useState } from 'react';
import { Input, Space } from 'antd';

const { Search } = Input;

const SearchContainer = (props) => {
    const { collapsed } = props;

    const onSearch = () => {

    }

    return(
        <Space>
            <Search placeholder="input search text" onSearch={onSearch} enterButton />
        </Space>
    )
};

export default SearchContainer;