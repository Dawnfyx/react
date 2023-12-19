import React, {useState, useEffect, useRef, useImperativeHandle, forwardRef} from "react";
import {connect} from "react-redux";

import {register} from 'swiper/element/bundle';
import 'swiper/css';

import { Slider } from 'antd';

import videojs from "video.js";
import btnPlay from '../../../assets/img/btn_play.png'
import {formatTime} from "../../../utils/mixin";

register();

const SwiperContainer = (props) => {
    const {
        drawerSwitch,
        drawerSwitchSet,
        childRef,
        playerRef,
        videoData,
        isShowVideo,
        setIsShowVideo,
        videoDataKey,
        progressTimeCurrent,
        progressTimeDuration,
        msgSlideEnd,
    } = props;

    const swiperElRef = useRef(null);
    const [isShowPlayBtn, setIsShowPlayBtn] = useState(true);
    const [progressValue, setProgressValue] = useState(0);

    const setSlideTo = (val = 1) => {
        swiperElRef.current.swiper.slideTo(val, 0);
    }

    const onProgressChange = (value) => {
        setProgressValue(value);
    }

    const handleTouchStart = (event) => {
    }

    const handleTouchMove = (event) => {
        setIsShowVideo(true)
        setIsShowPlayBtn(true)
        const player = playerRef.current;
        player.pause()
    }

    const handleTouchEnd = (event) => {
        setIsShowVideo(false)
        setIsShowPlayBtn(false);
        const player = playerRef.current;
        player.play();
    }

    const handleSlideEnd = (event) => {
        msgSlideEnd('slideChangeEnd')
    }

    const handleSlideClick = (event) => {
        setIsShowPlayBtn(true)
        const player = playerRef.current;
        player.pause();
    }

    const handleSwiperPlayClick = (event) => {
        setIsShowPlayBtn(false);
        const player = playerRef.current;
        player.play();
    }

    useImperativeHandle(childRef, () => ({
        slideTo: setSlideTo
    }));

    // useEffect(() => {
    // }, []);

    return (
        <div className="play_swiper">

            <swiper-container
                ref={swiperElRef}
                direction={'vertical'}
                onTouchMove={(event) => handleTouchMove(event)}
                onTouchEnd={(event) => handleTouchEnd(event)}
                onSlideChangeEnd={(event) => handleSlideEnd(event)}
                class="swiper"
            >
                {
                    videoData.map((item, index) => (
                        <swiper-slide key={index} class="swiper-slide">
                            <img className="play_swiper_btn"
                                 src={btnPlay} alt=""
                                 onClick={(event) => handleSwiperPlayClick(event)}
                                 style={{
                                     opacity: isShowPlayBtn ? 1 : 0,
                                 }}
                            />

                            <h1>
                                {index + 1}
                                {'' + isShowVideo}
                                <br/>
                            </h1>


                            <img className="play_image"
                                 src="https://storage.flyingshort.com/upload/ee85b2a6-a9e8-446a-a514-59830fa47146.png"
                                 alt=""
                                 onClick={(event) => handleSlideClick(event)}
                                 style={{
                                     opacity: isShowVideo ? 1 : 0,
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
                                    DRAWERSWITCHSET
                                </div>
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
        drawerSwitch: () => dispatch({type: 'SWITCH'}),
        drawerSwitchSet: (value) => dispatch({type: 'SWITCHSET', value: value}),
    };
};


export default connect(mapStateToProps, mapDispatchToProps, null, {forwardRef: true})(forwardRef(SwiperContainer));




