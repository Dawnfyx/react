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

    const handleMouseEnter = (event) => {
        try{
            event.target.nextSibling.style.cssText = 'display: block;'
        } catch (e) {
            console.log(event.target, 'handleMouseEnter');
            return;
        }
    }
    const handleMouseLeave = (event) => {
        // console.log(event.target.classList[0], 'handleMouseLeave')

        if(event.target.classList[0] == 'buttonContainer_img'){
            event.target.parentElement.parentElement.parentElement.style.cssText = 'display: none;'
        } else if(event.target.classList[0] == 'hoverContainer_img'){
            event.target.parentElement.parentElement.style.cssText = 'display: none;'
        } else if(event.target.classList[0] == 'swiper-slide'){
            event.target.children[0].children[1].style.cssText = 'display: none;'
        } else {
            if(event.target.tagName == 'svg'){
                event.target.parentElement.parentElement.style.cssText = 'display: none;'
            } else if(event.target.tagName == 'path'){
                event.target.parentElement.parentElement.parentElement.style.cssText = 'display: none;'
            } else if(event.target.tagName == 'IMG'){
                return;
            } else{
                console.log(event.target, 'handleMouseLeave')
                return;
            }
        }

    }
    const handleToDetails = (link) => {
        window.location = window.location.origin + link;
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
                        <SwiperSlide key={keys}
                                     onMouseEnter={(event) => handleMouseEnter(event)}
                                     onMouseLeave={(event) => handleMouseLeave(event)}
                        >
                            <Link className="swiper-slide-link" to={"/page/details?gid=" + items.gid}>
                                <img width="100%" height="100%" src={'http://test.ads-goal.com' + items.icon}  />

                                <div style={{
                                    display: 'none'
                                }}>
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
                                            <img className="buttonContainer_img" src={'http://test.ads-goal.com' + items.icon} alt={items.name} />
                                            <span>{items.name}</span>
                                            <button className="MuiButton-root" type="button" onClick={(event) => handleToDetails("/page/details?gid=" + items.gid)}>Play</button>
                                        </div>
                                    </div>

                                    <div className="hoverContainer">
                                        <img className="hoverContainer_img" src={'http://test.ads-goal.com' + items.icon} alt=""/>
                                    </div>
                                </div>

                            </Link>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </>
    );
};

export default GameCarousel;