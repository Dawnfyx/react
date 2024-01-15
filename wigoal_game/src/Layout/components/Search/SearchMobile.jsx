import React, {useState, useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

import {Input, Space} from 'antd';

import "./Search.less"

const {Search} = Input;

const SearchMobileContainer = (props) => {

    const {searchRef} = props;

    const [refresh, setRefresh] = useState(true);

    const location = useLocation();

    const navigate = useNavigate();

    const onSearch = (value, _e, info) => {
        navigate('/page/search' + '?words=' + value)
    }

    const onPressEnter = (_e) => {
        let keycode = _e.keyCode
        if (keycode == "13" && searchRef.current.value != "") {
            navigate("/page/search" + "?words=" + _e.target.value.trim())
        }
    }

    useEffect(() =>{
        if(location.pathname !== '/page/search'){
            setRefresh(false)
        }
        setTimeout(() => setRefresh(true), 100)
    }, [location])

    return (
        <div className="search_mobile_box">
            {
                refresh
                    ? <Search
                        placeholder="Search"
                        enterButton
                        ref={searchRef}
                        onPressEnter={onPressEnter}
                        onSearch={onSearch}
                        style={{
                            backgroundColor: '#28293D',
                            borderColor: '#28293D',
                            borderRadius: '120px',
                            overflow: 'hidden',
                            verticalAlign: 'initial',
                        }}
                    />
                    : ''
            }
        </div>
    )
};

export default SearchMobileContainer;