import React, { useState, useEffect, useRef, useImperativeHandle, forwardRef } from "react";
import {connect} from "react-redux";

import { register } from 'swiper/element/bundle';
import 'swiper/css';

import './Swiper.less'

register();

const SwiperContainer = (props) => {
    const {videoData, drawerSwitch, drawerSwitchSet, childRef} = props;

    const swiperElRef = useRef(null);

    const setSlideTo = (val = 1)=>{
        swiperElRef.current?.swiper?.slideTo(val, 0);
    }

    useImperativeHandle(childRef, () => ({
        slideTo: setSlideTo
    }));

    useEffect(() => {

        // listen for Swiper events using addEventListener
        swiperElRef.current.addEventListener('swiperprogress', (e) => {
            const [swiper, progress] = e.detail;
        });

        swiperElRef.current.addEventListener('swiperslidechange', (e) => {
            const [swiper, progress] = e.detail;
            console.log('slide changed');
        });
    }, []);

    return (
        <div className="swiper_box">
            <swiper-container
                ref={swiperElRef}
                direction={'vertical'}
                class="swiper"
            >
                {
                    videoData.map((item, index) => (
                        <swiper-slide key={index} class="swiper-slide">
                            <img className="play_image" src={item.img} alt="" />
                            <h1 style={{
                                zIndex: '2',
                                position: 'absolute',
                            }}>
                                {index + 1}
                                <button onClick={()=>{setSlideTo(3)}}>{index + 1}</button>
                            </h1>
                            <div className="play_content" onClick={() => drawerSwitchSet(true)}>
                                DRAWERSWITCHSET
                            </div>
                        </swiper-slide>
                    ))
                }
            </swiper-container>
        </div>
    );
};

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


export default connect(mapStateToProps, mapDispatchToProps, null, {forwardRef: true})(forwardRef(SwiperContainer));




