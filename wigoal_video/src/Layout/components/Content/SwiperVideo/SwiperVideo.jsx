import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import './SwiperVideo.less'

const SwiperVideo = (props) => {
    const viewData = Array.from({ length: 1000 }).map(
        (el, index) => `Slide ${index + 1}`
    );

    return (
        <>
            <Swiper
                direction={'vertical'}
                pagination={{
                    clickable: true
                }}
                modules={[Pagination]}
                className="mySwiiper"
            >
                {/*{viewData.map((slideContent, index) => (*/}
                {/*    <SwiperSlide key={slideContent} virtualIndex={index}>*/}
                {/*        <div style={{ width: '100vw', height: '50vh', color: '#ffffff'}}>*/}
                {/*            {slideContent}*/}
                {/*        </div>*/}
                {/*    </SwiperSlide>*/}
                {/*))}*/}

                <SwiperSlide>
                    <div style={{ width: '100vw', height: '50vh', color: '#ffffff'}}>
                        Silde 1
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ width: '100vw', height: '50vh', color: '#ffffff'}}>
                        Silde 2
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ width: '100vw', height: '50vh', color: '#ffffff'}}>
                        Silde 3
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ width: '100vw', height: '50vh', color: '#ffffff'}}>
                        Silde 4
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default SwiperVideo;