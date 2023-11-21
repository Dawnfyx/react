import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {
    SearchOutlined,
} from '@ant-design/icons';
import {Input, Space} from 'antd';
import "./Search.less"

const {Search} = Input;

const SearchMobileContainer = (props) => {

    const {collapsed} = props;

    const navigate = useNavigate();

    const onSearch = (value, _e, info) => {
        console.log(info?.source, value);
        navigate('details')
    }

    return (
        <div className="search_mobile_box">
            <Input addonBefore={<SearchOutlined/>} placeholder="Search" onPressEnter={onSearch}
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