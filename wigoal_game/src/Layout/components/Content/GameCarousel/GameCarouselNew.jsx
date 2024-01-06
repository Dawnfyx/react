import React, {useEffect, useState, useRef} from 'react';
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

    const swiperRef = useRef();
    const [mousemoveFlag, setMousemoveFlag] = useState(false);

    const handleTouchMove = () => {
        // swiperLinkRef.current.addEventListener("mouseenter", (el)=>{
        //     console.log('mouseenter', el)
        //     setMousemoveFlag(true)
        // });
        // swiperLinkRef.current.addEventListener("mouseleave", (el)=>{
        //     console.log('mouseleave', el)
        //     setMousemoveFlag(false)
        // });
        console.log('sssss')
    }

    return (
        <>

            <Swiper
                ref={swiperRef}
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
                    viewData.map((items, keys) => (
                        <SwiperSlide key={keys}>
                            <Link className="swiper-slide-link" to={"/page/details?gid=" + items.gid}>
                                <img width="100%" height="100%" src={'http://test.ads-goal.com' + items.icon}  />
                                {
                                    mousemoveFlag
                                    ? <>
                                        <div className="hoveredContainer">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 251 150" fill="none"
                                                 style={{width: '100%'}}>
                                                <path d="M0 0L125.5 16.3983L251 0V43H0V0Z" fill="#8668FF"></path>
                                                <path d="M0 26L125.5 42.7797L251 26V70H0V26Z" fill="#7755FF"></path>
                                                <path d="M0 53L125.5 69.3983L251 53V96H0V53Z" fill="#6842FF"></path>
                                                <path d="M0 79L125.5 95.7797L251 79V123H0V79Z" fill="#5E3BE6"></path>
                                                <path d="M0 107L125.5 123.398L251 107V150H0V107Z" fill="#5335CC"></path>
                                            </svg>
                                            <div className="buttonContainer">
                                                <img src={'http://test.ads-goal.com' + items.icon} alt="Holey.io Battle Royale" />
                                                <span>{items.name}</span>
                                                <button className="MuiButton-root" type="button">Play</button>
                                            </div>
                                        </div>

                                        <div className="hoverContainer">
                                            <img src={'http://test.ads-goal.com' + items.icon} alt=""/>
                                        </div>
                                    </>
                                    : ''
                                }

                            </Link>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </>
    );
};

export default GameCarousel;