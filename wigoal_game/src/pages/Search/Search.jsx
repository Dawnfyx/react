import React, {useEffect, useRef, useState} from 'react';
import {useLocation, useNavigate, useParams} from 'react-router-dom';

import {Row, Col} from "antd";

import {getSearchdata} from "../../api";

import SearchContainer from "../../Layout/components/Search/Search";

import './Search.less'

import {starsScore} from "../../utils/mixin";
import GameThumbBox from "../../Layout/components/Content/GameThumbBox/GameThumbBox";

const Search = () => {
    const [pageData, setPageData] = useState([]);
    const [resultData, setResultData] = useState([]);
    const {search} = useLocation();

    const searchPageData = (data) => {
        getSearchdata(data).then(res => {
            setPageData(res.data.recommend);
            setResultData(res.data.result);
        })
    }

    useEffect(() => {
        searchPageData(search)
    }, [search])

    return (
        <div className="search_page">
            <div className="page_title">
                <div className="title_container"><h1>Search</h1></div>
                <div className="body_container">Use the box below to search through thousands of
                    free online games:
                </div>
            </div>

            <SearchContainer></SearchContainer>

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

export default Search;