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

    const handleViewData = (num) => {
        let temp = [];
        let spiltIndex = 0;
        for (let i = 0; i < viewData.length; i++) {
            if (i % num == 0) {
                temp.push(viewData[i]);
            } else {
                if (i % num == 1) {
                    spiltIndex += 2;
                    temp.push([viewData[i]]);
                } else {
                    temp[spiltIndex-1].push(viewData[i]);
                }
            }
        }
        return temp
    }

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
                    handleViewData(5).map((items, keys) => (
                        keys%2 == 0
                            ? <SwiperSlide key={keys}>
                                {/*<Link className="swiper-slide-link" to={"/page/details?gid=" + items.gid}>*/}
                                {/*    <img width="100%" height="100%" src={'http://test.ads-goal.com' + items.icon} />*/}
                                {/*</Link>*/}
                                <GameThumbBox link={"/page/details?gid=" + items.gid} url={process.env.REACT_APP_BASEURL + items.icon} name={items.name}></GameThumbBox>
                            </SwiperSlide>
                            : <SwiperSlide key={keys}>
                                <div className="swiper-collection">
                                    {
                                        items.map((item, key) => (
                                            // <Link key={key} className="swiper-slide-link" to={"/page/details?gid=" + item.gid}>
                                            //     <img width="100%" height="100%" src={'http://test.ads-goal.com' + item.icon} />
                                            // </Link>
                                            <GameThumbBox key={key} link={"/page/details?gid=" + item.gid} url={process.env.REACT_APP_BASEURL + item.icon} name={item.name}></GameThumbBox>
                                        ))
                                    }
                                </div>
                            </SwiperSlide>

                    ))
                }
            </Swiper>

        </>
    );
};

export default GameCarousel;