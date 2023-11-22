import React, { useState, useEffect } from 'react';

import { Col, Row } from 'antd';

import { getHomedata } from '../../api';

import GameCarousel from "../../Layout/components/Content/GameCarousel/GameCarousel";
import GameThumbBox from "../../Layout/components/Content/GameThumbBox/GameThumbBox";

import './Home.less'

const HomeContainer = () => {
    const [loading, setLoading] = useState(true);
    const [gamespopu, setGamespopu] = useState([])
    const [gameshot, setGameshot] = useState([])
    const [gameslist, setGameslist] = useState([])
    const [gamescate, setGamescate] = useState([])

    const homePageData = () => {
        getHomedata().then(res => {
            setGamespopu(res.data.populargames);
            setGameshot(res.data.hotgames);
            setGameslist(res.data.newgames);
            setGamescate(res.data.category);
        })
    }

    useEffect(() => {
        homePageData();
        setTimeout(()=>{
            setLoading(!loading);
        }, 2000)

    }, []);

    return(
        <div className="home_page">
            {/*<Row gutter={[8, 12]}>*/}
            {/*    {*/}
            {/*        gamespopu.map((item, key) => (*/}
            {/*            <Col key={key} xs={12} sm={8} md={6} lg={4}>*/}
            {/*                <GameThumbBox loading={loading} item={item}></GameThumbBox>*/}
            {/*            </Col>*/}
            {/*        ))*/}
            {/*    }*/}
            {/*</Row>*/}

            <GameCarousel viewData={gamespopu}></GameCarousel>

            <div className="title_container">
                <h2 className="carousel_title">
                    <span>HotGames Originals</span>
                </h2>
                <a className="carousel_title_link" href="">View more</a>
            </div>
            <GameCarousel viewData={gameshot}></GameCarousel>

            <div className="title_container">
                <h2 className="carousel_title">
                    <span>NewGames Originals</span>
                </h2>
                <a className="carousel_title_link" href="">View more</a>
            </div>
            <GameCarousel viewData={gameslist}></GameCarousel>

        </div>
    )
};

export default HomeContainer;