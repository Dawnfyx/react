import React, {useState, useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

import {Input, Space} from 'antd';

import "./Search.less"

const {Search} = Input;

const SearchContainer = (props) => {

    const {searchRef} = props;

    const [refresh, setRefresh] = useState(true);

    const location = useLocation();

    const navigate = useNavigate();

    const onSearch = (value, _e, info) => {
        navigate('/page/search' + '?words=' + value)
    }

    useEffect(() =>{
        if(location.pathname !== '/page/search'){
            setRefresh(false)
        }
        setTimeout(() => setRefresh(true), 100)
    }, [location])

    return (
        <div className="search_box">
            {
                refresh
                    ? <Search placeholder="Search" ref={searchRef} onSearch={onSearch} enterButton/>
                    : ''
            }
        </div>
    )
};

export default SearchContainer;