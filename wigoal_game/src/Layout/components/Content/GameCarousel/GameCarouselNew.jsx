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
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    576: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 6,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 8,
                        spaceBetween: 10,
                    }
                }}
                modules={[Keyboard, Scrollbar, Navigation]}
                className="mySwiper"
            >
                {
                    handleViewData(5).map((items, keys) => (
                        keys%2 == 0
                            ? <SwiperSlide key={keys}>
                                <Link className="swiper-slide-link" to={"/page/details?gid=" + items.gid}>
                                    <img width="100%" height="100%" src={'http://test.ads-goal.com' + items.icon} />
                                </Link>
                            </SwiperSlide>
                            : <SwiperSlide key={keys}>
                                <div className="swiper-collection">
                                    {
                                        items.map((item, key) => (
                                            <Link key={key} className="swiper-slide-link" to={"/page/details?gid=" + item.gid}>
                                                <img width="100%" height="100%" src={'http://test.ads-goal.com' + item.icon} />
                                            </Link>
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