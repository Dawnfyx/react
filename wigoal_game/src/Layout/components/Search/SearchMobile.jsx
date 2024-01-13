import React, {useState, useRef, useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

import {
    SearchOutlined,
} from '@ant-design/icons';
import {Input, Space} from 'antd';

import "./Search.less"

const {Search} = Input;

const SearchMobileContainer = (props) => {

    const {collapsed} = props;

    const location = useLocation();

    const {search} = useLocation()

    const navigate = useNavigate();

    const searchRef = useRef(null);

    const onSearch = (value, _e, info) => {
        console.log(searchRef.current)
        // navigate('/page/search' + '?words=' + searchRef.current.input.value)
    }

    // 清除 useRef 的值
    const clearRefValue = () => {
        searchRef.current.value = '';
    };

    useEffect(() =>{
        if (searchRef.current) {
            debugger
        }
        if(location.pathname !== '/page/search'){
            clearRefValue();
        }
    }, [location])

    return (
        <div className="search_mobile_box">
            <Search
                placeholder="Search"
                ref={searchRef}
                onPressEnter={onSearch}
                onSearch={onSearch}
                style={{
                    backgroundColor: '#28293D',
                    borderColor: '#28293D',
                    borderRadius: '120px',
                    overflow: 'hidden',
                    verticalAlign: 'initial',
                }}
            />

            {/*<Input placeholder="Search" ref={searchRef} addonAfter={<SearchOutlined/>} onPressEnter={onSearch} onSearch={onSearch}*/}
            {/*       style={{*/}
            {/*           backgroundColor: '#28293D',*/}
            {/*           borderColor: '#28293D',*/}
            {/*           borderRadius: '120px',*/}
            {/*           overflow: 'hidden',*/}
            {/*           verticalAlign: 'initial',*/}
            {/*       }}*/}
            {/*/>*/}
        </div>
    )
};

export default SearchMobileContainer;