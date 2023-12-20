import React, {useState, useEffect, useRef, useCallback} from 'react';
import { connect } from 'react-redux';

import './Play.less'

import SwiperContainer from "../../Layout/components/Swiper/Swiper"
import VideoPlayerContainer from "../../Layout/components/Content/VideoJs/VideoPlayer";
import Anthology from "../../Layout/components/Content/Anthology/Anthology";

const PlayPage = (props) => {
    const {videoData, setVideoData } = props;

    const childRef = useRef();
    const videoRef = useRef();
    const playerRef = useRef();
    const [videoDataKey, setVideoDataKey] = useState(0);
    const [isShowPlayBtn, setIsShowPlayBtn] = useState(true);
    const [progressTimeCurrent, setProgressTimeCurrent] = useState(0);
    const [progressTimeDuration, setProgressTimeDuration] = useState(0);

    const getVideoData = (callback) => {
        const tempvideoData = [
            {
                src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
                img: 'https://img.elec.top/upload/7f810df4-1bab-4031-9aa6-02436898dc85.jpg',
            },
            {
                src: 'https://vjs.zencdn.net/v/oceans.mp4',
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
                src: 'https://jf360videos.peopletech.cn/production/464f2fe20b1211ee83bef3d9bb3dfecd_1_video.mp4',
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
        setVideoData(tempvideoData)
        callback(tempvideoData)
    }

    const swiperSlideTo = (val) => {
        childRef.current.slideTo(val);
    }

    const swiperSlideEnd = (key) => {
        videoPlayKey(key)
        videoPlay();
    }

    const videoPlayNext = (key) => {
        videoPlayKey(key)
        swiperSlideTo(key)
    }
    const videoPlayKey = (key) => {
        setVideoDataKey(key)
        playerRef.current.src(videoData[key].src);
    }
    const videoPlay = () => {
        playerRef.current.play();
    }
    const videoPause = () => {
        playerRef.current.pause();
    }

    return (
        <div className="play_box">
            <span style={{
                color: '#ffffff',
            }}>{videoDataKey}</span>
            <SwiperContainer
                childRef={childRef}
                videoData={videoData}
                isShowPlayBtn={isShowPlayBtn}
                progressTimeCurrent={progressTimeCurrent}
                progressTimeDuration={progressTimeDuration}
                msgSwiperSlideEnd={swiperSlideEnd}
                msgVideoPlay={videoPlay}
                msgVideoPause={videoPause}
            >
            </SwiperContainer>
            <VideoPlayerContainer
                videoRef={videoRef}
                playerRef={playerRef}
                videoData={videoData}
                videoDataKey={videoDataKey}
                setVideoDataKey={setVideoDataKey}
                setIsShowPlayBtn={setIsShowPlayBtn}
                setProgressTimeCurrent={setProgressTimeCurrent}
                setProgressTimeDuration={setProgressTimeDuration}
                msgVideoEnded={videoPlayNext}
            >
            </VideoPlayerContainer>

            <Anthology AnthologyClick={videoPlayNext}></Anthology>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        videoData: state.videoData.videoData,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setVideoData: (value) => dispatch({ type: 'SETVIDEODATA', data: value}),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayPage);