import React, {useState, useEffect} from 'react';

import {Col, Row, Spin} from 'antd';

import {getHomedata} from '../../api';

import GameCarousel from "../../Layout/components/Content/GameCarousel/GameCarousel";
import GameThumbBox from "../../Layout/components/Content/GameThumbBox/GameThumbBox";

import './Home.less'

// import {useDispatch, useSelector} from "react-redux";
// import {decrement, increment} from "../../store/features/counterSlice";

const HomePage = (props) => {
    const [spinning, setSpinning] = useState(true);
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
            setSpinning(false);
            setLoading(!loading);
        })
    }


    // const dispatch = useDispatch();
    // const countval = useSelector((state) => state.counter.value);

    useEffect(() => {
        homePageData();
    }, []);

    return (
        <div className="home_page">
            <Spin spinning={spinning} fullscreen />
            {/*<div>*/}
            {/*    <button*/}
            {/*        aria-label="Increment value"*/}
            {/*        onClick={() => dispatch(increment())}*/}
            {/*    >*/}
            {/*        Increment*/}
            {/*    </button>*/}
            {/*    {countval}*/}
            {/*    <button*/}
            {/*        aria-label="Decrement value"*/}
            {/*        onClick={() => dispatch(decrement())}*/}
            {/*    >*/}
            {/*        Decrement*/}
            {/*    </button>*/}
            {/*</div>*/}


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
                    {/*<a className="carousel_title_link" href="">View more</a>*/}
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
                    {/*<a className="carousel_title_link" href="">View more</a>*/}
                </div>
                <GameCarousel viewData={gameslist}></GameCarousel>
            </div>

        </div>
    )
};

export default HomePage;