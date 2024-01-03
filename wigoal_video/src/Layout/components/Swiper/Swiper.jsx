import React, {useState, useEffect, useRef, useImperativeHandle, forwardRef} from "react";
import {connect} from "react-redux";

import {register} from 'swiper/element/bundle';
import 'swiper/css';

import {
    LeftOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Spin, Slider, message } from 'antd';

import btnPlay from '../../../assets/img/btn_play.png'
import {formatTime} from "../../../utils/mixin";

register();

const SwiperContainer = (props) => {
    const {
        drawerSwitch,
        drawerSwitchSet,
        videoDetailsData,
        childRef,
        videoData,
        spinning,
        isShowPlayBtn,
        progressTimeCurrent,
        progressTimeDuration,
        msgSwiperSlideEnd,
        msgVideoPlay,
        msgVideoPause,
        msgProgressChange,
    } = props;

    const swiperElRef = useRef(null);
    const [messageApi, contextHolder] = message.useMessage();
    const [isShowPlayImg, setIsShowPlayImg] = useState(false);

    const setSlideTo = (val = 0) => {
        swiperElRef.current.swiper.slideTo(val, 100);
    }

    const handleReturnDetails = () => {
        window.location.href = window.location.origin + "/details";
    }

    const onProgressChange = (value) => {
        msgProgressChange(value)
    }

    const sliderFormatter = (value) => {
        return formatTime(value);
    }

    const onSliderBlur = (event) => {
        // console.log(event, 'sliderFormatter')
        debugger
    }

    const videoPause = (event) => {
        msgVideoPause()
    }

    const videoPlay = (event) => {
        msgVideoPlay()
    }

    useImperativeHandle(childRef, () => ({
        slideTo: setSlideTo
    }));

    useEffect(() => {
        // swiperElRef.current.addEventListener('swiper-progress', (event) => {
        //     const [swiper, progress] = event.detail;
        // });

        swiperElRef.current.addEventListener('swiper-touchmove', (event) => {
            const [swiper, progress] = event.detail;
            setIsShowPlayImg(true)
            videoPause()
            // if(swiper.activeIndex === 0){
            //     messageApi.open({
            //         type: 'warning',
            //         content: 'You\'ve reached the first episode',
            //     });
            // }
        });

        swiperElRef.current.addEventListener('swiper-touchend', (event) => {
            const [swiper, progress] = event.detail;
            setIsShowPlayImg(false)
        });

        swiperElRef.current.addEventListener('swiper-slidechange', (event) => {
            const [swiper] = event.detail;
            // console.log('slide changed', swiper.activeIndex );
        });

        // swiperElRef.current.addEventListener('swiper-slidenexttransitionend', (event) => {
        //     const [swiper] = event.detail;
        //     console.log('slide slidenexttransitionend', swiper.activeIndex );
        //     // if (swiper.activeIndex === 0) {
        //     //     alert('已经是第一张了');
        //     // }
        // });

        // swiperElRef.current.addEventListener('swiper-slideprevtransitionend', (event) => {
        //     const [swiper] = event.detail;
        //     console.log('slide slideprevtransitionend', swiper.activeIndex );
        //     // if (swiper.activeIndex === 0) {
        //     //     alert('已经是第一张了');
        //     // }
        // });

        swiperElRef.current.addEventListener('swiper-touchend', (event) => {
            // console.log('slide touchEnd');
        });

        swiperElRef.current.addEventListener('swiper-transitionend', (event) => {
            const [swiper] = event.detail;
            msgSwiperSlideEnd(swiper.activeIndex)
            // console.log('slide changed end', swiper.activeIndex );
        });

        // swiperElRef.current.addEventListener('swiper-slidechangetransitionend', (event) => {
        //     console.log('slide changed end');
        // });

    }, [swiperElRef]);

    return (
        <div className="play_swiper">
            <Spin spinning={spinning} tip="Loading" fullscreen/>
            <swiper-container
                ref={swiperElRef}
                events-prefix="swiper-"
                direction={'vertical'}
                class="swiper"
            >
                {
                    videoData.map((item, index) => (
                        <swiper-slide key={index} class="swiper-slide">

                            <div className="play_top">
                                <span className="return_btn" onClick={() => handleReturnDetails()}>
                                    <LeftOutlined />
                                </span>
                                {/*{*/}
                                {/*    videoDetailsData*/}
                                {/*        ?  <div className="play_title">*/}
                                {/*            {*/}
                                {/*                videoDetailsData.title*/}
                                {/*            }*/}
                                {/*            <span> ({index + 1}/{videoData.length}) </span>*/}
                                {/*        </div>*/}
                                {/*        : ''*/}
                                {/*}*/}
                                <span>&nbsp;</span>
                            </div>

                            <img className="play_swiper_btn"
                                 src={btnPlay} alt=""
                                 onClick={(event) => videoPlay(event)}
                                 style={{
                                     opacity: isShowPlayBtn ? 1 : 0,
                                 }}
                            />
                            <img className="play_image"
                                 src={item.img}
                                 alt=""
                                 onClick={(event) => videoPause(event)}
                                 style={{
                                     opacity: isShowPlayImg ? 1 : 0,
                                 }}
                            />
                            <div className="play_content">
                                <div className="schedule_box">
                                    <div className="time time_s">
                                        {
                                            formatTime(progressTimeCurrent)
                                        }
                                        {/*<br/>*/}
                                        {/*{*/}
                                        {/*    progressTimeCurrent*/}
                                        {/*}*/}
                                    </div>
                                    <Slider
                                        className="progress_box"
                                        min={0}
                                        max={progressTimeDuration}
                                        onChange={onProgressChange}
                                        value={typeof progressTimeCurrent === 'number' ? progressTimeCurrent : 0}
                                        step={0.1}
                                        tooltip={{
                                            formatter: value => sliderFormatter(value),
                                        }}
                                        onBlur={onSliderBlur}
                                    />

                                    <div className="time time_e">
                                        {
                                            formatTime(progressTimeDuration)
                                        }
                                        {/*<br/>*/}
                                        {/*{*/}
                                        {/*    progressTimeDuration*/}
                                        {/*}*/}
                                    </div>
                                </div>
                                <div className="episode_box" onClick={() => drawerSwitchSet(true)}>
                                    <MenuUnfoldOutlined /> Episodes <span> {index + 1}/{videoData.length} </span>
                                </div>
                            </div>
                        </swiper-slide>
                    ))
                }
            </swiper-container>
            {contextHolder}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        drawerStatus: state.anthology.anthologyStatus,
        videoDetailsData: state.videoDetailsData.videoDetailsData,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        drawerSwitch: () => dispatch({type: 'SWITCH'}),
        drawerSwitchSet: (value) => dispatch({type: 'SWITCHSET', value: value}),
    };
};


export default connect(mapStateToProps, mapDispatchToProps, null, {forwardRef: true})(forwardRef(SwiperContainer));




