import React, {useEffect, useRef, useState} from 'react';
import {useLocation, useNavigate, useParams} from 'react-router-dom';

import {Row, Col} from "antd";

import {getSearchdata} from "../../api";

import SearchContainer from "../../Layout/components/Search/Search";

import './Search.less'

import {starsScore} from "../../utils/mixin";

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
            <SearchContainer></SearchContainer>
            i is home Search
            <Row gutter={[10, 15]}>
                <Col xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>
                    {
                        resultData.map((item, index) => (
                            <div key={item.gid} className='newgame_content'>
                                <img src={'http://test.ads-goal.com' + item.icon} alt="" />
                                <div className='new_con'>
                                    <h4>{item.name}</h4>
                                    <p className='gametype'>{starsScore(item.score)} {item.score}</p>
                                    <p className='playnum'>{item.count / 1000}k+</p>
                                </div>
                                <div className='play'>PLAY GAME</div>
                            </div>
                        ))
                    }
                </Col>
            </Row>
            <Row gutter={[10, 15]}>
                <Col xs={12} sm={8} md={6} lg={4} xl={3} xxl={2}>
                    {
                        pageData.map((item, index) => (
                            <div key={item.gid} className='newgame_content' >
                                <img src={'http://test.ads-goal.com' + item.icon} alt="" />
                                <div className='new_con'>
                                    <h4>{item.name}</h4>
                                    <p className='gametype'>{starsScore(item.score)} {item.score}</p>
                                    <p className='playnum'>{item.count / 1000}k+</p>
                                </div>
                                <div className='play'>PLAY GAME</div>
                            </div>
                        ))
                    }
                </Col>
            </Row>
        </div>
    )
};

export default Search;