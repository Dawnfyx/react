import React from 'react';
import {Link} from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Keyboard, Scrollbar, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';


import './GameCarousel.less'
import {Col, Row} from "antd";
import GameThumbBox from "../GameThumbBox/GameThumbBox";

const GameCarousel = (props) => {

    const { viewData } = props;

    return (
        <div className="carousel_align">
            <Row gutter={[10, 12]} justify={"start"} style={{ width: "180px"}}>
                {
                    viewData.map((item, index) => (
                        <Col key={index} xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                            <GameThumbBox link={"/page/details?gid=" + item.gid} url={process.env.REACT_APP_BASEURL + item.icon} name={item.name} tags={item.tab}></GameThumbBox>
                        </Col>
                    ))
                }
            </Row>

        </div>
    );
};

export default GameCarousel;