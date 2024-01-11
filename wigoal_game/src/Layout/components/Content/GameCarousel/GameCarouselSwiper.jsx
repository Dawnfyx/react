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
import GameThumbBox from "../GameThumbBox/GameThumbBox";
import * as swiper_config from "./swiper-breakpoint";

const GameCarousel = (props) => {

    const { viewData } = props;

    return (
        <>

            <Swiper
                slidesPerView={6}
                spaceBetween={10}
                centeredSlides={false}
                slidesPerGroupSkip={5}
                grabCursor={true}
                keyboard={{
                    enabled: true,
                }}
                scrollbar={true}
                navigation={true}
                breakpoints={swiper_config.BREAK_POINTS}
                modules={[Keyboard, Scrollbar, Navigation]}
                className="mySwiper"
            >
                {
                    viewData.map((item, key) => (
                        <SwiperSlide key={key}>
                            {/*<Link className="swiper-slide-link" to={"/page/details?gid=" + item.gid}>*/}
                            {/*    <img width="100%" height="100%" src={'http://test.ads-goal.com' + item.icon} />*/}
                            {/*</Link>*/}
                            <GameThumbBox link={"/page/details?gid=" + item.gid} url={process.env.REACT_APP_BASEURL + item.icon} name={item.name} tags={item.tab}></GameThumbBox>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </>
    );
};

export default GameCarousel;