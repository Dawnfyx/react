import React, {useEffect, useRef, useState} from 'react';
import {useLocation, useNavigate, useParams} from 'react-router-dom';

import {Row, Col, Input, Spin} from "antd";

import {getSearchdata} from "../../api";

import './Search.less'

const {Search} = Input;

import GameThumbBox from "../../Layout/components/Content/GameThumbBox/GameThumbBox";

const SearchPage = () => {
    const [spinning, setSpinning] = useState(true);
    const [pageData, setPageData] = useState([]);
    const [resultData, setResultData] = useState([]);
    const {search} = useLocation();

    const searchRef = useRef();

    const navigate = useNavigate();

    const searchPageData = (data) => {
        getSearchdata(data).then(res => {
            setPageData(res.data.recommend);
            setResultData(res.data.result);
            setSpinning(false);
        })
    }

    const onSearch = (value, _e, info) => {
        navigate('/page/search' + '?words=' +  value)
    }

    useEffect(() => {
        searchPageData(search)
    }, [search])

    return (
        <div className="search_page">
            <Spin spinning={spinning} fullscreen />

            <div className="page_title">
                <div className="title_container"><h1>Search</h1></div>
                <div className="body_container">Use the box below to search through thousands of
                    free online games:
                </div>
            </div>

            {/*<Search*/}
            {/*    className="page_search"*/}
            {/*    placeholder="Search"*/}
            {/*    ref={searchRef}*/}
            {/*    size="large"*/}
            {/*    onSearch={onSearch}*/}
            {/*    // style={{*/}
            {/*    //     padding: '12px 14px',*/}
            {/*    //     border: '2px solid transparent',*/}
            {/*    //     backgroundColor: '#e5e6ee',*/}
            {/*    //     color: '#878a9e',*/}
            {/*    //     borderRadius: '8px',*/}
            {/*    // }}*/}
            {/*/>*/}

            <div className="page_body">
                <div className="page_item">
                    <Row gutter={[10, 15]}>
                        {
                            resultData.map((item, index) => (
                                <Col key={item.gid} xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>
                                    <GameThumbBox link={"/page/details?gid=" + item.gid} url={'http://test.ads-goal.com' + item.icon} name={item.name}></GameThumbBox>
                                </Col>
                            ))
                        }
                    </Row>
                </div>

                <div className="page_item">
                    <Row gutter={[10, 15]}>
                        {
                            pageData.map((item, index) => (
                                <Col key={item.gid} xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>
                                    <GameThumbBox key={item.gid} link={"/page/details?gid=" + item.gid} url={'http://test.ads-goal.com' + item.icon} name={item.name}></GameThumbBox>
                                </Col>
                            ))
                        }
                    </Row>
                </div>
            </div>
        </div>
    )
};

export default SearchPage;