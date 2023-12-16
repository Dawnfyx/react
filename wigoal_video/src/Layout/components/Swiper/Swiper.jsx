import React, {useState, useEffect, useRef, useImperativeHandle, forwardRef} from "react";
import {connect} from "react-redux";

import {register} from 'swiper/element/bundle';
import 'swiper/css';

import { Slider } from 'antd';

import btnPlay from '../../../assets/img/btn_play.png'

register();

const SwiperContainer = (props) => {
    const {childRef, videoRef, videoData, drawerSwitch, drawerSwitchSet, isShowVideo, setIsShowVideo} = props;

    const swiperElRef = useRef(null);
    const [isShowPlayBtn, setIsShowPlayBtn] = useState(true);
    const [progressValue, setProgressValue] = useState(0);

    const setSlideTo = (val = 1) => {
        swiperElRef.current.swiper.slideTo(val, 0);
    }

    const onProgressChange = (value) => {
        setProgressValue(progressValue);
    }

    const handleTouchStart = (event) => {

    }

    const handleTouchMove = (event) => {
        setIsShowVideo(true)
        setIsShowPlayBtn(true)
        const player = videoRef.current;
        player.pause()
    }

    const handleTouchEnd = (event) => {
        setIsShowVideo(false)
        setIsShowPlayBtn(false);
        const player = videoRef.current;
        player.play();
    }

    const handleSlideClick = (event) => {
        setIsShowPlayBtn(true)
        const player = videoRef.current;
        player.pause();
    }

    const handleSwiperPlayClick = (event) => {
        setIsShowPlayBtn(false);
        const player = videoRef.current;
        player.play();
    }

    useImperativeHandle(childRef, () => ({
        slideTo: setSlideTo
    }));

    useEffect(() => {
        const player = videoRef.current;
        console.log(player, 'videoRef.current')
    }, []);

    return (
        <div className="play_swiper">

            {/*swiper事件：*/}
            {/*- onInit：在swiper初始化完成时触发。*/}
            {/*- onSlideChangeStart：在swiper切换开始时触发。*/}
            {/*- onSlideChangeEnd：在swiper切换结束时触发。*/}
            {/*- onTouchStart：在swiper在触摸开始时触发。*/}
            {/*- onTouchMove：在swiper在触摸移动时触发。*/}
            {/*- onTouchEnd：在swiper在触摸结束时触发。*/}
            {/*- onResize：在swiper容器大小改变时触发。*/}
            {/*- onProgress：在swiper切换进度改变时触发。*/}
            {/*- onSlideClick：在swiper滑块被点击时触发。*/}
            {/*- onDoubleTap：在swiper被双击时触发。*/}
            {/*- onTouchMoveStart：在swiper在触摸开始时触发。*/}
            {/*- onTouchMoveEnd：在swiper在触摸结束时触发。*/}
            {/*- onTouchMoveStart：在swiper在触摸开始时触发。*/}

            <swiper-container
                ref={swiperElRef}
                direction={'vertical'}
                onTouchMove={(event) => handleTouchMove(event)}
                onTouchEnd={(event) => handleTouchEnd(event)}
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
                                <Slider
                                    className="progress_box"
                                    min={0}
                                    max={1}
                                    onChange={onProgressChange}
                                    value={typeof progressValue === 'number' ? progressValue : 0}
                                    step={0.01}
                                />
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




