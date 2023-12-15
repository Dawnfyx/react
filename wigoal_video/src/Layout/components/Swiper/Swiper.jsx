import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import './Swiper.less'

const SwiperContainer = (props) => {

    const {videoData, drawerSwitch, drawerSwitchSet} = props;

    return (
        <div className="swiper_box">
            <Swiper
                direction={'vertical'}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    videoData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <img className="play_image"  src={item.img} alt=""/>
                            <div className="play_content"  onClick={()=> drawerSwitchSet(true)}>
                                DRAWERSWITCHSET
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        drawerStatus: state.anthology.anthologyStatus,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        drawerSwitch: () => dispatch({ type: 'SWITCH' }),
        drawerSwitchSet: (value) => dispatch({ type: 'SWITCHSET', value: value}),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SwiperContainer);