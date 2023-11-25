import React, { useState, useRef } from 'react';
import {useNavigate} from 'react-router-dom';

import { Input, Space } from 'antd';

import "./Search.less"

const { Search } = Input;

const SearchContainer = (props) => {
    const { collapsed } = props;

    const searchRef = useRef()

    const navigate = useNavigate();

    const onSearch = (value, _e, info) => {
        navigate('/page/search' + '?words=' +  value)
    }

    return(
        <div className="search_box">
            <Search placeholder="Search" ref={searchRef} onSearch={onSearch} enterButton />
        </div>
    )
};

export default SearchContainer;