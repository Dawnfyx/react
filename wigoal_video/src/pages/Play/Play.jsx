import React, {useState, useEffect, useRef} from 'react';
import { connect } from 'react-redux';

import './Play.less'

import SwiperContainer from "../../Layout/components/Swiper/Swiper"
import VideoPlayerContainer from "../../Layout/components/Content/VideoJs/VideoPlayer";
import Anthology from "../../Layout/components/Content/Anthology/Anthology";
import videojs from "video.js";

const PlayPage = (props) => {
    const {drawerSwitch, drawerSwitchSet, setVideoData } = props;

    const videoData = [
        {
            src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
            img: 'https://img.elec.top/upload/7f810df4-1bab-4031-9aa6-02436898dc85.jpg',
        },
        {
            src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
            img: 'https://img.elec.top/upload/7f810df4-1bab-4031-9aa6-02436898dc85.jpg',
        },
        {
            src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
            img: 'https://img.elec.top/upload/7f810df4-1bab-4031-9aa6-02436898dc85.jpg',
        },
        {
            src: 'http://test2.dreamerlaw.work/mackvideo/test_video01.mp4',
            img: 'https://img.elec.top/upload/7f810df4-1bab-4031-9aa6-02436898dc85.jpg',
        },
        {
            src: 'http://test2.dreamerlaw.work/mackvideo/test_video02.mp4',
            img: 'https://img.elec.top/upload/7f810df4-1bab-4031-9aa6-02436898dc85.jpg',
        },
        {
            src: 'http://test2.dreamerlaw.work/mackvideo/test_video03.mp4',
            img: 'https://img.elec.top/upload/7f810df4-1bab-4031-9aa6-02436898dc85.jpg',
        },
        {
            src: 'http://test2.dreamerlaw.work/mackvideo/test_video04.mp4',
            img: 'https://img.elec.top/upload/7f810df4-1bab-4031-9aa6-02436898dc85.jpg',
        },
        {
            src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
            img: 'https://img.elec.top/upload/7f810df4-1bab-4031-9aa6-02436898dc85.jpg',
        },
        {
            src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
            img: 'https://img.elec.top/upload/7f810df4-1bab-4031-9aa6-02436898dc85.jpg',
        },
        {
            src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
            img: 'https://img.elec.top/upload/7f810df4-1bab-4031-9aa6-02436898dc85.jpg',
        },
    ]

    const childRef = useRef();
    const videoRef = useRef();
    const playerRef = useRef();
    const [videoDataKey, setVideoDataKey] = useState(0);
    const [progressTimeCurrent, setProgressTimeCurrent] = useState(0);
    const [progressTimeDuration, setProgressTimeDuration] = useState(0);
    const [isShowVideo, setIsShowVideo] = useState(false);

    const swiperSlideTo = (val) => {
        console.log(childRef, 'childRef.current');
        childRef.current.slideTo(val);
    }

    const handleVideoEnded = (message) => {
        console.log(message, videoDataKey, 'message')
    }

    // useEffect(() => {
    //     setVideoDataKey({
    //         src: videoData[0].src,
    //         img: videoData[0].img,
    //     })
    // }, []);

    return (
        <div className="play_box">
            <SwiperContainer
                childRef={childRef}
                videoRef={videoRef}
                videoData={videoData}
                isShowVideo={isShowVideo}
                setIsShowVideo={setIsShowVideo}
                videoDataKey={videoDataKey}
                progressTimeCurrent={progressTimeCurrent}
                progressTimeDuration={progressTimeDuration}
            >
            </SwiperContainer>
            <VideoPlayerContainer
                videoRef={videoRef}
                playerRef={playerRef}
                videoData={videoData}
                videoDataKey={videoDataKey}
                setVideoDataKey={setVideoDataKey}
                setProgressTimeCurrent={setProgressTimeCurrent}
                setProgressTimeDuration={setProgressTimeDuration}
                msgVideoEnded={handleVideoEnded}
            >
            </VideoPlayerContainer>
            <Anthology swiperSlideTo={swiperSlideTo}></Anthology>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        drawerStatus: state.anthology.anthologyStatus
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        drawerSwitch: () => dispatch({ type: 'SWITCH' }),
        drawerSwitchSet: (value) => dispatch({ type: 'SWITCHSET', value: value}),
        setVideoData: (value) => dispatch({ type: 'SETVIDEODATA', data: value}),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayPage);