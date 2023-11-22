import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Keyboard, Scrollbar, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';


import './GameCarousel.less'

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
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    576: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 7,
                        spaceBetween: 10,
                    }
                }}
                modules={[Keyboard, Scrollbar, Navigation]}
                className="mySwiper"
            >
                {
                    viewData.map((item, key) => (
                        <SwiperSlide key={key}>
                            <img src={'http://test.ads-goal.com' + item.icon} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
};

export default GameCarousel;