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
        <>
            {/*<Swiper*/}
            {/*    slidesPerView={6}*/}
            {/*    spaceBetween={10}*/}
            {/*    centeredSlides={false}*/}
            {/*    slidesPerGroupSkip={5}*/}
            {/*    grabCursor={true}*/}
            {/*    keyboard={{*/}
            {/*        enabled: true,*/}
            {/*    }}*/}
            {/*    scrollbar={true}*/}
            {/*    navigation={true}*/}
            {/*    breakpoints={{*/}
            {/*        320: {*/}
            {/*            slidesPerView: 2,*/}
            {/*            spaceBetween: 10,*/}
            {/*        },*/}
            {/*        576: {*/}
            {/*            slidesPerView: 4,*/}
            {/*            spaceBetween: 10,*/}
            {/*        },*/}
            {/*        768: {*/}
            {/*            slidesPerView: 6,*/}
            {/*            spaceBetween: 10,*/}
            {/*        },*/}
            {/*        1024: {*/}
            {/*            slidesPerView: 8,*/}
            {/*            spaceBetween: 10,*/}
            {/*        }*/}
            {/*    }}*/}
            {/*    modules={[Keyboard, Scrollbar, Navigation]}*/}
            {/*    className="mySwiper"*/}
            {/*>*/}
            {/*    {*/}
            {/*        viewData.map((item, key) => (*/}
            {/*            <SwiperSlide key={key}>*/}
            {/*                <Link className="swiper-slide-link" to={"/page/details?gid=" + item.gid}>*/}
            {/*                    <img width="100%" height="100%" src={'http://test.ads-goal.com' + item.icon} />*/}
            {/*                </Link>*/}
            {/*            </SwiperSlide>*/}
            {/*        ))*/}
            {/*    }*/}
            {/*</Swiper>*/}

            <Row gutter={[10, 12]}>
                {
                    viewData.map((item, index) => (
                        <Col key={index} xs={8} sm={8} md={6} lg={4} xl={3} xxl={2}>
                            <GameThumbBox link={"/page/details?gid=" + item.gid} url={process.env.REACT_APP_BASEURL + item.icon} name={item.name} tags={item.tab}></GameThumbBox>
                        </Col>
                    ))
                }
            </Row>

        </>
    );
};

export default GameCarousel;