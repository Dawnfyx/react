import React, { useState, useEffect } from 'react';

import { Col, Row } from 'antd';

import { getHomedata } from '../../api';

import GameCarousel from "../../Layout/components/Content/GameCarousel/GameCarousel";
import GameThumbBox from "../../Layout/components/Content/GameThumbBox/GameThumbBox";

import './Home.less'

const HomeContainer = (props) => {
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
            window.localStorage.setItem("category", JSON.stringify(res.data.category))
            setLoading(!loading);
        })
    }

    useEffect(() => {
        homePageData();
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

            <GameCarousel viewData={gamespopu}
                  style={{
                      minHeight: '110px'
                  }}
            ></GameCarousel>

            <div className="Game_container_item"
                 style={{
                     minHeight: '110px'
                 }}
            >
                <div className="title_container">
                    <h2 className="carousel_title">
                        <span>HotGames</span>
                    </h2>
                    <a className="carousel_title_link" href="">View more</a>
                </div>
                <GameCarousel viewData={gameshot}></GameCarousel>
            </div>

            <div className="Game_container_item"
                 style={{
                     minHeight: '110px'
                 }}
            >
                <div className="title_container">
                    <h2 className="carousel_title">
                        <span>NewGames</span>
                    </h2>
                    <a className="carousel_title_link" href="">View more</a>
                </div>
                <GameCarousel viewData={gameslist}></GameCarousel>
            </div>

        </div>
    )
};

export default HomeContainer;