import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { Input, Space } from 'antd';
import "./Search.less"

const { Search } = Input;

const SearchContainer = (props) => {
    const { collapsed } = props;

    const navigate = useNavigate();

    const onSearch = (value, _e, info) => {
        console.log(info?.source, value);
        navigate('/page/details')
    }

    return(
        <div className="search_box">
            <Search placeholder="Search" onSearch={onSearch} enterButton
            />
        </div>
    )
};

export default SearchContainer;