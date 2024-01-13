import React, {useState, useRef, useEffect} from 'react';
import {useLocation} from "react-router";
import {useNavigate} from 'react-router-dom';

import {
    SearchOutlined,
} from '@ant-design/icons';
import {Input, Space} from 'antd';

import "./Search.less"

const {Search} = Input;

const SearchMobileContainer = (props) => {

    const {collapsed} = props;

    const {search} = useLocation()

    const searchRef = useRef();

    const navigate = useNavigate();

    const onSearch = (value, _e, info) => {
        navigate('/page/search' + '?words=' + searchRef.current.input.value)
    }

    useEffect(() =>{
        searchRef.current.input.value = ''
    }, [search])

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