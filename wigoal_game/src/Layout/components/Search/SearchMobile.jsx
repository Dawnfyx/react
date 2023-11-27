import React, {useState, useRef} from 'react';
import {useNavigate} from 'react-router-dom';

import {
    SearchOutlined,
} from '@ant-design/icons';
import {Input, Space} from 'antd';

import "./Search.less"

const {Search} = Input;

const SearchMobileContainer = (props) => {

    const {collapsed} = props;

    const searchRef = useRef();

    const navigate = useNavigate();

    const onSearch = (value, _e, info) => {
        navigate('/page/search' + '?words=' + searchRef.current.input.value)
    }

    return (
        <div className="search_mobile_box">
            <Input placeholder="Search" ref={searchRef} addonBefore={<SearchOutlined/>} onPressEnter={onSearch}
                   style={{
                       backgroundColor: '#28293D',
                       borderColor: '#28293D',
                       borderRadius: '120px',
                       overflow: 'hidden',
                       verticalAlign: 'initial',
                   }}
            />
        </div>
    )
};

export default SearchMobileContainer;